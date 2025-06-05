// corregir-rotacion.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const baseDir = path.join(__dirname, "obras");

function procesarImagen(rutaImagen) {
  sharp(rutaImagen)
    .rotate() // 🔁 Corrige la rotación automática según EXIF
    .toBuffer()
    .then((data) => {
      fs.writeFileSync(rutaImagen, data); // Sobrescribe la imagen corregida
      console.log("✅ Rotada:", rutaImagen);
    })
    .catch((err) => {
      console.error("❌ Error al rotar", rutaImagen, err.message);
    });
}

function recorrerCarpetas(dir) {
  fs.readdirSync(dir).forEach((archivo) => {
    const rutaCompleta = path.join(dir, archivo);
    const stat = fs.statSync(rutaCompleta);

    if (stat.isDirectory()) {
      recorrerCarpetas(rutaCompleta);
    } else if (rutaCompleta.endsWith(".webp")) {
      procesarImagen(rutaCompleta);
    }
  });
}

recorrerCarpetas(baseDir);
