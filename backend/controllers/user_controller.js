const model = require('../models')
const Account = model.db.account

exports.findAll = (req, res) => {
    Account.findAll().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(500).send('Error: ' + err);
    });
}

exports.findByPk = (req, res) => {
    Account.findByPk(req.params.userId).then(result => {
        if (result != null) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ msg: 'user not found' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).send('Error: ' + err);
    })
}

exports.create = (req, res) => {
    Account.create({
        id: req.body.id,
        name: req.body.name
    }).then(result => {
        res.status(200).json({
            id: req.body.id,
            name: req.body.name
        });
    }).catch(err => {
        res.status(500).send('Error: ' + err);
    })
}

exports.update = (req, res) => {
    Account.update({
        name: req.body.name
    }, {
        where: {
            id: req.params.userId
        }
    }).then(result => {
        res.status(200).json({
            id: req.params.userId,
            name: req.body.name
        }).catch(err => {
            res.status(500).send('Error: ' + err);
        })
    })
}

exports.destroy = (req, res) => {
    Account.destroy({
        where: {
            id: req.params.userId
        }
    }).then(result => {
        res.status(200).json({
            id: req.params.userId
        }).catch(err => {
            res.status(500).send('Error: ' + err);
        })
    })
}