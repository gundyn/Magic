'use strict'

// Get All Cards
    const api = 'https://api.magicthegathering.io/v1';
    fetch(`${api}/cards`).then(res => res.json())
    .then(json => console.log(json));