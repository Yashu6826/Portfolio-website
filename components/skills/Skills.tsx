// import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// const ImageCarousel = () => {
// const images = [
//   '/skills/react.png',
//   '/skills/typescript.png',
//   '/skills/javascript.png',
//   '/skills/css.png',
//   '/skills/html.png',
//   '/skills/nodejs.png',
//   '/skills/express.png',
//   '/skills/mongodb.png',
//   '/skills/git.png',
//   '/skills/github.png',
//   '/skills/nextjs.png',
//   '/skills/fastapi.png',
//   '/skills/python.png',
//   '/skills/docker.png',
//   '/skills/kubernetes.png',
//   '/skills/springboot.png',
//   '/skills/aws.png',
//   '/skills/azure.png',
//   '/skills/postgresql.png', 
//   '/skills/mysql.png',
//   '/skills/redis.png',
//   '/skills/graphql.png',
//   '/skills/selenium.png',
//   '/skills/jest.png',
//   '/skills/cypress.png',
//   '/skills/vitest.png',
//   '/skills/webpack.png',
//   '/skills/babel.png',
// ];

//   return (
//     <div className="carousel-container">
//        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}  interval={3000}>
//         {[...images, ...images].map((img, index) => (
//           <div className="carousel-image" key={index}>
//             <img src={img} alt={`slide-${index}`} />
//           </div>
//         ))}
//        </Carousel>
//     </div>
//   );
// };

// export default ImageCarousel;
import React from "react";
import Section from "../main/Section";

const images = [
  "/skills/react.png",
  "/skills/typescript.png",
  "/skills/javascript.png",
  "/skills/nodejs.png",
  "/skills/express.png",
  "/skills/mongodv.png",
  "/skills/java.png",
  "/skills/github.png",
  "/skills/nextjs.png",
  "/skills/fastapi.png",
  "/skills/python.png",
  "/skills/docker.png",
  "/skills/kubernetes.png",
  "/skills/springboot.jpeg",
  "/skills/aws.jpg",
  "/skills/azure.png",
  "/skills/postgressql.png",
  "/skills/mysql.png",
  "/skills/graphql.png",
  "/skills/selenium.png",
  "/skills/nextjs.png",
  "/skills/crew.png",
  "/skills/yolo.png",
  "/skills/opencv.jpg",


];

const Skills: React.FC = () => {
  // For a smooth continuous marquee we duplicate the images array so the track
  // can scroll seamlessly. CSS handles the animation.
  const doubled = [...images, ...images];

  return (
    <Section label="skills">
      <div className="skills-marquee">
        <div className="container">
          <header className="header">
            <h2>Skills</h2>
          </header>
          <div className="marquee" aria-hidden={false}>
            <div className="marquee__track">
              {doubled.map((src, idx) => (
                <div className="marquee__item" key={idx}>
                  <img src={src} alt={`skill-${idx}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
