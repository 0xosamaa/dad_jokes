const jokeEl = document.querySelector('.joke')
const button = document.querySelector('.btn')

generateJoke()
async function generateJoke(){
    const config = {
        headers: {
            Accept:'application/json',
        },
        }
    
    const response = await fetch('https://icanhazdadjoke.com/', config)
    const data = await response.json()
    
    jokeEl.innerHTML = data.joke
}

button.addEventListener('click', generateJoke)
