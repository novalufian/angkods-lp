var home =false,
    partnership = false,
    about = false,
    plan = false,
    showcase = false,
    faq = false;

window.addEventListener("load", function(){
    document.querySelectorAll(".bg-img-dataset").forEach(function(e, i){
        console.log(e.getAttribute("data-bg-img"))
        e.style.backgroundImage = `url( ${e.getAttribute("data-bg-img")} )`;
    })
})

window.addEventListener("scroll", function(){
    var node = document.documentElement || document.body;
    var _scrollTop = node.scrollTop;
    
    
    
    if(_scrollTop > screen.height){
        // document.getElementById("main-navbar").classList.add("bg-white");
    }else{
        document.getElementById("main-navbar").classList.remove("bg-white");
    }
    
    onVIewport("home");
    onVIewport("partnership");
    onVIewport("about-us");
    onVIewport("plan");
    onVIewport("show-case");
    onVIewport("faq");
})

function onVIewport(elementid) {
    var div = document.getElementById(elementid);
    var rect = div.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    x = window.innerHeight - (h / 2);
    t = rect.top < (0+ 50 ) && rect.top > (50 - h);
    
    /* check div on 50 viewport */
    if(t){
        if(elementid == "home"){
            document.getElementById("main-navbar").style.background = "unset";
            
        }else{
            document.getElementById("main-navbar").style.background =window.getComputedStyle(div).getPropertyValue("background-color");
        }
    }
}
