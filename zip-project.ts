import AdmZip from 'adm-zip';
import path from 'path';
import fs from 'fs';

const zip = new AdmZip();
const outputFile = path.join(process.cwd(), 'public', 'project.zip');

// Add files and directories
const files = fs.readdirSync(process.cwd());

files.forEach(file => {
  if (file === 'node_modules' || file === '.git' || file === 'dist' || file === 'public' || file === 'project.zip') {
    return;
  }
  
  const filePath = path.join(process.cwd(), file);
  const stats = fs.statSync(filePath);

  if (stats.isDirectory()) {
    zip.addLocalFolder(filePath, file);
  } else {
    zip.addLocalFile(filePath);
  }
});

// Add public folder content (excluding project.zip)
const publicPath = path.join(process.cwd(), 'public');
if (fs.existsSync(publicPath)) {
  const publicFiles = fs.readdirSync(publicPath);
  publicFiles.forEach(file => {
    if (file === 'project.zip') return;
    const filePath = path.join(publicPath, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      zip.addLocalFolder(filePath, path.join('public', file));
    } else {
      zip.addLocalFile(filePath, 'public');
    }
  });
}

zip.writeZip(outputFile);
console.log(`Created ${outputFile}`);
