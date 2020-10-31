const db = require("../models");
const Dictionary = db.dictionary;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");


exports.getList = (req, res) => {
    Dictionary.findAll({
        where: { list: req.params.list },
        exclude: ['list']
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}