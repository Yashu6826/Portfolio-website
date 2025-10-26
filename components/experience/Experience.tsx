import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { a, useTrail } from "@react-spring/web";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

 interface experienceProps {
    experienceRef?: React.MutableRefObject<null>;
  }

const ExperienceSection: React.FC<experienceProps> = ({ experienceRef }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // tracks which experience item is expanded; null means none
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

 

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

  const experiences = [
    {
      title: "Associate AI/ML Engineer",
      company: "AP Moller Maersk",
      location: "Bangalore, India",
      period: "2024 - Present",
      description: "Designed and implemented multi-agent frameworks leveraging Agno and custom orchestration layers, where agentscould autonomously retrieve data, exchange knowledge, and coordinate actions using A2A protocols, AGUI, and Lovable, resulting in more adaptive and intelligent workflows.Built AI solutions across document intelligence pipelines, including OCR-based document reading, PII detection and anonymization, knowledge extraction, and real-time language translation, significantly reducing manual processing overhead.React-workflow was used to create interactive, graph-based data flow visualizations that improved observability in pipelines for Azure Data Lake Storage.Deployed scalable microservices and applications using Azure Kubernetes Service (AKS), integrated with CI/CD piplines, and utilized PostgreSQL and MySQL for persistent storage.",
      skills: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL","Langgraph","Langchain","CrewAI","Ray","ANN","Agno","AGUI","Lovable","Python","Java","Fastapi","Docker","Kubernetes"]
    },
    {
      title: "Full Stack Developer",
      company: "Mikado solutions",
      location: "Remote",
      period: "2022 - 2023",
      description: "Developed a full-featured e-commerce web application allowing users to buy and sell student/ academic projects, including product listings, payments, search, and user profiles. Worked as part of an agile team, engaged in sprint planning, did peer code review, and deployed the app into production. Implemented CI/CD pipeline",
      skills: ["React.js", "Python", "Docker", "MongoDB", "Redis","Payment Integration","Client Interactions"]
    },
    {
      title: "Frontend Developer",
      company: "Sellular Networks",
      location: "Austin, TX",
      period: "2022 - 2024",
      description: "Conceived and developed a secure and scalable payment system allowing users to purchase event tickets and manage their payments easily. Integrated payment gateways (Razorpay) and implemented transaction logs, refunds and e-mail confirmations. Developed role-related dashboards for the event organizer and participant to manage events, review analytics, and view payments.",
      skills: ["JavaScript", "React", "CSS3", "Figma", "REST APIs","Nodejs"]
    }
  ];

   useIntersectionObserver(experienceRef, () => {
    api.start({
      y: 0,
      opacity: 1,
    });
  });

  return (
    <div className="experience-section" id="experience" ref={experienceRef}>
      <div className="container">
        {/* Header */}
        <div className='experience-section-head'>
        <div className="header">
                         <h2 style={{fontSize:"1.75rem",fontWeight:"800",marginBottom:"20px"}}>Experience</h2>
        </div>
        <div>
                         <h4 className='years'>-<span className='years'> 2+ </span><span className='years'> years of experience </span></h4>
</div></div>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-line"></div>
          <div className="timeline-items">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="timeline-item"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`timeline-dot ${hoveredIndex === index ? 'timeline-dot-hovered' : ''}`}></div>
                <div className={`card ${hoveredIndex === index ? 'card-hovered' : ''}`}>
                  <div className="card-content">
                    <div className="card-header">
                      <div className="card-header-content">
                        <h3 className="card-title">
                          {exp.title}
                          <ChevronRight className={`card-title-icon ${hoveredIndex === index ? 'card-title-icon-hovered' : ''}`} />
                        </h3>
                        <p className="card-company">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="card-meta">
                      <div className="meta-item">
                        <Calendar className="meta-icon" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin className="meta-icon" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="card-description" id={`exp-desc-${index}`}>
                      {expandedIndex === index
                        ? exp.description
                        : exp.description.length > 200
                        ? `${exp.description.slice(0, 200)}...`
                        : exp.description}
                    </p>
                    {exp.description.length > 200 && (
                      <button
                        className="read-more-btn"
                        onClick={() =>
                          setExpandedIndex(expandedIndex === index ? null : index)
                        }
                        aria-expanded={expandedIndex === index}
                        aria-controls={`exp-desc-${index}`}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#0070f3',
                          cursor: 'pointer',
                          padding: 0,
                          marginTop: '0.5rem',
                        }}
                      >
                        {expandedIndex === index ? 'Show less' : 'Read more'}
                      </button>
                    )}
                    {/* <div className="card-skills">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div> */}
                  </div>
                  <div className={`card-accent ${hoveredIndex === index ? 'card-accent-visible' : ''}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;