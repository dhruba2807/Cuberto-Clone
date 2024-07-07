
    Shery.mouseFollower();
    Shery.makeMagnet(".magnet");

    Shery.hoverWithMediaCircle(".effect" /* Element to target.*/, {
        videos: ["./3.mp4", "./2.mp4", "./1.mp4"] /*OR*/,
        //videos: ["video1.mp4", "video2.mp4"],
    });
    gsap.to(".fleft-text", {
        scrollTrigger: {
            trigger: "#featured-images",
            pin: true,
            start: "top top",
            end: "bottom bottom",
            endTrigger: ".last",
            scrub: 1,
        },
        y: "-300%",
        ease: Power1,
    });
    let sections = document.querySelectorAll(".fleft-text");
    Shery.imageEffect(".images", {
        style: 4,
        
        config: { onMouse: { value: 1 } },
        slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            scrub: 1,
            onUpdate: function (prog) {
              setScroll(prog.progress + index);
            },
          });
        });
      },
    });