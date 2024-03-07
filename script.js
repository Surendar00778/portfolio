const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const cancel = document.getElementById('cancel')
menu.addEventListener("click", () => {
    nav.classList.add('activo');
    menu.classList.add('desaparecer');
    cancel.classList.remove('desaparecer');
});

cancel.addEventListener('click',()=>{
    nav.classList.remove('activo');
    cancel.classList.add('desaparecer');
    menu.classList.remove('desaparecer');
});