'use strict'

// Get All Cards
  const api = 'https://api.magicthegathering.io/v1';
  // fetch(`${api}/cards`).then(res => res.json())
  // .then(json => console.log(json))
  
  async function getApi(api) {
    const response = await fetch(`${api}/cards`)
    
    let data = await response.json()
    console.log(data)
    if (response) {
      console.log('it worked?')
    }
    show(data)
  }
  
  getApi(api)
    
  function show(data) {
    console.log(data)
    let tab = 
      `<div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2>Name</h2>
          </div>
          <div class="col-lg-6">
            <h2>Colors</h2>
          </div>
        </div>
      </div>`
      
    for (let i of data.cards) {
      tab += `
              <p>${i.name}</p>
              <p>${i.colors}</p>`
    }
    document.getElementById('message').innerHTML = tab
  }
  
  input.addEventListener('input', onInput, false)
  
  function onInput(event) {
    const searchString = event.target.value
    console.log(searchString)
    const data = getAssociatedData(searchString)
    updateTable(data)
  }
  
  function getAssociatedData(searchString) {
    
  }
  
  function updateTable(data) {
    
  }
   
  
