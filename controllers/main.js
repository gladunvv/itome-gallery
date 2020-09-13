const path = require('path');
const { getGalleryDir } = require('../helpers/getGalleryDir');

module.exports.getListGallery = (req, res) => {
  try {
    const source = path.resolve(__dirname, '..', 'gallery');
    const directories = getGalleryDir(source);
    res.status(200).json(directories);
  } catch (e) {
    res.status(500).json({
      message: 'Что-то пошло не так, попробуйте снова...',
      error: e.message,
    });
  }
};
