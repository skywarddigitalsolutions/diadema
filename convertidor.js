const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const rootDir = path.join(__dirname, "public", "obras");

function isImage(file) {
  // Considera extensiones de imágenes a convertir
  return /\.(jpg|jpeg|png)$/i.test(file);
}

async function convertImageToWebp(imagePath) {
  const newImagePath = imagePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  try {
    await sharp(imagePath)
      .webp({ quality: 80 })  // Calidad 80% (podés ajustar)
      .toFile(newImagePath);

     fs.unlinkSync(imagePath);

    console.log(`✅ Convertido: ${path.basename(imagePath)} → ${path.basename(newImagePath)}`);
  } catch (error) {
    console.error(`❌ Error al convertir ${imagePath}:`, error);
  }
}

async function processFolder(folderPath) {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const fullPath = path.join(folderPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processFolder(fullPath);
    } else if (stat.isFile() && isImage(file)) {
      await convertImageToWebp(fullPath);
    }
  }
}

processFolder(rootDir)
  .then(() => console.log("🚀 Conversión a WebP finalizada."))
  .catch(console.error);
