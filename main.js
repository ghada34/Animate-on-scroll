gsap.from('.hero', {
    y: '250px',
    opacity: 0,
    duration: 1,
    skewY: '5deg'
})
//---------------timeline
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        //markers:true, 
        start: '125px 150px',
        end: 'bottom 500px',
        scrub: true
    }
})
tl.to('.hero-text h1,.hero-text p', {
    skewY: '3deg',
    y: '-60px',
    duration: 1,
    opacity: 0,
    scrub: true
})
//---------------timeline

const tlTitle = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects',
        //markers:true,
        start: '125px 150px',
        end: '700px 500px',
    }
})
tlTitle.from('.projects h1', {
    opacity: 0,
    y: '100px',
    x: '600px'
})
//---------------timeline img

const tlImg = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects',
        // markers: true,
        start: '50px 150px',
        end: '1100px 500px',
        scrub: true
    }
})
tlImg.fromTo('.img', {
    opacity: 0,
    y: '100px',
    skewY: '5deg'
}, {
    opacity: 1,
    y: '80px',
    skewY: '0deg'
}).to('.img img', {
    scale: 1.2
})
