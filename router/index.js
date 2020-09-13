const { Router } = require('express');
const mainController = require('../controllers/main');
const galleryController = require('../controllers/gallery');

const router = Router();

router.get('/', mainController.getListGallery);
router.get('/:galleryName', galleryController.getImageGallery);

module.exports = router;
