const express = require('express')
const Sunglasses = require('./Sunglasses')
const router = express.Router()

// all our cats
router.get('/', (req, res) => {  
    Sunglasses.all()
    .then(cats =>  {
        res.status(200).json(cats)
    }) 
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.post('/', (req, res) => {
    const sunglasses = new Sunglasses(req.body)
    cat.save()
    .then(() =>  {
        res.status(201).json(sunglasses)
    })
    .catch(err => {
        res.status(500).json({err: err.message})
    })
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const cat = await Sunglasses.find(id)
        res.status(200).json(sunglasses)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id 
    Sunglasses.delete(id)
    .then(() => {
        res.status(204).json({
            deleted: true
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err.message
        })
    })
})

module.exports = router