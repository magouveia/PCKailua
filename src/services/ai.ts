import { GoogleGenAI } from "@google/genai";

export interface Slide {
  id: string;
  title: string;
  content: string[]; // Bullet points
  notes?: string;
  layout: 'title' | 'content' | 'section' | 'quote' | 'index' | 'cards' | 'salary-progression' | 'rules' | 'career-structure' | 'table';
}

export const generateSlides = async (text: string): Promise<Slide[]> => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("Gemini API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  const prompt = `
    You are a professional presentation designer. 
    Convert the following text (which is a career progression plan) into a structured presentation.
    
    The input text is in Portuguese. The output slides MUST be in Portuguese.

    Return a JSON array of slide objects.
    Each slide object must have:
    - id: unique string
    - title: string
    - content: array of strings (bullet points)
    - notes: string (speaker notes)
    - layout: one of 'title', 'content', 'section', 'quote', 'index', 'cards', 'salary-progression'

    Structure the presentation as follows:
    1. Title Slide (layout: 'title')
    2. Index Slide (layout: 'index') - List the main sections of the presentation.
    3. Introduction/Context Slide (layout: 'content') - Use the content that was previously on slide 2.
    4. Evaluation Criteria Slide (layout: 'cards') - This MUST be the slide about "Critérios de Avaliação" / "Escala de Desempenho". 
       - The content array should contain 5 items, one for each rating level (Insatisfatório, Satisfatório, Bom, Muito Bom, Excelente).
       - Format each item string as: "Title | Subtitle | Description | Consequence". 
       - Example: "Insatisfatório | ABAIXO DO MÍNIMO | Não corresponde às expectativas da função. | Não elegível para progressão."
    5. Salary Progression Slide (layout: 'salary-progression') - This MUST be the slide about "Evolução Salarial".
       - Title: "Como Funciona a Progressão Salarial"
       - Content array MUST have exactly 3 items corresponding to the 3 cards:
         - Item 1: "Atualização Anual | BASE ESTRUTURAL | Garante que a remuneração acompanha a evolução do mercado e o custo de vida. | Indexada ao SMN ou inflação anual. | Condicionada ao atingimento de um EBITDA mínimo definido pela empresa. | Aplicável a todos (exceto avaliação Insatisfatória)."
         - Item 2: "Fim de Nível | MÉRITO & DESEMPENHO | Percentuais de aumento aplicados ao concluir o tempo de permanência no nível: | Bom:+0,5% Horizontal | Muito Bom:+2% Vertical | Excelente:+4% Vertical Acelerada"
         - Item 3: "Aceleração | PERFORMANCE EXCECIONAL | Mecanismo de 'Fast Track' para talentos de alto rendimento. | Critério: Avaliações 'Excelente' em todos os anos do nível atual. | Benefício: Encurtamento do tempo mínimo no nível seguinte. | Exemplo: Redução de 24 para 12 meses."
    6. Follow with the rest of the content (Rules, Career Paths, etc.) using appropriate layouts ('content', 'section', 'quote').

    Make sure the first slide is a 'title' slide.
    Break down long content into multiple slides.
    Keep bullet points concise.
    
    Input Text:
    ${text}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const jsonText = response.text;
    if (!jsonText) return [];
    
    // Strip markdown code blocks if present
    const cleanJson = jsonText.replace(/```json\n?|\n?```/g, '').trim();
    
    return JSON.parse(cleanJson) as Slide[];
  } catch (error) {
    console.error("Error generating slides:", error);
    throw error;
  }
};
