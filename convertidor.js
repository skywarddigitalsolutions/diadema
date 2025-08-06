const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const baseDir = path.join(__dirname, "public");

const imagesToRotate = [
  "/Proyectos/residencial/ozanam/ozanam4.webp",
  "/Proyectos/residencial/ozanam/ozanam7.webp",
  "/Proyectos/residencial/ozanam/ozanam8.webp",
  "/Proyectos/residencial/ozanam/ozanam9.webp",
  "/Proyectos/residencial/ozanam/ozanam18.webp",
  "/Proyectos/residencial/ozanam/ozanam19.webp",
  "/Proyectos/industrial/pampa-energia/playones-hormigon/playones-hormigon1.webp",
  "/Proyectos/industrial/pampa-energia/cubierta-estacionamiento/cubierta-estacionamiento4.webp",
  "/Proyectos/industrial/pampa-energia/jaula-almacenamiento/jaula-almacenamiento1.webp",
  "/Proyectos/industrial/pampa-energia/jaula-almacenamiento/jaula-almacenamiento3.webp",
  "/Proyectos/industrial/pampa-energia/jaula-almacenamiento/jaula-almacenamiento4.webp",
  "/Proyectos/industrial/pampa-energia/jaula-almacenamiento/jaula-almacenamiento6.webp",
  "/Proyectos/industrial/pampa-energia/veredas1/veredas13.webp",
  "/Proyectos/industrial/pampa-energia/veredas1/veredas14.webp",
  "/Proyectos/industrial/pampa-energia/veredas1/veredas17.webp",
  "/Proyectos/industrial/pampa-energia/veredas1/veredas110.webp",
  "/Proyectos/industrial/pampa-energia/veredas2/veredas21.webp",
  "/Proyectos/industrial/pampa-energia/veredas2/veredas23.webp",
  "/Proyectos/industrial/pampa-energia/veredas2/veredas24.webp",
  "/Proyectos/industrial/pampa-energia/arquetas-hormigon/arquetas-hormigon2.webp",
  "/Proyectos/industrial/pampa-energia/arquetas-hormigon/arquetas-hormigon3.webp",
  "/Proyectos/industrial/pampa-energia/arquetas-hormigon/arquetas-hormigon4.webp",
  "/Proyectos/industrial/pampa-energia/arquetas-hormigon/arquetas-hormigon5.webp",
  "/Proyectos/industrial/pampa-energia/arquetas-hormigon/arquetas-hormigon6.webp",
  "/Proyectos/industrial/pampa-energia/camaras-de-vigilancia/camaras-de-vigilancia1.webp",
  "/Proyectos/industrial/fundacionsi/giribone/giribone7.webp",
  "/Proyectos/industrial/fundacionsi/giribone/giribone8.webp",
  "/Proyectos/industrial/fundacionsi/giribone/giribone9.webp",
  "/Proyectos/industrial/fundacionsi/giribone/giribone13.webp",
  "/Proyectos/industrial/fundacionsi/giribone/giribone16.webp",
  "/Proyectos/industrial/fundacionsi/giribone/giribone17.webp",
  "/Proyectos/industrial/fundacionsi/giribone/giribone18.webp",
  "/Proyectos/residencial/golfers-pilar/golfers-pilar3.webp",
  "/Proyectos/residencial/golfers-pilar/golfers-pilar4.webp",
  "/Proyectos/residencial/golfers-pilar/golfers-pilar6.webp",
  "/Proyectos/residencial/pola/pola2.webp",
  "/Proyectos/residencial/pola/pola5.webp",
  "/Proyectos/residencial/pola/pola6.webp",
  "/Proyectos/residencial/lavalle/lavalle3.webp",
  "/Proyectos/residencial/martinez/martinez1.webp",
  "/Proyectos/residencial/martinez/martinez2.webp",
  "/Proyectos/residencial/martinez/martinez3.webp",
  "/Proyectos/residencial/martinez/martinez4.webp",
  "/Proyectos/residencial/martinez/martinez5.webp",
  "/Proyectos/residencial/martinez/martinez7.webp",
  "/Proyectos/residencial/martinez/martinez10.webp",
  "/Proyectos/residencial/medrano/medrano3.webp",
  "/Proyectos/residencial/medrano/medrano4.webp",
  "/Proyectos/residencial/piedras/piedras1.webp",
  "/Proyectos/residencial/piedras/piedras2.webp",
  "/Proyectos/residencial/nordelta/nordelta1.webp",
  "/Proyectos/residencial/nordelta/nordelta2.webp",
  "/Proyectos/residencial/nordelta/nordelta3.webp",
  "/Proyectos/residencial/nordelta/nordelta4.webp",
  "/Proyectos/residencial/nordelta/nordelta5.webp",
  "/Proyectos/residencial/nordelta/nordelta6.webp",
  "/Proyectos/residencial/ate-brown/ate-brown1.webp",
  "/Proyectos/residencial/ate-brown/ate-brown2.webp",
  "/Proyectos/residencial/ate-brown/ate-brown3.webp",
  "/Proyectos/residencial/ate-brown/ate-brown5.webp",
  "/Proyectos/residencial/ate-brown/ate-brown8.webp",
  "/Proyectos/residencial/ate-brown/ate-brown9.webp",
  "/Proyectos/residencial/ate-brown/ate-brown10.webp"
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
