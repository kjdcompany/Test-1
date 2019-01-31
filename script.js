// Change style of navbar and the list item style on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
        navbar.className='card';
    } else {
        navbar.className= 'bar';
    }
}

//open the menu 
function slideMenu(){
    if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
        document.getElementById("menubtn").style.display = 'block'; 
        document.getElementById("menubtn").style.backgroundColor = 'white';
    } else {
        document.getElementById("menubtn").style.display = 'block'; 
        document.getElementById("menubtn").style.backgroundColor = 'transparent';
    }  
}


//close menu when click on any item of the menu 
function closeMenu(){
    //$('.bar-small').css('display','block');//
document.getElementById("menubtn").style.display = 'none';
}
