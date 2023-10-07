let registerbtn=document.getElementById('register');
let left=document.getElementById('leftbg');
let right=document.getElementById('rightbg');
let loginbtn=document.getElementById('login');
let rightmenu=document.getElementById("rightmenu");
let leftmenu=document.getElementById("leftmenu");
let leftimg=document.getElementById("leftimg");
let rightimg=document.getElementById("rightimg");
registerbtn.addEventListener('click',(e)=>{
rightmenu.style.display="none";
rightimg.style.display="block";
leftimg.style.display="none";
leftmenu.style.display="block";
left.style.backgroundColor="salmon";
right.style.backgroundColor="rgb(242, 242, 141)";
})
loginbtn.addEventListener('click',(e)=>{
    rightmenu.style.display="block";
    rightimg.style.display="none";
    leftimg.style.display="block";
    leftmenu.style.display="none";
    right.style.backgroundColor="salmon";
left.style.backgroundColor="rgb(242, 242, 141)";
    })