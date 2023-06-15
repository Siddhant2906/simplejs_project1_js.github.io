const button = document.querySelector('button')
const body = document.querySelector('body')
const color = ['black','rgb(84, 141, 246)','yellow','violet']

body.style.backgroundColor = 'Blue'
button.addEventListener('click',changecolor=>{
     const num = parseInt(Math.random()*color.length)
     body.style.backgroundColor = color[num]
})
