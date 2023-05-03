//nav bar change

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0)
})

//show or hide fq

const fq =document.querySelectorAll('.fqq');
fq.forEach(fqq => {
    fqq.addEventListener('click',()=>{
        fqq.classList.toggle('open');


        const icon=fqq.querySelector('.faq-icon');
        if(icon.className==='uil uil-plus-circle'){
            icon.className="uil uil-minus-circle"
        }
    })
});

//nav 

const menu=document.querySelector('.nav-menu')
const menuopen=document.querySelector('#nav-open-btn')
const menuclose=document.querySelector('#nav-close-btn')

menuopen.addEventListener('click',()=>{
    menu.style.display="flex";
    menuclose.style.display="inline-block";
    menuopen.style.display="none";
})

const closeNav=()=>{
    menu.style.display="none";
    menuclose.style.display="none";
    menuopen.style.display="inline-block";
}

menuclose.addEventListener('click',closeNav)