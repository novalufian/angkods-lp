var masterTL = new TimelineMax();

bootAnimation();

function bootAnimation() {
    masterTL
    .add(section_one, 0)
    .add(section_one_out, 5)
    .add(section_two, 10) //10

    
}

function section_one() {
    var tl = new TimelineMax();

    tl
    .from(
        "#section-1-big-title", 
        {duration: 1,x: -150,opacity: 0,ease : Strong.easeOut},
        2
    )
    .from(
        "#section-1-btn-start",
        {duration : .5,opacity : 0, y : -50},
        2
    )
    .from(
        "#section-1-clinet-area",
        {duration : .5,y : 100,opacity : 0,ease : Strong.easeOut},
        2
    )
    .add(section_one_image, 2)
    .from(
        "#section-1-big-img .main-big-img", 
        {duration: .75,scale: 0, opacity: 0, ease : Back.easeOut}, 
        3
    )
    .from(
        "#section-one-img-shadow", 
        {opacity: 0, duration: .35, x : 750, y : 500}, 
    )
    .from(
        "#section-one-img-shadow-2", 
        {opacity: 0, duration: .35, x : -250, y : -500}, 
    )
    .from(
        "#section-one-img-shadow-3", 
        {opacity: 0, duration: .35, x : 550, y : -500}, 
    )

    return tl;

}

function section_one_image() {
    var tl = new TimelineMax({ paused: true });

    var img = document.querySelectorAll("#section-1-clinet-area img");
    img.forEach(function(el, i){
        tl.from(el, {duration : .25, x : -100, opacity: 0,ease : Cubic.easeInOut})
    })

    tl.play();

    return tl;
}

function section_one_out() {
    var tl = new TimelineMax({ paused: true });

    tl
    .to(
        "#section-1-big-title", 
        {duration: 1,x: -150,opacity: 0,ease : Strong.easeOut},
        2
    )
    .to(
        "#section-1-btn-start",
        {duration : .5,opacity : 0, x : -50},
        2
    )
    .add(section_one_image_out)
    
    .to(
        "#section-one-img-shadow", 
        {duration: .5,opacity: 0, x : 750, y : 500},
       3
    )
    .to(
        "#section-one-img-shadow-2", 
        {duration: .5,opacity: 0, x : -250, y : -500}, 
       3
    )
    .to(
        "#section-one-img-shadow-3", 
        {duration: .5,opacity: 0, x : 550, y : -500}, 
       3
    )
    .to(
        "#section-1-big-img .main-big-img", 
        {duration: 1,scale: 1.75, opacity: 0,rotate: -75,x : -500, y : -100, ease : Back.easeOut},
        3
    )
    // .to(
    //     "#section-1-big-img .main-big-img", 
    //     {duration: .5,scale: 0, opacity: 0, ease : Back.easeOut}
    // )
    .to(
        ".shadow-text-big",
        {duration : .5, x : -1500}
    )
    tl.play();

    return tl;

}

function section_one_image_out() {
    var tl = new TimelineMax({ paused: true });

    var img = document.querySelectorAll("#section-1-clinet-area img");
    img.forEach(function(el, i){
        tl.to(el, {duration : .15, x : -100, opacity: 0,ease : Cubic.easeInOut})
    })

    tl.play();

    return tl;
}

function section_two(){
    var tl = new TimelineMax({ paused: true });
    
    tl
    .to(
        ".opening",
        {duration: .5, opacity : 1, top : "30vh",bottom:"30vh",},
        0
    )
    .to(
        "#section-two-opening-1",
        {duration: .25, display : "block"},
        .5
    )
    .to(
        "#section-two-opening-1",
        {duration: .5, opacity : 1, scale : 1, letterSpacing: "0px",ease:Circ.easeInOut},
        .75
    )
    .to(
        "#section-two-opening-1",
        {duration: .25, opacity : 0, scale : 1, y: 100, ease:Circ.easeInOut},
        2.25
    )
    .to(
        "#section-two-opening-1",
        {duration: 0, display : "none"},
        2.35
    )
    .to( 
        "#section-two-opening-2",
        {duration : .25, opacity: 1, display : "inline", letterSpacing: "0px"},
        2.40
    )
    .to(
        "#section-two-opening-2 .wel",
        {duration: .15, y:0, opacity: 1, ease:Circ.easeInOut},
        2.9
    )
    .to(
        "#section-two-opening-2 .come",
        {duration: .15, y:0, opacity: 1, ease:Circ.easeInOut},
        3.05
    )
    .to(
        "#section-two-opening-2 .to",
        {duration: .15, y:0, opacity: 1, ease:Circ.easeInOut},
        3.2
    )
    .to( 
        "#section-two-opening-2",
        {duration : .25, opacity: 0, y : -700, ease:Circ.easeInOut},
        3.5
    )
    .to( 
        "#section-two-opening-2",
        {duration : 0, display: "none"},
        3.6
    )
    .to(
        ".opening",
        {opacity : 1, top : "0",bottom:"0",ease:Circ.easeInOut},
        3.5
    )
    .to(
        ".navbar-nav .nav-item a",
        {color: "white",ease:Circ.easeInOut},
        3.6
    )
    .to( 
        "#section-two-opening-3",
        {duration : .5, display: "inline", opacity : 1, letterSpacing: "0px", ease:Circ.easeInOut},
        4.1
    )
    .to( 
        "#section-two-opening-3",
        {duration : .25, display: "inline", opacity : 1, letterSpacing: "0px",skewY : -5, ease:Circ.easeInOut},
        4.6
    )
    .to( 
        "#section-two-opening-3",
        {duration : .25, display: "inline", opacity : 0, letterSpacing: "0px",skewY : -5, x:-1000,y: 100, ease:Circ.easeInOut},
        7
    )
    .to(
        ".navbar-nav .nav-item a",
        {color: "unset",ease:Circ.easeInOut},
        8
    )
    .to(
        ".opening",
        {duration:.25,opacity : 1, bottom : "100vh"},
        8
    )
    
    console.log("play 11")
    tl.play();
    return tl;
}



 