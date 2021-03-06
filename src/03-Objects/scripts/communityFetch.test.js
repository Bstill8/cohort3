import {pull, convertArray, post} from './communityFetch'
import {Community} from './community'
global.fetch = require('node-fetch');
const url = 'http://localhost:5000/'
test('test pull', async () => {
    await postData(url + 'clear');
    await postData(url + 'add', {'name': 'Calgary', 'latitude': 60, 'longitude': 120, 'population': 500, 'key':0})
    await postData(url + 'add', {'name': 'Gregary', 'latitude': 60, 'longitude': 120, 'population': 500, 'key':1})
    const data = await pull(url)
    expect(data[0]).toEqual({'name': 'Calgary', 'latitude': 60, 'longitude': 120, 'population': 500, 'key':0})

})
test('test convertArray', async () => {
    const testCom = new Community();
    await postData(url + 'clear');
    await postData(url + 'add', {'name': 'Calgary', 'latitude': 60, 'longitude': 120, 'population': 500, 'key':0});
    convertArray(await pull(url), testCom);
    expect(testCom.Cities[0].name).toEqual('Calgary');
    expect(testCom.Cities.hasOwnProperty(1)).toEqual(false);
    await postData(url + 'add', {'name': 'Gregary', 'latitude': 60, 'longitude': 120, 'population': 500, 'key':1});
    convertArray(await pull(url), testCom);
    expect(testCom.Cities[0].name).toEqual('Calgary');
    expect(testCom.Cities[1].name).toEqual('Gregary');
})
test('test post', async () => {
    await postData(url + 'clear');
    const testCom = new Community();
    testCom.createCity('tester', 10, 30, 500, 0);
    expect(await post(testCom.Cities[0], url + 'add')).toEqual(200);

})
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });

    const json = await response.json();    // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;
    // console.log(json, typeof(json));
    return json;
}