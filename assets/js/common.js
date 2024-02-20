gsap.from('.section1 h2 span', {
    y: 100, duration: 1, stagger: {
        from: 'start',
        each: 0.3
    },
})


const sc01 = gsap.timeline();
sc01.to('.section1 h2 span', { y: innerHeight * -1, autoAlpha: 0 }).to('.section1 img', {
    autoAlpha: 1,
});
ScrollTrigger.create({
    animation: sc01,
    trigger: '.section1',
    pin: true,
    scrub: true,
    end: "+=1200vh",
    toggleActions: "play none none none",
});



gsap.to('.section2 .sc02-tit', {
    scrollTrigger: {
        trigger: '.section2',
        start: '20% 10%',
        end: "+=600vh",
        className: 'ispaly',
        markers: true,
        pin: true,
        scrub: true,
    },
    autoAlpha: 0,
    duration: 2,
})
