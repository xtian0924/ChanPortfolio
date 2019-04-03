    var prevScrollpos = window.pageYOffset;
    var scroll = new SmoothScroll('a[href*="#"]');
    var logo = document.getElementById('logo');
    var ul1 = document.getElementById('ul1');
    var ul2 = document.getElementById('ul2');
    var menu = document.getElementById('menu');

    function openMenu(){
        ul1.classList.add("showmenu");   
        logo.style.opacity="0";
        menu.style.opacity="0";

    }
    function closeMenu(){
        ul1.classList.remove("showmenu");   
        logo.style.opacity="1";
        menu.style.opacity="1";
    }

    window.onscroll = function() {
       var currentScrollPos = window.pageYOffset;
       if (prevScrollpos > currentScrollPos) {
           document.getElementById("header").style.top = "0";
       } else {
           document.getElementById("header").style.top = "-50px";
       }
       prevScrollpos = currentScrollPos;
   
    }