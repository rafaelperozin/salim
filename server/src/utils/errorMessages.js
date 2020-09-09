module.exports = {
    global: {
        access_denied: {
            code: 401,
            message: "Operation not permitted"
        },
        invalid_id: {
            code: 401,
            message: "Invalid ID"
        },
        required_id: {
            code: 401,
            message: "The ID is required"
        },
    },
    users: {
        duplicated: {
            code: 412,
            message:"Duplicated mobile number"
        },
        empty: {
            code: undefined,
            message:"is not allowed to be empty"
        },
        string: {
            code: undefined,
            message:"must be a string"
        },
        mobile_max: {
            code: undefined,
            message:"length must be less than or equal to 13 characters long"
        },
        mobile_min: {
            code: undefined,
            message:"length must be at least 10 characters long"
        },
        mobile_pattern: {
            code: undefined,
            message:"fails to match the required pattern"
        },
        country_length: {
            code: undefined,
            message:"length must be 2 characters long"
        }
    }
};