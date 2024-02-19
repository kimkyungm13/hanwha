gsap.from('.section1 h2 span', {
    y: 100, duration: 1, stagger: {
        from: 'start',
        each: 0.3
    }, opacity: 0
})

ScrollTrigger.create({
    trigger: 'section',
    toggleClass: {
        targets: 'header',
        className: 'none',

    },
    start: '20% 0%',
    end: '100% 0%',
    markers: true
})