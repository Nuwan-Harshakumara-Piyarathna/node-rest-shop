const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Handle get requests'
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    if (id == 'special') {
        res.status(200).json({
            message: 'You discovered special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'updated product!',
        id: id
    });
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'deleted product!',
        id: id
    });
})

router.post('/', (req, res) => {
    res.status(200).json({
        message: 'Handle post requests'
    });
});

module.exports = router;

