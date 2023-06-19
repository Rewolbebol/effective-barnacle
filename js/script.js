const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')


// add event listener to a button to listen for 'Click' than run function () => { take btn. and toggle it !!! (open)}  
btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})