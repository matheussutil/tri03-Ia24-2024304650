atualizarTempo()
function atualizarTempo() {
    const relogio = new Date()
var agora = relogio.getHours()
var min = relogio.getMinutes()

const time = document.querySelectorAll('.time')

time.forEach((time) => {
    time.innerHTML = `${agora}:${min}` 
})
}


const btenv = document.querySelector('.sent')
const msgO = document.querySelector('.message.owner')
const main = document.querySelector('main')

btenv.addEventListener('click', () => {
    const input = document.querySelector('input').value
    dup = msgO.cloneNode(true)
    main.appendChild(dup)
    const content = dup.querySelector('.contOwner')
    atualizarTempo()
    content.innerHTML = `${input}`
})
