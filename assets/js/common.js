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

        pin: true,
        scrub: true,
    },
    autoAlpha: 0,
    duration: 2,
});

ScrollTrigger.create({
    trigger: ".section2",
    start: 'top top',
    pin: true,
    pinSpacing: false
});

const sc03 = gsap.timeline();
sc03.from(['.section3 .hd-tit', '.section3 .hd-txt p'], {
    y: 100, stagger: {
        from: 'start',
        each: 0.3
    }, duration: 1,
    autoAlpha: 0
})
ScrollTrigger.create({
    animation: sc03,
    trigger: '.section3',
    start: 'top 80%',

})
gsap.utils.toArray(".link-group a").forEach((item, index) => {
    gsap.from(item, {
        yPercent: 100,
        autoAlpha: 0,
        duration: 0.5,
        ease: "none",
        stagger: {
            each: 0.4 * index, // 각 요소에 대한 애니메이션 시작 시간 간격
            from: "start" // 첫 번째 요소부터 시작
        },

        scrollTrigger: {
            trigger: item,
            start: "top bottom",
            markers: true,
        }
    })
});
// sc03.from('.link-group .link01', {
//     y: 100, autoAlpha: 0, stagger: 0.4, scrollTrigger: {
//         trigger: '.link-group .link01',
//         start: 'top 80%',
//         scrub: true,
//         markers: true,
//     }
// }).from('.link-group .link02', {
//     y: 100, autoAlpha: 0, stagger: 0.4, scrollTrigger: {
//         trigger: '.link-group .link02',
//         start: 'top 80%',
//         scrub: true,
//         markers: true,
//     }
// }).from('.link-group .link03', {
//     y: 100, autoAlpha: 0, stagger: 0.4, scrollTrigger: {
//         trigger: '.link-group .link03',
//         start: 'top 80%',
//         scrub: true,
//         markers: true,
//     }
// });