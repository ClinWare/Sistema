var menuItem = document.querySelectorAll('.item-menu');
var abrirBarra = document.querySelector('#btn-abrir');
var side = document.querySelector('.menu-lateral');



function slamanokkk(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', slamanokkk) 
)

abrirBarra.addEventListener('click' , function(){
    side.classList.toggle('abrir');
}

)