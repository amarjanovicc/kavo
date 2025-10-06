'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  image: string;
  color: string;
  link: string;
  tags: string[]; // Added tags array
};

// Updated project data with more relevant tags
const projects: Project[] = [
  { 
    id: '1', 
    title: 'Hotel Heritage', 
    image: '/projects/1.png', 
    color: '#3A486F', 
    link: '/projekti/laptop',
    tags: ['Web dizajn', 'Responsive', 'Hotelijerstvo'] // Added relevant hotel industry tag
  },
  { 
    id: '2', 
    title: 'Ronin gym', 
    image: '/projects/2.png', 
    color: '#222222', 
    link: '/projekti/lantern',
    tags: ['Branding', 'Logo', 'Fitness']  // Added fitness-related tag
  },
  { 
    id: '3', 
    title: 'Brochure', 
    image: '/projects/3.png', 
    color: '#CDCBC4', 
    link: '/projekti/brochure',
    tags: ['Print', 'Grafički dizajn', 'Katalog']  // Added catalog tag
  },
  { 
    id: '4', 
    title: 'Procake', 
    image: '/projects/4.png', 
    color: '#B1B1B1', 
    link: '/projekti/packaging',
    tags: ['Ambalaža', 'Prehrambeni proizvod', 'Dizajn']  // Added food product tag
  },
  { 
    id: '5', 
    title: 'Product', 
    image: '/projects/5.png', 
    color: '#E9E9E9', 
    link: '/projekti/product',
    tags: ['Product dizajn', '3D', 'Vizualizacija']  // Added visualization tag
  },
  { 
    id: '6', 
    title: 'Web Shop', 
    image: '/projects/6.png', 
    color: '#FFFFFF', 
    link: '/projekti/website',
    tags: ['Web dizajn', 'E-commerce', 'Responsive', 'Online prodaja']  // Updated for web shop
  },
  { 
    id: '7', 
    title: 'Baltazar anketa', 
    image: '/projects/7.png', 
    color: '#4AAE31', 
    link: '/projekti/app-game',
    tags: ['App dizajn', 'UX/UI', 'Anketa', 'Korisničko iskustvo']  // Added survey-specific tags
  },
  { 
    id: '8', 
    title: 'Marketing platform', 
    image: '/projects/8.png', 
    color: '#F2A900', 
    link: '/projekti/phone',
    tags: ['UX/UI', 'Digital marketing', 'Poslovna platforma']  // Added marketing-specific tags
  },
  { 
    id: '9', 
    title: 'Wending', 
    image: '/projects/9.png', 
    color: '#F1E6F2', 
    link: '/projekti/gogi',
    tags: ['Branding', 'Logo dizajn', 'Vizualni identitet']  // Added visual identity tag
  },
  { 
    id: '10', 
    title: 'Band', 
    image: '/projects/10.png', 
    color: '#B964CF', 
    link: '/projekti/band',
    tags: ['Glazbeni dizajn', 'Promocija', 'Vizualni identitet']  // Added music-specific tags
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="bg-[#080D10] py-12 sm:py-16 px-3 sm:px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[#FFBD00] text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold mb-6 sm:mb-8 md:mb-12 text-center">
          PROJEKTI
        </h2>
        
        <div className="projects-container">
          {/* First row */}
          <div className="item-laptop">
            <Link href={projects[0].link} className="project-item" style={{ backgroundColor: projects[0].color }}>
              <div className="image-container">
                <Image src={projects[0].image} alt={projects[0].title} fill priority className="object-contain" />
              </div>
              {/* Hover overlay */}
              <div className="hover-overlay">
                <h3>{projects[0].title}</h3>
                <div className="tags-container">
                  {projects[0].tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
          
          <div className="item-lantern">
            <Link href={projects[1].link} className="project-item" style={{ backgroundColor: projects[1].color }}>
              <div className="image-container">
                <Image src={projects[1].image} alt={projects[1].title} fill priority className="object-contain" />
              </div>
              {/* Hover overlay */}
              <div className="hover-overlay">
                <h3>{projects[1].title}</h3>
                <div className="tags-container">
                  {projects[1].tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
          
          <div className="item-brochure">
            <Link href={projects[2].link} className="project-item" style={{ backgroundColor: projects[2].color }}>
              <div className="image-container">
                <Image src={projects[2].image} alt={projects[2].title} fill priority className="object-contain" />
              </div>
              {/* Hover overlay */}
              <div className="hover-overlay">
                <h3>{projects[2].title}</h3>
                <div className="tags-container">
                  {projects[2].tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
          
          {/* Second row */}
          <div className="item-packaging">
            <Link href={projects[3].link} className="project-item" style={{ backgroundColor: projects[3].color }}>
              <div className="image-container">
                <Image src={projects[3].image} alt={projects[3].title} fill className="object-contain" />
              </div>
              {/* Hover overlay */}
              <div className="hover-overlay">
                <h3>{projects[3].title}</h3>
                <div className="tags-container">
                  {projects[3].tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
          
          <div className="item-product">
            <Link href={projects[4].link} className="project-item" style={{ backgroundColor: projects[4].color }}>
              <div className="image-container">
                <Image src={projects[4].image} alt={projects[4].title} fill className="object-contain" />
              </div>
              {/* Hover overlay */}
              <div className="hover-overlay">
                <h3>{projects[4].title}</h3>
                <div className="tags-container">
                  {projects[4].tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
          
          <div className="item-website">
            <Link href={projects[5].link} className="project-item" style={{ backgroundColor: projects[5].color }}>
              <div className="image-container">
                <Image src={projects[5].image} alt={projects[5].title} fill className="object-contain" />
              </div>
              {/* Hover overlay */}
              <div className="hover-overlay">
                <h3>{projects[5].title}</h3>
                <div className="tags-container">
                  {projects[5].tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
          
          {/* Third row */}
          <div className="item-appgame">
            <Link href={projects[6].link} className="project-item" style={{ backgroundColor: projects[6].color }}>
              <div className="image-container">
                <Image src={projects[6].image} alt={projects[6].title} fill className="object-contain" />
              </div>
              {/* Hover overlay */}
              <div className="hover-overlay">
                <h3>{projects[6].title}</h3>
                <div className="tags-container">
                  {projects[6].tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
          
          {/* Fourth row */}
          <div className="item-phone">
            <Link href={projects[7].link} className="project-item" style={{ backgroundColor: projects[7].color }}>
              <div className="image-container">
                <Image src={projects[7].image} alt={projects[7].title} fill className="object-contain" />
              </div>
              {/* Hover overlay */}
              <div className="hover-overlay">
                <h3>{projects[7].title}</h3>
                <div className="tags-container">
                  {projects[7].tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
          
          <div className="item-gogi">
            <Link href={projects[8].link} className="project-item" style={{ backgroundColor: projects[8].color }}>
              <div className="image-container">
                <Image src={projects[8].image} alt={projects[8].title} fill className="object-contain" />
              </div>
              {/* Hover overlay */}
              <div className="hover-overlay">
                <h3>{projects[8].title}</h3>
                <div className="tags-container">
                  {projects[8].tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
          
          <div className="item-band">
            <Link href={projects[9].link} className="project-item" style={{ backgroundColor: projects[9].color }}>
              <div className="image-container">
                <Image src={projects[9].image} alt={projects[9].title} fill className="object-contain" />
              </div>
              {/* Hover overlay */}
              <div className="hover-overlay">
                <h3>{projects[9].title}</h3>
                <div className="tags-container">
                  {projects[9].tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Base Grid Layout */
        .projects-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: min-content;
          gap: 12px;
          width: 100%;
          position: relative;
        }
        
        /* Project Items & Images */
        .project-item {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 0;
          overflow: hidden;
        }
        
        .image-container img {
          object-fit: cover !important;
          position: absolute !important;
          inset: 0;
          width: 100% !important;
          height: 100% !important;
          max-width: none !important;
          max-height: none !important;
          margin: 0 !important;
          transition: transform 0.5s ease;
        }
        
        /* Hover overlay styles - IMPROVED ANIMATION */
        .hover-overlay {
          position: absolute;
          inset: 0;
          background-color: #FFBD00;
          opacity: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          padding: 48px;
          text-align: left;
          transition: opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          z-index: 10;
          transform: translateY(10px);
          pointer-events: none; /* Ensures hover works properly */
        }
        
        .project-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .project-item:hover .hover-overlay {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        
        .project-item:hover .image-container img {
          transform: scale(1.05);
        }
        
        .hover-overlay h3 {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 16px;
          color: #080D10;
          font-family: sans-serif;
          line-height: 1.1;
          padding-left: 5px;
          padding-right: 5px;
          transform: translateY(10px);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s;
        }
        
        .project-item:hover .hover-overlay h3 {
          opacity: 1;
          transform: translateY(0);
        }
        
        .tags-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 10px;
          margin-bottom: 8px;
          padding-left: 5px;
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;
        }
        
        .project-item:hover .tags-container {
          opacity: 1;
          transform: translateY(0);
        }
        
        .tag {
          background-color: transparent;
          color: rgba(8, 13, 16, 0.5);
          font-size: 0.875rem;
          padding: 6px 20px;
          border-radius: 22px;
          white-space: nowrap;
          border: 1px solid rgba(8, 13, 16, 0.5); /* THINNER BORDER - changed from 2px to 1px */
          font-weight: 400;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }
        
        .tag:hover {
          background-color: rgba(8, 13, 16, 0.05);
          transform: translateY(-1px);
        }
        
        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .hover-overlay h3 {
            font-size: 1.75rem;
          }
        }
        
        @media (max-width: 768px) {
          .hover-overlay h3 {
            font-size: 1.6rem;
            margin-bottom: 16px;
          }
          
          .tag {
            font-size: 0.8rem;
            padding: 5px 18px;
            color: rgba(8, 13, 16, 0.5); /* Maintain consistent text color */
          }
        }
        
        @media (max-width: 640px) {
          .hover-overlay h3 {
            font-size: 1.4rem;
            margin-bottom: 14px;
          }
          
          .tag {
            padding: 4px 16px;
            border-width: 1.5px;
            color: rgba(8, 13, 16, 0.5); /* Maintain consistent text color */
          }
        }

        /* Desktop Layout (900px+) */
        .item-laptop {
          grid-column: 1;
          grid-row: 1;
          aspect-ratio: 1/1;
        }
        
        .item-lantern {
          grid-column: 2;
          grid-row: 1;
          aspect-ratio: 4/3;
          max-height: 100%;
          align-self: start;
        }
        
        .item-brochure {
          grid-column: 3;
          grid-row: 1;
          aspect-ratio: 1/1;
        }
        
        .item-packaging {
          grid-column: 1;
          grid-row: 2;
          aspect-ratio: 1/1;
        }
        
        .item-product {
          grid-column: 2;
          grid-row: 1 / span 2;
          align-self: end;
          margin-top: -10%;
          z-index: 1;
          height: 61%;
        }
        
        .item-website {
          grid-column: 3;
          grid-row: 2;
          aspect-ratio: 1/1;
        }
        
        .item-appgame {
          grid-column: 1 / span 3;
          grid-row: 3;
          aspect-ratio: 3/1;
        }
        
        .item-phone {
          grid-column: 1;
          grid-row: 4;
          aspect-ratio: 1/1;
        }
        
        .item-gogi {
          grid-column: 2;
          grid-row: 4;
          aspect-ratio: 1/1;
        }
        
        .item-band {
          grid-column: 3;
          grid-row: 4;
          aspect-ratio: 1/1;
        }

        /* Tablet Layout (768px - 900px) */
        @media (max-width: 900px) {
          .projects-container {
            gap: 10px;
          }
          
          .item-product {
            height: 55%;
            margin-top: -5%;
          }
          
          .image-container {
            padding: 14px;
          }
        }
        
        /* Small Tablet Layout (640px - 768px) */
        @media (max-width: 768px) {
          .projects-container {
            gap: 8px;
          }
          
          .item-lantern {
            aspect-ratio: 3/2;
          }
          
          .item-product {
            height: 50%;
          }
          
          .item-appgame {
            aspect-ratio: 16/6;
          }
          
          .image-container {
            padding: 18px;
          }
          
          .item-appgame .image-container {
            padding: 20px;
          }
        }

        /* Mobile Layout (480px - 640px) */
        @media (max-width: 640px) {
          .projects-container {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: min-content;
            gap: 8px;
            max-width: 450px;
            margin: 0 auto;
          }
          
          /* Change grid positioning for 2-column layout */
          .item-laptop { grid-column: 1; grid-row: 1; }
          .item-lantern { grid-column: 2; grid-row: 1; aspect-ratio: 1/1; max-height: none; }
          .item-brochure { grid-column: 1; grid-row: 2; }
          .item-packaging { grid-column: 2; grid-row: 2; }
          .item-product { 
            grid-column: 1; 
            grid-row: 3; 
            margin-top: 0; 
            height: auto; 
            aspect-ratio: 1/1;
            align-self: auto;
          }
          .item-website { grid-column: 2; grid-row: 3; }
          .item-appgame { grid-column: 1 / span 2; grid-row: 4; aspect-ratio: 2/1; }
          .item-phone { grid-column: 1; grid-row: 5; }
          .item-gogi { grid-column: 2; grid-row: 5; }
          .item-band { grid-column: 1 / span 2; grid-row: 6; aspect-ratio: 2/1; }
          
          .image-container {
            padding: 20px;
          }
          
          .item-appgame .image-container,
          .item-band .image-container {
            padding: 24px;
          }
          
          /* Limit item heights */
          .item-laptop,
          .item-lantern,
          .item-brochure,
          .item-packaging,
          .item-product,
          .item-website,
          .item-phone,
          .item-gogi {
            max-height: 160px;
          }
          
          .item-appgame,
          .item-band {
            max-height: 120px;
          }
        }
        
        /* Small Mobile Layout (below 640px) */
        @media (max-width: 640px) {
          .projects-container {
            grid-template-columns: 1fr;
            max-width: 90%;
            margin: 0 auto;
            gap: 20px;
          }
          
          /* Explicitly set grid positions */
          .item-laptop { grid-column: 1; grid-row: 1; }
          .item-lantern { grid-column: 1; grid-row: 2; }
          .item-brochure { grid-column: 1; grid-row: 3; }
          .item-packaging { grid-column: 1; grid-row: 4; }
          .item-product { grid-column: 1; grid-row: 5; margin-top: 0; align-self: auto; }
          .item-website { grid-column: 1; grid-row: 6; }
          .item-appgame { grid-column: 1; grid-row: 7; }
          .item-phone { grid-column: 1; grid-row: 8; }
          .item-gogi { grid-column: 1; grid-row: 9; }
          .item-band { grid-column: 1; grid-row: 10; }
          
          /* Make all items perfect squares */
          .item-laptop,
          .item-lantern,
          .item-brochure,
          .item-packaging,
          .item-product,
          .item-website,
          .item-phone,
          .item-gogi,
          .item-appgame,
          .item-band {
            width: 100%;
            aspect-ratio: 1/1 !important; /* Force perfect square */
            height: auto !important; /* Let width and aspect ratio determine height */
            max-height: none;
          }
          
          /* Remove special aspect ratios that would prevent squares */
          .item-appgame,
          .item-band {
            aspect-ratio: 1/1 !important; /* Override the rectangular shape */
          }
          
          .image-container {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;