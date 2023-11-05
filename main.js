

let searchbtn = document.querySelector('.searchbtn');
let closebtn = document.querySelector('.closebtn');

let searchbx = document.querySelector('.searchbx');

searchbtn.onclick = function (){
    searchbx.classList.add('active')
    closebtn.classList.add('active')
   searchbtn.classList.add('active')
}

closebtn.onclick = function (){
    searchbx.classList.remove('active')
    closebtn.classList.remove('active')
    searchbtn.classList.remove('active')
}