let menu=document.getElementById('menu');
let ham=document.getElementById('ham');
let exit=document.getElementById('exit');
let links=document.querySelectorAll('.links a');
let Mlinks=document.querySelectorAll('.mobile-links a')
ham.addEventListener('click',function(){
    menu.classList.add('show');
});
exit.addEventListener('click',function(){
    menu.classList.remove('show');
})
links.forEach(link => {
    link.addEventListener('click',function(e){
        links.forEach(link =>{
        link.classList.remove('active') })
     this.classList.add('active');
    })
});

Mlinks.forEach(link => {
    link.addEventListener('click',function(e){
        Mlinks.forEach(link =>{
        link.classList.remove('active') })
     this.classList.add('active');
    })
});