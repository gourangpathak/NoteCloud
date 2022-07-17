const express = require('express');
const router = express.Router();

// Default Endpoint
router.get('/', (req, res)=> {
    const obj = {
        a : "this",
        num : 34
    }
    res.json(obj);
})

module.exports = router;