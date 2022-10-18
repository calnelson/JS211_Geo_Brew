require('dotenv').config()
console.log(process.env.SECRET_KEY)

const consoleBreweries = () => {
    console.log(arrayOfBreweries)
}


// const fetchMe = document.getElementById('fetch-button');

// fetchMe.addEventListener('click', function(){
//     fetch('https://api.openbrewerydb.org/breweries/random')
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(data) {
//             console.log(data.results)
//             const randomBrewery = document.getElementById('all-breweries')
//             const d = data.results[0]
//             randomBrewery.innerHTML = `
//                 <img src="${d.picture.large}"> <br>
//                 Name: ${d.name.title} ${d.name.first} ${d.name.last} <br>
//                 Age: ${d.dob.age} <br>
//                 Email: ${d.email} <br>
//                 Mobile: ${d.cell} <br>
//             `;
//         });
// })