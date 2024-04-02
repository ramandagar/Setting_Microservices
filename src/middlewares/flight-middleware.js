
const validateCreateFlight = (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price ||
        !req.body.totalSeats ||
        !req.body.dateOfDeparture ||
        !req.body.dateOfArrival ||
        !req.body.flightNumber
    ) {
        return res.status(400).json({
            data:{},
            message: "Flight number is required",
            success:false,
            err:'Missing mandatory properties to create a flight'
        })
    }
    next();
}

module.exports= {
    validateCreateFlight
}