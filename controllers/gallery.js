const path = require('path');
const { getDirImages } = require('../helpers/getDirImages');

module.exports.getImageGallery = (req, res) => {
  try {
    const { galleryName } = req.params;
    const source = path.resolve(__dirname, '..', 'gallery', galleryName);
    const images = getDirImages(source);
    res.status(200).json({ images, gallery: galleryName });
  } catch (e) {
    res.status(500).json({
      message: 'Что-то пошло не так, попробуйте снова...',
      error: e.message,
    });
  }
};
