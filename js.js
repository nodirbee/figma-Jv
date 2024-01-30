const ochish = document.querySelector('#open');
const basket = document.querySelector('.basket');
const back = document.querySelector('#back');
const cards =document.querySelector('.cards');







const data = [
{
    img:"./img/Rectangle 58.png",
    nomi: "Daisy",
    narxi: 5 
    
},
{
    img:"./img/Rectangle 58 (1).png",
    nomi: "Sun flower",
    narxi: 5 
    
},
{
    img:"./img/Rectangle 58 (2).png",
    nomi: "White Rose",
    narxi: 5 
    
},
{
    img:"./img/Rectangle 58 (3).png",
    nomi: "Periwinkle",
    narxi: 5 
    
},
{
    img:"./img/Rectangle 58.png",
    nomi: "Daisy",
    narxi: 5 
    
},
{
    img:"./img/Rectangle 58 (1).png",
    nomi: "Sun flower",
    narxi: 5 
    
},
{
    img:"./img/Rectangle 58 (2).png",
    nomi: "White Rose",
    narxi: 5 
    
},
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
<P>${item.nomi}</P>

<div class="price">
<span>${item.narxi}</span>
<button> <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.57775 0C3.99323 0 4.3509 0.30167 4.43038 0.71863C4.46129 0.980982 4.68365 1.17869 4.94781 1.17869H19.6838C20.4172 1.17869 21.0024 1.92457 20.7965 2.67635L18.8456 9.74994C18.7047 10.2583 18.2495 10.6082 17.7328 10.6082H7.34223C6.78854 10.6082 6.37114 11.1114 6.47343 11.6555C6.552 12.0734 6.91699 12.3762 7.34223 12.3762H17.7401C18.2206 12.3762 18.6071 12.7703 18.6071 13.2602C18.6071 13.7501 18.2206 14.1442 17.7401 14.1442H5.85745C5.47449 14.1442 5.11682 13.8422 5.03734 13.426L3.20605 3.61975C3.00558 2.54625 2.06857 1.76803 0.976516 1.76803C0.497815 1.76803 0.109436 1.37206 0.109436 0.884015C0.109436 0.395965 0.497815 0 0.976516 0H3.57775ZM4.73386 17.091C4.73386 16.1149 5.51062 15.3229 6.46802 15.3229C7.42542 15.3229 8.20218 16.1149 8.20218 17.091C8.20218 18.067 7.42542 18.859 6.46802 18.859C5.51062 18.859 4.73386 18.067 4.73386 17.091ZM18.6071 17.091C18.6071 18.067 17.8304 18.859 16.873 18.859C15.9156 18.859 15.1388 18.067 15.1388 17.091C15.1388 16.1149 15.9156 15.3229 16.873 15.3229C17.8304 15.3229 18.6071 16.1149 18.6071 17.091Z" fill="#FF8F52"/>
</svg>
  Add to card</button>
</div>




</div>



`

})

