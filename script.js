let tl=gsap.timeline()

tl.from("nav .left h1 , .middle h3 , .right h4",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.2,
})
tl.from(".left-data h1",{
    x:-100,
    duration:1,
    delay:0.4,
    opacity:0,
    stagger:0.3,
})
tl.from(".right-data #img1",{
    scale:1.6,
    opacity:0,
    duration:1
})

gsap.from(".page2 .box",{
    scale:0,
    opacity:0,
    scrollTrigger:{
        trigger:".page2 .box",
        scroll:"body",
        stagger:0.3,
        delay:0.4
    }
})
gsap.from(".page3 h1",{
    y:-100,
    opacity:0,
    duration:1,
    delay:0.7,
    scrollTrigger:{
        trigger:".page3 h1",
        scroll:"body",
    }
})
gsap.from(".page3 .pack ,.pack h3",{
    x:-100,
    scale:0,
    duration:0.6,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
        trigger:".page3 .pack , .pack h3",
        scroll:"body",
    }
})