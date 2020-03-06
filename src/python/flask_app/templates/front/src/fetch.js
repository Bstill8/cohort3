import fetch from 'node-fetch'

export async function getData(route){
    let response = await fetch("http://127.0.0.1:5003" + route)
    return response
}