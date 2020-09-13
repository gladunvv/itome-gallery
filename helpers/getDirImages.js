const fs = require('fs');

module.exports.getDirImages = (source) => {
  try {
    return fs
      .readdirSync(source, { withFileTypes: true })
      .filter((image) => /\.(jpe?g|png)$/i.test(image.name))
      .map((image) => image.name);
  } catch (err) {
    console.error(err);
  }
};
