const mybtn = document.getElementById('myBtn');
const myPopover = document.getElementById('myPopover');
const closeButton = document.getElementById('closeBtn');

mybtn.addEventListener('click',function(){
    myPopover.classList.add("active");
})
closeButton.addEventListener('click',function(){
    myPopover.classList.remove("active");
})