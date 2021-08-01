const mainPost = document.querySelector('.mainPost')
const main = document.querySelector('.main')
const mainAbout = document.querySelector('.mainAbout')
const btn = document.querySelector('.btn')
const btnPost = document.querySelector('#btnPost')
const btnHome = document.querySelector('#btnHome')
const btnAbout = document.querySelector('#btnAbout')
const title = document.querySelector('#title')
const textarea = document.querySelector('#textarea')
const time = new Date

function read() {
    let namePost = title.value
    let textArea = textarea.value
    const div = document.createElement('div')
    div.classList.add('post')
    div.innerHTML = `<h3>${namePost}</h3>
<span>${time.toLocaleString()}</span><p>${textArea}</p>`
    main.prepend(div)
}

function showPost() {
    mainPost.classList.add('activePost')
    main.classList.remove('activeHome')
    mainAbout.classList.remove('activeAbout')
}

function showHome() {
    main.classList.add('activeHome')
    mainPost.classList.remove('activePost')
    mainAbout.classList.remove('activeAbout')
}

function showAbout() {
    mainAbout.classList.add('activeAbout')
}

btn.addEventListener('click', read)
btnPost.addEventListener('click', showPost)
btnHome.addEventListener('click', showHome)
btnAbout.addEventListener('click', showAbout)