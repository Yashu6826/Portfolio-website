import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { storeType } from "../../redux/configureStore";
import toggleDarkMode from "../../utils/darkModeHelper";
import Logo from "./Logo";
import { a, useSpring, useTrail, useTransition } from "@react-spring/web";
import Link from "next/link";
import {onButtonClick} from "../../db/resume";



const Navigation = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const headerRef = useRef(null);

  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const currentSection = useSelector(
    (store: storeType) => store.currentSection
  );


  const sectionActiveFor = (arr: any[]) =>
    arr.includes(currentSection.name) ? "active" : "";

  const navItems = [
    <Link href="#content" className={sectionActiveFor(["hero"])} scroll={false} key={1}>
      Home
    </Link>,
    <Link href="#about" className={sectionActiveFor(["about"])} scroll={false} key={2}>
      About
    </Link>,
    <Link
      href="#featured"
      className={sectionActiveFor(["featured", "projects"])}
      scroll={false}
      key={3}
    >
      Projects
    </Link>,
    <Link
      href="#experience"
      className={sectionActiveFor(["experience"])}
      scroll={false}
      key={4}
    >
      Experience
    </Link>,
    // <Link
    //   href="#testimonials"
    //   className={sectionActiveFor(["testimonials"])}
    //   scroll={false}
    //   key={4}
    // >
    //   Testimonials
    // </Link>,
    <Link
      href="#contact"
      className={sectionActiveFor(["contact"])}
      scroll={false}
      key={5}
    >
      Contact
    </Link>,
  ];

  const [spring, api] = useSpring(
    () => ({
      opacity: 0,
      config: {
        tension: 350,
        friction: 40,
      },
    }),
    []
  );

  useEffect(() => {
    // Set darkmode
    setDarkMode(
      !!JSON.parse(localStorage?.getItem("okoye-charles-web-config") || "{}")
        ?.darkMode
    );
    // Start navItems animation
    api({ opacity: 1 });

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setSticky(entry.intersectionRatio < 1);
      },
      { threshold: 1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);

    return function () {
      if (headerRef.current) observer.unobserve(headerRef.current);
      api.stop();
    };
  }, []);

  return (
    <header ref={headerRef} className={sticky ? "header sticky" : "header"}>
      <nav className="navigation" aria-label="Navigation">
        <div className="logo">
          <Logo />
        </div>
        <ul className="navigation__links">
          {navItems.map((item, i) => (
            <a.li style={spring} key={i}>
              {item}
            </a.li>
          ))}
          <a.li style={spring} className='navigation__linkResume'>
           
              <button className="bg-red-300 border border-red"  style={{backgroundColor:"#0070f3",padding:"5px",color:"white",cursor:"pointer",borderRadius:"5px"}} 
              onClick={onButtonClick}>Resume</button>
         
          </a.li>
          <a.li style={spring} className='navigation__linkResume'>
            <a
            className={`navigation__linkResume${isDarkMode ? ' navigation__linkResume--dark' : ''}`}
              href="https://www.linkedin.com/in/yashraj-gupta-803282251/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                border: "solid 1px #0070f3",
                padding: "5px",
                color: "currentColor",
                cursor: "pointer",
                borderRadius: "5px",
                textDecoration: "none",
                background: "transparent",
                textAlign: "center",
              }}
            >
              Let&apos;s connect on LinkedIn
            </a>
          </a.li>
          <li aria-label="Toggle dark mode">
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={(checked) => {
                toggleDarkMode(setDarkMode, checked);
              }}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
