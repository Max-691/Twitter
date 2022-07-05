const body = document.body;
const reactionsDiv = document.querySelector('.reactions');
const reactionsUl = document.querySelector('.reactionsUl');
const reactLi = document.getElementsByTagName('li');

const like = document.querySelector('.like');
const comment = document.querySelector('.comment');
const send = document.querySelector('.send');
const book = document.querySelector('.book');


like.addEventListener('click', ()=>{
    like.setAttribute('src', '../img/liked.png');
})


book.addEventListener('click', ()=>{
    book.setAttribute('src', '../img/bookmarked.png');
})