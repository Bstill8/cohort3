import {Community} from './community'
global.fetch = require('node-fetch');



export async function pull (url){
    let response = await fetch(url +'all');
    let json = await response.json();
    return await json;
}

export function convertArray(arr, com){
    arr.forEach(function (e){
        com.createCity(e.name, e.latitude, e.longitude, e.population, e.key);
    })
}
export async function post(obj, url){
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(obj)
    });
    return response.status;
}