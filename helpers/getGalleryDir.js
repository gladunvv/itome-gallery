const { readdirSync } = require('fs');

module.exports.getGalleryDir = (source) => {
  try {
    return readdirSync(source, { withFileTypes: true })
      .filter((dir) => dir.isDirectory())
      .map((dir) => dir.name);
  } catch (err) {
    console.error(err);
  }
};
