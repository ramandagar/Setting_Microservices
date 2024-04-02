const { Fligts } = require('../models/index')
const { Op } = require("sequelize");
class FlightRepository {
    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId ){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId ){
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice){
            Object.assign(filter,{price:{[Op.gte]:data.minPrice}})
        }
        if(data.maxPrice){
            Object.assign(filter, {price:{[Op.lte]:data.maxPrice}})
        }8
         return filter;
    }
    async createFlight(data) {
        try {
            const flight = await Fligts.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
    async getFlight(flightId) {
        try {
            const flight = await Fligts.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        } 
    }
    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flights = await Fligts.findAll({
                where:filterObject
            });
            return flights;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        } 
    }
} 

module.exports = FlightRepository;