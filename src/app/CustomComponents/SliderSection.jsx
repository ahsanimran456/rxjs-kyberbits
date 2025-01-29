"use client"; // Required for Next.js 13+ with the app directory
import { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import "./a.css"; // Import the plain CSS file

gsap.registerPlugin(Observer);

export default function AnimatedSections() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const images = document.querySelectorAll(".bg");
    const outerWrappers = gsap.utils.toArray(".outer");
    const innerWrappers = gsap.utils.toArray(".inner");
    const wrap = gsap.utils.wrap(0, sections.length);
    let currentIndex = -1;
    let animating;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
      index = wrap(index);
      animating = true;
      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;
      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => (animating = false),
      });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(sections[currentIndex], {
          autoAlpha: 0,
        });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        { yPercent: i => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0
      )
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

      currentIndex = index;
    }

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);
  }, []);

  return (
    <div>
      <header className="header">
        <div>Animated Sections</div>
        <div>
          <a href="https://codepen.io/BrianCross/pen/PoWapLP">Original By Brian</a>
        </div>
      </header>
      {[
        "Scroll down",
        "Animated with GSAP",
        "GreenSock",
        "Animation platform",
        "Keep scrolling",
        "Explore new sections",
        "Endless possibilities",
        "Let's dive deeper",
        "Experience the motion",
        "Full of surprises",
      ].map((heading, index) => (
        <section key={index} className={`section${index + 1}`}>
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="section-heading">{heading}</h2>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
