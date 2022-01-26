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
      `<tr>
        <th>Name</th>
      </tr>`
      
    for (let i of data.cards) {
      tab += `<tr>
                <td> ${i.name} </td>
              </tr>`
    }
    document.getElementById('message').innerHTML = tab
  }
   
  
