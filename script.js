//CIDADES
var rdnbrk = {};
rdnbrk.opacityIn = [0, 1];
rdnbrk.scaleIn = [0.2, 1];
rdnbrk.scaleOut = 1;
rdnbrk.durationIn = 800;
rdnbrk.durationOut = 900;
rdnbrk.delay = 700;

var rdnbrk2 = {};
rdnbrk2.opacityIn = [0, 1];
rdnbrk2.scaleIn = [0.2, 1];
rdnbrk2.scaleOut = 1;
rdnbrk2.durationIn = 800;
rdnbrk2.durationOut = 900;
rdnbrk2.delay = 1400;

var rdnbrk3 = {};
rdnbrk3.opacityIn = [0, 1];
rdnbrk3.scaleIn = [0.2, 1];
rdnbrk3.scaleOut = 1;
rdnbrk3.durationIn = 800;
rdnbrk3.durationOut = 900;
rdnbrk3.delay = 2100;

anime.timeline({ loop: true })
    .add({
        targets: '.rdnbrk .rdn-1',
        opacity: rdnbrk.opacityIn,
        scale: rdnbrk.scaleIn,
        duration: rdnbrk.durationIn
    }).add({
        targets: '.rdnbrk .rdn-1',
        opacity: 0,
        scale: rdnbrk.scaleOut,
        duration: rdnbrk.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk.delay
    }).add({
        targets: '.rdnbrk .rdn-2',
        opacity: rdnbrk.opacityIn,
        scale: rdnbrk.scaleIn,
        duration: rdnbrk.durationIn
    }).add({
        targets: '.rdnbrk .rdn-2',
        opacity: 0,
        scale: rdnbrk.scaleOut,
        duration: rdnbrk.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk.delay
    }).add({
        targets: '.rdnbrk .rdn-3',
        opacity: rdnbrk.opacityIn,
        scale: rdnbrk.scaleIn,
        duration: rdnbrk.durationIn
    }).add({
        targets: '.rdnbrk .rdn-3',
        opacity: 0,
        scale: rdnbrk.scaleOut,
        duration: rdnbrk.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk.delay
    }).add({
        targets: '.rdnbrk .rdn-4',
        opacity: rdnbrk.opacityIn,
        scale: rdnbrk.scaleIn,
        duration: rdnbrk.durationIn
    }).add({
        targets: '.rdnbrk .rdn-4',
        opacity: 0,
        scale: rdnbrk.scaleOut,
        duration: rdnbrk.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk.delay
    }).add({
        targets: '.rdnbrk .rdn-5',
        opacity: rdnbrk.opacityIn,
        scale: rdnbrk.scaleIn,
        duration: rdnbrk.durationIn
    }).add({
        targets: '.rdnbrk .rdn-5',
        opacity: 0,
        scale: rdnbrk.scaleOut,
        duration: rdnbrk.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk.delay
    }).add({
        targets: '.rdnbrk .rdn-6',
        opacity: rdnbrk.opacityIn,
        scale: rdnbrk.scaleIn,
        duration: rdnbrk.durationIn
    }).add({
        targets: '.rdnbrk .rdn-6',
        opacity: 0,
        scale: rdnbrk.scaleOut,
        duration: rdnbrk.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk.delay
    }).add({
        targets: '.rdnbrk',
        opacity: 0,
        duration: 400,
        delay: 500
    });

// SEGMENTOS

anime.timeline({ loop: true })
    .add({
        targets: '.rdnbrk2 .rdn-1a',
        opacity: rdnbrk2.opacityIn,
        scale: rdnbrk2.scaleIn,
        duration: rdnbrk2.durationIn
    }).add({
        targets: '.rdnbrk2 .rdn-1a',
        opacity: 0,
        scale: rdnbrk2.scaleOut,
        duration: rdnbrk2.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk2.delay
    }).add({
        targets: '.rdnbrk2 .rdn-2a',
        opacity: rdnbrk2.opacityIn,
        scale: rdnbrk2.scaleIn,
        duration: rdnbrk2.durationIn
    }).add({
        targets: '.rdnbrk2 .rdn-2a',
        opacity: 0,
        scale: rdnbrk2.scaleOut,
        duration: rdnbrk2.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk2.delay
    }).add({
        targets: '.rdnbrk2 .rdn-3a',
        opacity: rdnbrk2.opacityIn,
        scale: rdnbrk2.scaleIn,
        duration: rdnbrk2.durationIn
    }).add({
        targets: '.rdnbrk2 .rdn-3a',
        opacity: 0,
        scale: rdnbrk2.scaleOut,
        duration: rdnbrk2.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk2.delay
    }).add({
        targets: '.rdnbrk2 .rdn-4a',
        opacity: rdnbrk2.opacityIn,
        scale: rdnbrk2.scaleIn,
        duration: rdnbrk2.durationIn
    }).add({
        targets: '.rdnbrk2 .rdn-4a',
        opacity: 0,
        scale: rdnbrk2.scaleOut,
        duration: rdnbrk2.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk2.delay
    }).add({
        targets: '.rdnbrk2 .rdn-5a',
        opacity: rdnbrk2.opacityIn,
        scale: rdnbrk2.scaleIn,
        duration: rdnbrk2.durationIn
    }).add({
        targets: '.rdnbrk2 .rdn-5a',
        opacity: 0,
        scale: rdnbrk2.scaleOut,
        duration: rdnbrk2.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk2.delay
    }).add({
        targets: '.rdnbrk2 .rdn-6a',
        opacity: rdnbrk2.opacityIn,
        scale: rdnbrk2.scaleIn,
        duration: rdnbrk2.durationIn
    }).add({
        targets: '.rdnbrk2 .rdn-6a',
        opacity: 0,
        scale: rdnbrk2.scaleOut,
        duration: rdnbrk2.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk2.delay
    }).add({
        targets: '.rdnbrk2',
        opacity: 0,
        duration: 400,
        delay: 700
    });

//CERTIFICADOS

anime.timeline({ loop: true })
    .add({
        targets: '.rdnbrk3 .rdn-1b',
        opacity: rdnbrk3.opacityIn,
        scale: rdnbrk3.scaleIn,
        duration: rdnbrk3.durationIn
    }).add({
        targets: '.rdnbrk3 .rdn-1b',
        opacity: 0,
        scale: rdnbrk3.scaleOut,
        duration: rdnbrk3.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk3.delay
    }).add({
        targets: '.rdnbrk3 .rdn-2b',
        opacity: rdnbrk3.opacityIn,
        scale: rdnbrk3.scaleIn,
        duration: rdnbrk3.durationIn
    }).add({
        targets: '.rdnbrk3 .rdn-2b',
        opacity: 0,
        scale: rdnbrk3.scaleOut,
        duration: rdnbrk3.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk3.delay
    }).add({
        targets: '.rdnbrk3 .rdn-3b',
        opacity: rdnbrk3.opacityIn,
        scale: rdnbrk3.scaleIn,
        duration: rdnbrk3.durationIn
    }).add({
        targets: '.rdnbrk3 .rdn-3b',
        opacity: 0,
        scale: rdnbrk3.scaleOut,
        duration: rdnbrk3.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk3.delay
    }).add({
        targets: '.rdnbrk3 .rdn-4b',
        opacity: rdnbrk3.opacityIn,
        scale: rdnbrk3.scaleIn,
        duration: rdnbrk3.durationIn
    }).add({
        targets: '.rdnbrk3 .rdn-4b',
        opacity: 0,
        scale: rdnbrk3.scaleOut,
        duration: rdnbrk3.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk3.delay
    }).add({
        targets: '.rdnbrk3 .rdn-5b',
        opacity: rdnbrk3.opacityIn,
        scale: rdnbrk3.scaleIn,
        duration: rdnbrk3.durationIn
    }).add({
        targets: '.rdnbrk3 .rdn-5b',
        opacity: 0,
        scale: rdnbrk3.scaleOut,
        duration: rdnbrk3.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk3.delay
    }).add({
        targets: '.rdnbrk3 .rdn-6b',
        opacity: rdnbrk3.opacityIn,
        scale: rdnbrk3.scaleIn,
        duration: rdnbrk3.durationIn
    }).add({
        targets: '.rdnbrk3 .rdn-6b',
        opacity: 0,
        scale: rdnbrk3.scaleOut,
        duration: rdnbrk3.durationOut,
        easing: "easeInExpo",
        delay: rdnbrk3.delay
    }).add({
        targets: '.rdnbrk3',
        opacity: 0,
        duration: 400,
        delay: 900
    });