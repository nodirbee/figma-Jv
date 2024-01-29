const ochish = document.querySelector('#open');
const basket = document.querySelector('.basket');
const back = document.querySelector('#back');
const cards =document.querySelector('.cards');







const data = [
{
    img:"./img/Rectangle 58.png",
    nomi: "Daisy",
    narxi: 5 
    
}
{
    img:"./img/Rectangle 58 (1).png",
    nomi: "Sun flower",
    narxi: 5 
    
}
{
    img:"./img/Rectangle 58 (2).png",
    nomi: "White Rose",
    narxi: 5 
    
}
{
    img:"./img/Rectangle 58 (3).png",
    nomi: "Periwinkle",
    narxi: 5 
    
}
{
    img:"./img/Rectangle 58.png",
    nomi: "Daisy",
    narxi: 5 
    
}
{
    img:"./img/Rectangle 58 (1).png",
    nomi: "Sun flower",
    narxi: 5 
    
}
{
    img:"./img/Rectangle 58 (2).png",
    nomi: "White Rose",
    narxi: 5 
    
}
{
    img:"./img/Rectangle 58 (3).png",
    nomi: "Periwinkle",
    narxi: 5 
    
}
]
 


ochish.addEventListener('click',function(){
    basket.style.transform = 'translateX(0)'
})

back.addEventListener('click',function(){
    basket.style.transform = 'translateX(350px)'
})



data.map((item)=>{

cards.innerHTML+=`
<div class="card">
<img src="${item.img}"  />


</div>



`

})

