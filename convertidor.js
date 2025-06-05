const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const baseDir = path.join(__dirname, "public");

const imagesToRotate = [
  "/Obras/residencial/ozanam/ozanam4.webp",
  "/Obras/residencial/ozanam/ozanam7.webp",
  "/Obras/residencial/ozanam/ozanam8.webp",
  "/Obras/residencial/ozanam/ozanam9.webp",
  "/Obras/residencial/ozanam/ozanam18.webp",
  "/Obras/residencial/ozanam/ozanam19.webp",
  "/Obras/industrial/pampa-energia/playones-hormigon/playones-hormigon1.webp",
  "/Obras/industrial/pampa-energia/cubierta-estacionamiento/cubierta-estacionamiento4.webp",
  "/Obras/industrial/pampa-energia/jaula-almacenamiento/jaula-almacenamiento1.webp",
  "/Obras/industrial/pampa-energia/jaula-almacenamiento/jaula-almacenamiento3.webp",
  "/Obras/industrial/pampa-energia/jaula-almacenamiento/jaula-almacenamiento4.webp",
  "/Obras/industrial/pampa-energia/jaula-almacenamiento/jaula-almacenamiento6.webp",
  "/Obras/industrial/pampa-energia/veredas1/veredas13.webp",
  "/Obras/industrial/pampa-energia/veredas1/veredas14.webp",
  "/Obras/industrial/pampa-energia/veredas1/veredas17.webp",
  "/Obras/industrial/pampa-energia/veredas1/veredas110.webp",
  "/Obras/industrial/pampa-energia/veredas2/veredas21.webp",
  "/Obras/industrial/pampa-energia/veredas2/veredas23.webp",
  "/Obras/industrial/pampa-energia/veredas2/veredas24.webp",
  "/Obras/industrial/pampa-energia/arquetas-hormigon/arquetas-hormigon2.webp",
  "/Obras/industrial/pampa-energia/arquetas-hormigon/arquetas-hormigon3.webp",
  "/Obras/industrial/pampa-energia/arquetas-hormigon/arquetas-hormigon4.webp",
  "/Obras/industrial/pampa-energia/arquetas-hormigon/arquetas-hormigon5.webp",
  "/Obras/industrial/pampa-energia/arquetas-hormigon/arquetas-hormigon6.webp",
  "/Obras/industrial/pampa-energia/camaras-de-vigilancia/camaras-de-vigilancia1.webp",
  "/Obras/industrial/fundacionsi/giribone/giribone7.webp",
  "/Obras/industrial/fundacionsi/giribone/giribone8.webp",
  "/Obras/industrial/fundacionsi/giribone/giribone9.webp",
  "/Obras/industrial/fundacionsi/giribone/giribone13.webp",
  "/Obras/industrial/fundacionsi/giribone/giribone16.webp",
  "/Obras/industrial/fundacionsi/giribone/giribone17.webp",
  "/Obras/industrial/fundacionsi/giribone/giribone18.webp",
  "/Obras/residencial/golfers-pilar/golfers-pilar3.webp",
  "/Obras/residencial/golfers-pilar/golfers-pilar4.webp",
  "/Obras/residencial/golfers-pilar/golfers-pilar6.webp",
  "/Obras/residencial/pola/pola2.webp",
  "/Obras/residencial/pola/pola5.webp",
  "/Obras/residencial/pola/pola6.webp",
  "/Obras/residencial/lavalle/lavalle3.webp",
  "/Obras/residencial/martinez/martinez1.webp",
  "/Obras/residencial/martinez/martinez2.webp",
  "/Obras/residencial/martinez/martinez3.webp",
  "/Obras/residencial/martinez/martinez4.webp",
  "/Obras/residencial/martinez/martinez5.webp",
  "/Obras/residencial/martinez/martinez7.webp",
  "/Obras/residencial/martinez/martinez10.webp",
  "/Obras/residencial/medrano/medrano3.webp",
  "/Obras/residencial/medrano/medrano4.webp",
  "/Obras/residencial/piedras/piedras1.webp",
  "/Obras/residencial/piedras/piedras2.webp",
  "/Obras/residencial/nordelta/nordelta1.webp",
  "/Obras/residencial/nordelta/nordelta2.webp",
  "/Obras/residencial/nordelta/nordelta3.webp",
  "/Obras/residencial/nordelta/nordelta4.webp",
  "/Obras/residencial/nordelta/nordelta5.webp",
  "/Obras/residencial/nordelta/nordelta6.webp",
  "/Obras/residencial/ate-brown/ate-brown1.webp",
  "/Obras/residencial/ate-brown/ate-brown2.webp",
  "/Obras/residencial/ate-brown/ate-brown3.webp",
  "/Obras/residencial/ate-brown/ate-brown5.webp",
  "/Obras/residencial/ate-brown/ate-brown8.webp",
  "/Obras/residencial/ate-brown/ate-brown9.webp",
  "/Obras/residencial/ate-brown/ate-brown10.webp"
];

imagesToRotate.forEach(async (relativePath) => {
  const fullPath = path.join(baseDir, relativePath);

  try {
    const buffer = await sharp(fullPath)
      .rotate(90) // Rota 90° en sentido horario
      .toBuffer();

    await sharp(buffer).toFile(fullPath);
    console.log("✅ Rotado:", relativePath);
  } catch (error) {
    console.error("❌ Error en", relativePath, error.message);
  }
});
