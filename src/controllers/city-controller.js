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

const destroyAll = async (req, res) => {
    try {
        const response = await cityService.deleteAllCities()
        return res.status(201).json({
            data:response,
            success:true,
            message:'succesfully deleted all cities',
            err:{}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete all cities',
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


const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data:cities,
            success:true,
            message:'succesfully fetched all cities',
            err:{}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get all cities',
            err:error
        })
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll,
    destroyAll
}