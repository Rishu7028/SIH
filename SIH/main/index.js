let searchBtn = document.querySelector('#search-btn' );
let searchBar = document.querySelector('.search_container' );
let formBtn = document.querySelector('#login-btn' );
let loginForm = document.querySelector('.loginContainer' );
let formClose = document.querySelector('#form-close' );

window.onscroll = () =>{
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active'); 
}

searchBtn.addEventListener('click',() =>{
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');       
});

formBtn.addEventListener('click',() =>{
  
  loginForm.classList.add('active');       
});  

formClose.addEventListener('click',() =>{
  
  loginForm.classList.remove('active');       
}) ;
  
// slider
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// date and time
        const railway=document.querySelector('.Railway');
        const india=document.querySelector('.india');
        const flight=document.querySelector('.Flight');
        const hotel=document.querySelector('.Hotel');
        const usa=document.querySelector('.usa');
        const asia=document.querySelector('.asia');
        const Apartment=document.querySelector('.Apartment');
        const aus=document.querySelector('.aus');
      
    railway.onclick = function() {
    india.classList.toggle('active');
    usa.classList.remove('active');
    asia.classList.remove('active');
    aus.classList.remove('active');

 }
 flight.onclick = function() {
    aus.classList.add('active');
    india.classList.remove('active');
    usa.classList.remove('active');
    asia.classList.remove('active');
 }
 hotel.onclick = function() {
    usa.classList.add('active');
    india.classList.remove('active');
    asia.classList.remove('active');
 aus.classList.remove('active');
 }
 Apartment.onclick = function() {
    asia.classList.add('active');
    india.classList.remove('active');
    usa.classList.remove('active');
    aus.classList.remove('active');

 }
