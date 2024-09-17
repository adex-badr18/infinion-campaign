import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getCampaign = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/Campaign/${id}`);

        if (response.status === 200 || response.statusText === "OK") {
            return response.data;
        }
    } catch (error) {
        // Handle the error response
        if (error.response) {
            // Server responded with a status other than 200 range
            return {
                // error: error.response.statusText,
                message: error.message,
                status: error.status,
            };
        } else if (error.request) {
            // Request was made but no response received
            return {
                // error: error.response.statusText,
                message: error.message,
                status: error.status,
            };
        } else {
            // Something happened in setting up the request
            return {
                // error: error.response.statusText,
                message: error.message,
                status: error.status,
            };
        }
    }
};

export const createCampaign = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/Campaign/`, data);

        if (response.status === 201) {
            return {
                success: "Campaign Successfully Created!",
                data: response.data
            };
        }
    } catch (error) {
        // Handle the error response
        if (error.response) {
            // Server responded with a status other than 200 range
            return {
                // error: error.response.statusText,
                message: error.message,
                status: error.status,
            };
        } else if (error.request) {
            // Request was made but no response received
            return {
                // error: error.response.statusText,
                message: error.message,
                status: error.status,
            };
        } else {
            // Something happened in setting up the request
            return {
                // error: error.response.statusText,
                message: error.message,
                status: error.status,
            };
        }
    }
};

export const updateCampaign = async (id, data) => {
    try {
        const response = await axios.put(`${BASE_URL}/Campaign/${id}`, data);
        // console.log(response)

        if (response.status === 204) {
            return {
                success: "Campaign Successfully Updated!",
            };
        }
    } catch (error) {
        // Handle the error response
        if (error.response) {
            // Server responded with a status other than 200 range
            return {
                // error: error.response.statusText,
                message: error.message,
                status: error.status,
            };
        } else if (error.request) {
            // Request was made but no response received
            return {
                // error: error.response.statusText,
                message: error.message,
                status: error.status,
            };
        } else {
            // Something happened in setting up the request
            return {
                // error: error.response.statusText,
                message: error.message,
                status: error.status,
            };
        }
    }
};

export const deleteCampaign = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/Campaign/${id}`);
        
        if (response.status === 204) {
            return {
                success: "Campaign Successfully Deleted!",
            };
        }
    } catch (error) {
        // Handle the error response
        if (error.response) {
            // Server responded with a status other than 200 range
            return {
                // error: error.response.statusText,
                message: error.message,
                status: error.status,
            };
        } else if (error.request) {
            // Request was made but no response received
            return {
                // error: error.response.statusText,
                message: error.message,
                status: error.status,
            };
        } else {
            // Something happened in setting up the request
            return {
                // error: error.response.statusText,
                message: error.message,
                status: error.status,
            };
        }
    }
};
