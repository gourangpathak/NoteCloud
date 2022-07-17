const express = require('express');
const router = express.Router();

// Default Endpoint
router.get('/', (req, res)=> {
    res.json([]);
})

module.exports = router;