import React, { useEffect, useState } from "react";
import Section from "../main/Section";
import Image from "next/image";
import { a, useTrail } from "@react-spring/web";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface AboutProps {
  aboutRef?: React.MutableRefObject<null>;
}

const About: React.FC<AboutProps> = ({ aboutRef }) => {
  const [springs, api] = useTrail(2, () => ({
    from: {
      y: 50,
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 28,
    },
  }));

  useIntersectionObserver(aboutRef, () => {
    api.start({
      y: 0,
      opacity: 1,
    });
  });

  return (
    <Section label="about" sectionRef={aboutRef}>
      <a.header style={springs[0]}>
        <h2>About Me</h2>
      </a.header>
      <a.div className="about__container" style={springs[1]}>
        <article className="about__content">
          <p>
            I&apos;m a passionate developer who loves crafting elegant solutions to complex problems. 
            With expertise in modern web technologies, I specialize in building scalable applications 
            that deliver exceptional user experiences.
          </p>

          <p>
            My journey in tech has been driven by curiosity and a constant desire to learn. 
            I thrive in collaborative environments where innovation meets execution, and I&apos;m 
            always excited to take on new challenges that push the boundaries of what&apos;s possible.r—through code—unique, and innovative solutions
            to complex problems.
          </p>

          <p>
            If my portfolio interests you, or you need an enthusiastic developer
            on your team, I am{" "}
            <a href="mailto:yashrajgupta6826@gmail.com">available for hire.</a>
          </p>

          <p>
            Here is an up-to-date list of my most recently used technologies:
          </p>

          <ul className="about__techList">
            <li>Javascript (ES6+)/TypeScript</li>
            <li>React</li>
            <li>Next.js 13</li>
            <li>Express.js (MongoDB)</li>
            <li>Firebase</li>
            <li>Ruby on Rails</li>
          </ul>

          <span className="extra-info">
            DO YOU HAVE A COOL WEBSITE OR APPLICATION IN MIND? <br />I WOULD LOVE TO{" "}
            <a href="#contact">HEAR ABOUT IT</a>
          </span>
        </article>
        <div className="about__image">
          <Image
            src="/yashraj_pic_img.jpg"
            width={500}
            height={500}
            alt="Headshot"
          />
        </div>
      </a.div>
    </Section>
  );
};

export default About;
