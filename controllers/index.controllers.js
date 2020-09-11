const path = require('path');
const { readdirSync } = require('fs');

module.exports.index = (req, res) => {
  try {
    const source = path.resolve(__dirname, '..', 'gallery');
    console.log(source);
    const getDirectories = (source) => {
      return readdirSync(source, { withFileTypes: true })
        .filter((dirnet) => dirnet.isDirectory())
        .map((dirnet) => dirnet.name);
    };
    const list = getDirectories(source);
    res.status(200).json(list);
  } catch (e) {
    res.status(500).json({
      message: 'Что-то пошло не так, попробуйте снова...',
      error: e.message,
    });
  }
};
