var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Griggin family' });
});

module.exports = router;

/* Страница Питера */
router.get('/peter', function(req, res, next) {
    res.render('hero', {
        title: "Питер Гриффин",
        picture: "images/peter.jpg",
        desc: "Глава семьи,отец троих детей"
    });
});


/* Страница Лоис */
router.get('/Lois', function(req, res, next) {
    res.render('hero', {
        title: "Лоис Гриффин",
        picture: "images/lois.jpg",
        desc: "Жена Питера Гриффина,мать троих детей"
    });
});

/* Страница Криса */
router.get('/Chris', function(req, res, next) {
    res.render('hero', {
        title: "Крис Гриффин",
        picture: "images/Chris.jpg",
        desc: "Кристофер Гриффин.Сын Питера и Лоис Гриффин"
    });
});

/* Страница Мег */
router.get('/Megg', function(req, res, next) {
    res.render('hero', {
        title: "Мегг Гриффин",
        picture: "images/Megg.jpg",
        desc: "Мегатрон(Мег) Гриффин.Дочь Питера и Лоис Гриффин"

    });
});

/* Страница Стьюи */
router.get('/Stewie', function(req, res, next) {
    res.render('hero', {
        title: "Стьюи Гриффин",
        picture: "images/Stewie.jpg",
        desc: "Стьюи Гриффин.Сын Питера и Лоис Гриффин."
    });
});

/* Страница Брайана */
router.get('/Brian', function(req, res, next) {
    res.render('hero', {
        title: "Брайан Гриффин",
        picture: "images/Brian.jpg",
        desc: "Брайан Гриффин,собака.Член семьи Гриффин."
    });
});
