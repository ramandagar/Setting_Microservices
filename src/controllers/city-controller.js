const { CityService } = require('../services/index')

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body)
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
        const response = await cityService.deleteCity(req.params.id)
        return res.status(201).json({
            data:response,
            success:true,
            message:'succesfully deleted a city',
            err:{}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete a city',
            err:error
        })
        
    }
}

const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id,req.body)
        return res.status(201).json({
            data:city,
            success:true,
            message:'succesfully fetched a city',
            err:{}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get a city',
            err:error
        })
        
    }
}

const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id)
        return res.status(201).json({
            data:city,
            success:true,
            message:'succesfully fetched a city',
            err:{}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get a city',
            err:error
        })
        
    }
}

module.exports = {
    create,
    destroy,
    update,
    get
}