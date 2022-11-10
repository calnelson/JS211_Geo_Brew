// require('dotenv').config()
// console.log(process.env.SECRET_KEY)

// const consoleCharacters = () => {
//     console.log(arrayOfChar)
// }


const fetchMe = document.getElementById('fetch-button');

console.log('sanity check')

let i = 0; 

fetchMe.addEventListener('click', function(){
    fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e13f50d4d90e2f7b9ab1429eeade510b&hash=c0a5e103e1f47660ebdff477759c99c9')
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data.data.results)
            const randomCharacter = document.getElementById('all-characters')
            const d = data.data.results[i]
           
            randomCharacter.innerHTML = `
                    <img src="${d.thumbnail.path}/portrait_xlarge.jpg"> <br>
                <img sr="${d.thumbnail.path}.gif"> <br>
                Name: ${d.name} <br>
                Description: ${d.description}
            `;
        });

        
})

fetchMe.addEventListener('click', function(){

            i++;
          }
        
)







// console.log( i);
// console.log('titty')

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;  
// }


