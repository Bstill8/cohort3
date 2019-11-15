global.fetch = require('node-fetch');

const url = 'http://localhost:5000/'



export async function pull (){
    let response = await fetch(url +'all');
    let json = await response.json();


    return json;
}

//pull grabs info from the server
    //fetch

/*

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
} else {
  alert("HTTP-Error: " + response.status);
}

*/