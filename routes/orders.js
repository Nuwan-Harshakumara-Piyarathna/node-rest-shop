const express = require('express')
const router = express.Router();

router.get('/',(req,res) => {
    res.status(200).json({
        message: 'Order was fetched'
    });
});

router.get('/:id',(req,res) => {
    res.status(200).json({
        message: 'Order details was fetched',
        id: req.params.id
    });
});

router.delete('/:id',(req,res) => {
    res.status(200).json({
        message: 'Order Deleted',
        id: req.params.id
    });
});

router.patch('/:id',(req,res) => {
    res.status(200).json({
        message: 'Order updated',
        id: req.params.id
    });
});

router.post('/',(req,res) => {
    res.status(200).json({
        message: 'Order was created'
    });
});

module.exports = router;