gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.etapa').forEach(etapa => {
  gsap.fromTo(etapa,
    {
      x: 100,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 10,
      ease: "power3.out",
      scrollTrigger: {
        trigger: etapa,
        start: "top 80%",
        end: "top 40%", 
        scrub: true, 
        toggleActions: "play reverse play reverse"  
      }
    }
  );
});