import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    let posicionY = window.pageYOffset;
    let posicionParallax = posicionY * 0.5;
    heroRef.current.style.transform = "translateY(" + posicionParallax + "px)";
  };

  return (
    <div className="relative z-[-1]" ref={heroRef}>
      <div className="absolute z-10 w-full h-full bg-gradient-to-t from-black to-transparent from-0% to-60%"></div>
      <video
        className="object-cover object-[20%] md:object-[13%] lg:object-[35%] xl:object-[45%] h-[800px] md:h-[1180px] xl:h-[1080px]"
        autoPlay
        muted
        loop
        src="/heroMov.webm"
      />
    </div>
  );
};

export default Hero;
