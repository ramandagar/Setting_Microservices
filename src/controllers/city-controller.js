const { CityService, CityService } = require('../services/index')

const CityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await CityService.createCity(req.body)
        return res.status(201).json({
            data:city,
            success:true,
            message:'succesfully created a city',
            err:{}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a city',
            err:error
        })
        
    }
}

const destroy = async (req, res) => {

    try {
        
    } catch (error) {
        
    }
}

const update = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const get = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    create,
    destroy,
    update,
    get
}