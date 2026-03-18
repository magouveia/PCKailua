import fs from 'fs';
import path from 'path';
import archiver from 'archiver';

const outputFile = path.join(process.cwd(), 'public', 'project.zip');
const output = fs.createWriteStream(outputFile);
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// Add files and directories
const files = fs.readdirSync(process.cwd());

files.forEach(file => {
  if (file === 'node_modules' || file === '.git' || file === 'dist' || file === 'public' || file === 'project.zip') {
    return;
  }
  
  const filePath = path.join(process.cwd(), file);
  const stats = fs.statSync(filePath);

  if (stats.isDirectory()) {
    archive.directory(filePath, file);
  } else {
    archive.file(filePath, { name: file });
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
      archive.directory(filePath, path.join('public', file));
    } else {
      archive.file(filePath, { name: path.join('public', file) });
    }
  });
}

archive.finalize();
