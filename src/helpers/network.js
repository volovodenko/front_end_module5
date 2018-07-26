import axios from 'axios';

const API_ROOT = 'https://api.imgur.com/3';

export const httpRequest = (url, method = 'GET', data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 08aea7123beb2aefa51d367e02189dbd757de5c7'
    };

    return axios({
        method,
        url: `${API_ROOT}/${url}`,
        data,
        headers
    });
};


export const httpRequest2 = (url, method = 'GET', data) => {
    const headers = {
        'Authorization': 'Bearer 08aea7123beb2aefa51d367e02189dbd757de5c7'
    };

    return axios({
        method,
        url,
        data,
        headers
    });
};

export const checkResponse = response => {
    if (response.status === 200) {
        return true;
    }

    throw new Error(response.statusText);
};