import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import * as xlsx from "xlsx";
import PDFDocument from "pdfkit";

// Global transporter for Ethereal to avoid rate limits
let cachedTransporter: nodemailer.Transporter | null = null;

async function getTransporter() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  if (cachedTransporter) {
    return cachedTransporter;
  }

  console.log("Creating new Ethereal test account...");
  const testAccount = await nodemailer.createTestAccount();
  cachedTransporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
  
  return cachedTransporter;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Pre-initialize the email transporter
  try {
    await getTransporter();
    console.log("Email transporter initialized.");
  } catch (error) {
    console.error("Failed to initialize email transporter:", error);
  }

  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/evaluate", async (req, res) => {
    try {
      const { employeeName, evaluatorName, roleTitle, sectorName, scores, criteria } = req.body;

      // 1. Generate Excel
      const excelData = [
        { Categoria: "Informação", Critério: "Colaborador", Nota: employeeName },
        { Categoria: "Informação", Critério: "Avaliador", Nota: evaluatorName },
        { Categoria: "Informação", Critério: "Função", Nota: roleTitle },
        { Categoria: "Informação", Critério: "Setor", Nota: sectorName },
        { Categoria: "", Critério: "", Nota: "" },
        { Categoria: "Organizacional (10%)", Critério: criteria.organizational, Nota: scores['org-0'] || 'N/A' },
        { Categoria: "", Critério: "", Nota: "" },
      ];

      criteria.technical.forEach((item: string, index: number) => {
        excelData.push({ Categoria: "Técnico (60%)", Critério: item, Nota: scores[`tech-${index}`] || 'N/A' });
      });
      
      excelData.push({ Categoria: "", Critério: "", Nota: "" });

      criteria.behavioral.forEach((item: string, index: number) => {
        excelData.push({ Categoria: "Comportamental (30%)", Critério: item, Nota: scores[`comp-${index}`] || 'N/A' });
      });

      const wb = xlsx.utils.book_new();
      const ws = xlsx.utils.json_to_sheet(excelData);
      
      // Auto-size columns for Excel
      ws['!cols'] = [{ wch: 25 }, { wch: 80 }, { wch: 10 }];
      
      xlsx.utils.book_append_sheet(wb, ws, "Avaliação");
      const excelBuffer = xlsx.write(wb, { type: "buffer", bookType: "xlsx" });

      // 2. Generate HTML Email Layout
      
      const renderScoreCircle = (score: any) => {
        const scoreStr = String(score);
        const isRated = scoreStr !== 'N/A';
        return `
          <div style="
            width: 24px; 
            height: 24px; 
            border-radius: 50%; 
            background-color: ${isRated ? '#d97706' : '#78716c'}; 
            color: ${isRated ? '#1a1a1a' : '#ffffff'}; 
            display: inline-flex; 
            align-items: center; 
            justify-content: center; 
            font-weight: bold; 
            font-size: 12px;
            text-align: center;
            line-height: 24px;
            flex-shrink: 0;
          ">${scoreStr}</div>
        `;
      };

      const renderSection = (title: string, items: { text: string, score: any }[]) => {
        let html = `
          <div style="margin-bottom: 30px;">
            <h3 style="color: #d97706; font-size: 18px; margin-bottom: 15px; border-bottom: 1px solid #333; padding-bottom: 5px;">${title}</h3>
            <table style="width: 100%; border-collapse: collapse;">
        `;
        
        items.forEach(item => {
          html += `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #262626; color: #e5e5e5; font-size: 14px; line-height: 1.5; padding-right: 15px;">
                ${item.text}
              </td>
              <td style="padding: 10px 0; border-bottom: 1px solid #262626; width: 40px; text-align: right; vertical-align: middle;">
                ${renderScoreCircle(item.score)}
              </td>
            </tr>
          `;
        });
        
        html += `
            </table>
          </div>
        `;
        return html;
      };

      const htmlEmail = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #1a1a1a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #ffffff;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #1a1a1a; padding: 40px 20px;">
            
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 40px;">
              <img src="https://i.imgur.com/XjJRuQ4.png" alt="Kailua Logo" style="max-width: 120px; height: auto; margin-bottom: 20px; display: inline-block;" />
              <h1 style="color: #fef3c7; font-size: 28px; margin: 0 0 10px 0;">Avaliação de Desempenho</h1>
              <h2 style="color: #d97706; font-size: 18px; margin: 0; font-weight: normal;">${roleTitle}</h2>
            </div>

            <!-- Info Box -->
            <div style="background-color: #262626; border-radius: 8px; padding: 20px; margin-bottom: 40px; border-left: 4px solid #d97706;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 5px 0; color: #a8a29e; width: 100px;">Colaborador:</td>
                  <td style="padding: 5px 0; color: #fef3c7; font-weight: bold;">${employeeName}</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; color: #a8a29e;">Avaliador:</td>
                  <td style="padding: 5px 0; color: #fef3c7; font-weight: bold;">${evaluatorName}</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; color: #a8a29e;">Setor:</td>
                  <td style="padding: 5px 0; color: #fef3c7; font-weight: bold;">${sectorName}</td>
                </tr>
              </table>
            </div>

            <!-- Sections -->
            ${renderSection('Critério Organizacional (10%)', [
              { text: criteria.organizational, score: scores['org-0'] || 'N/A' }
            ])}

            ${renderSection('Critérios Técnicos (60%)', criteria.technical.map((t: string, i: number) => ({
              text: t, score: scores[`tech-${i}`] || 'N/A'
            })))}

            ${renderSection('Critérios Comportamentais (30%)', criteria.behavioral.map((b: string, i: number) => ({
              text: b, score: scores[`comp-${i}`] || 'N/A'
            })))}

            <!-- Footer -->
            <div style="text-align: center; margin-top: 50px; padding-top: 20px; border-top: 1px solid #333;">
              <p style="color: #78716c; font-size: 12px; margin: 0;">Gerado automaticamente pelo sistema de Avaliação Kailua</p>
              <p style="color: #78716c; font-size: 12px; margin: 5px 0 0 0;">O ficheiro Excel com os dados estruturados encontra-se em anexo.</p>
            </div>

          </div>
        </body>
        </html>
      `;

      // 3. Send Email
      // For development, we use Ethereal (fake SMTP service)
      // In production, you would use your own SMTP credentials
      const transporter = await getTransporter();

      const info = await transporter.sendMail({
        from: '"Kailua RH" <rh@kailua.pt>',
        to: "daniela.gouveia@kailua.pt", // Default recipient, or could be dynamic
        subject: `Avaliação de Desempenho - ${employeeName}`,
        text: `Segue em anexo a avaliação de desempenho de ${employeeName} para a função de ${roleTitle}.`,
        html: htmlEmail,
        attachments: [
          {
            filename: `Dados_${employeeName.replace(/\s+/g, '_')}.xlsx`,
            content: excelBuffer,
            contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
          }
        ]
      });

      const previewUrl = nodemailer.getTestMessageUrl(info);
      console.log("Message sent: %s", info.messageId);
      if (previewUrl) {
        console.log("Preview URL: %s", previewUrl);
      }

      res.json({ 
        success: true, 
        message: "Avaliação enviada com sucesso!",
        previewUrl: previewUrl // Send back to client so they can see it in dev mode
      });

    } catch (error) {
      console.error("Error generating evaluation:", error);
      res.status(500).json({ success: false, error: "Erro ao processar a avaliação." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
