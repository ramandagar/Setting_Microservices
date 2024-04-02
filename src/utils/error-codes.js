const ClientErrors = Object.freeze({
    BAD_REQUEST:400,
    UNAUTHORISED:401,
    NOT_FOUND:404,
});

const ServerErrors = Object.freeze({
    INTERNAL_SERVER_ERROR:500,
    BAD_GATEWAY:502,
    SERVICE_UNAVAILABLE:503,
    NOT_IMPLMENTED:501
})

const SuccessCodes = Object.freeze({
    OK:200,
    CREATED:201,
    ACCEPTED:202,
    NO_CONTENT:204,
    PARTIAL_CONTENT:206,
    UNAUTHORIZED:401,
})

module.exports = {
    ClientErrors,
    ServerErrors,
    SuccessCodes
}