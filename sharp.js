const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const heroPath = path.resolve(__dirname, 'src/public/images/heros');
const logoPath = path.resolve(__dirname, 'src/public/images/logo');

function resizeImages(sourceFolder) {
  fs.readdirSync(sourceFolder).forEach((image) => {
    const imagePath = path.resolve(sourceFolder, image);
    const ext = path.extname(image);

    sharp(imagePath)
      .resize(800)
      .toFile(
        path.resolve(
          sourceFolder,
          `${image.split('.').slice(0, -1).join('.')}-large${ext}`,
        ),
      );

    sharp(imagePath)
      .resize(480)
      .toFile(
        path.resolve(
          sourceFolder,
          `${image.split('.').slice(0, -1).join('.')}-small${ext}`,
        ),
      );
  });
}

resizeImages(heroPath);
resizeImages(logoPath);
