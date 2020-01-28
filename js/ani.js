var masterTL = new TimelineMax();
bootAnimation();

function bootAnimation() {
    masterTL
    .add(section_one, 0)
    .add(section_one_out, 5);
}

function section_one() {

    TweenLite.from(
        "#section-1-big-title", 
        1,
        {duration: 1,x: -150,opacity: 0,ease : Strong.easeOut},
        2
    );
    TweenLite.from(
        "#section-1-btn-start",
        1,
        {duration : .5,opacity : 0, y : -50},
        2
    );
    TweenLite.from(
        "#section-1-clinet-area",
        1,
        {duration : .5,y : 100,opacity : 0,ease : Strong.easeOut},
        2
    )
    // .add(sect;ion_one_image, 2)
    TweenLite.from(
        "#section-1-big-img .main-big-img", 
        1,
        {duration: .75,scale: 0, opacity: 0, ease : Back.easeOut}, 
        3
    );
    TweenLite.from(
        "#section-one-img-shadow", 
        1,
        {opacity: 0, x : 750, y : 500}, 
    );
    TweenLite.from(
        "#section-one-img-shadow-2", 
        1,
        {opacity: 0, x : -250, y : -500}, 
    );
    TweenLite.from(
        "#section-one-img-shadow-3", 
        {opacity: 0, x : 550, y : -500}, 
    )

    return TweenLite;

}

function section_one_image() {

    var img = document.querySelectorAll("#section-1-clinet-area img");
    img.forEach(function(el, i){
        TweenLite.from(el, {duration : .25, x : -100, opacity: 0,ease : Cubic.easeInOut})
    })

    TweenLite.play();

    return TweenLite;
}

function section_one_out() {

    TweenLite
    .to(
        "#section-1-big-tiTweenLitee", 
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
        {duration: .5,scale: 1.75, opacity: 1,rotate: -45, ease : Back.easeOut},
        3
    )
    .to(
        "#section-1-big-img .main-big-img", 
        {duration: .5,scale: 0, opacity: 0, ease : Back.easeOut}
    )
    .to(
        ".shadow-text-big",
        {duration : .25, x : 500, opacity: 0}
    )
    TweenLite.play();

    return TweenLite;

}

function section_one_image_out() {
    var img = document.querySelectorAll("#section-1-clinet-area img");
    img.forEach(function(el, i){
        TweenLite.to(el, {duration : .15, x : -100, opacity: 0,ease : Cubic.easeInOut})
    })

    TweenLite.play();

    return TweenLite;
}

 