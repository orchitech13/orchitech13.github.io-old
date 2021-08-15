const input = document.getElementById('firstname', 'lastname', 'msg')
const button = document.getElementById("submit")

button.addEventListener('click', () => {
    console.log(input.value)
})


const link = document.getElementById('scrolltoprofile')
const form = document.getElementById('profile')

link.addEventListener('click', () => {
    window.scrollTo({
        top: profile.offsetTop,
        behavior: 'smooth'
    })
})

const link = document.getElementById('scrolltoabout')
const form = document.getElementById('about')

link.addEventListener('click', () => {
    window.scrollTo({
        top: about.offsetTop,
        behavior: 'smooth'
    })
})

const link = document.getElementById('scrolltoexperiences')
const form = document.getElementById('experiences')

link.addEventListener('click', () => {
    window.scrollTo({
        top: experiences.offsetTop,
        behavior: 'smooth'
    })
})

const link = document.getElementById('scrolltoskills')
const form = document.getElementById('skills')

link.addEventListener('click', () => {
    window.scrollTo({
        top: skills.offsetTop,
        behavior: 'smooth'
    })
})

const link = document.getElementById('scrolltocontact')
const form = document.getElementById('contact')

link.addEventListener('click', () => {
    window.scrollTo({
        top: contact.offsetTop,
        behavior: 'smooth'
    })
})