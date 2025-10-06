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
};

// Simplified project data
const projects: Project[] = [
  { id: '1', title: 'Laptop', image: '/projects/1.png', color: '#3A486F', link: '/projekti/laptop' },
  { id: '2', title: 'Lantern', image: '/projects/2.png', color: '#222222', link: '/projekti/lantern' },
  { id: '3', title: 'Brochure', image: '/projects/3.png', color: '#CDCBC4', link: '/projekti/brochure' },
  { id: '4', title: 'Packaging', image: '/projects/4.png', color: '#B1B1B1', link: '/projekti/packaging' },
  { id: '5', title: 'Product', image: '/projects/5.png', color: '#E9E9E9', link: '/projekti/product' },
  { id: '6', title: 'Website', image: '/projects/6.png', color: '#FFFFFF', link: '/projekti/website' },
  { id: '7', title: 'AppGame', image: '/projects/7.png', color: '#4AAE31', link: '/projekti/app-game' },
  { id: '8', title: 'Phone', image: '/projects/8.png', color: '#F2A900', link: '/projekti/phone' },
  { id: '9', title: 'Gogi', image: '/projects/9.png', color: '#F1E6F2', link: '/projekti/gogi' },
  { id: '10', title: 'Band', image: '/projects/10.png', color: '#B964CF', link: '/projekti/band' },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="bg-[#080D10] py-12 sm:py-16 px-3 sm:px-4 md:px-8">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-[#FFBD00] text-[clamp(2rem,6vw,5rem)] font-extrabold mb-6 sm:mb-8 md:mb-10 text-center">
          PROJEKTI
        </h2>
        
        <div className="projects-container">
          {/* First row */}
          <div className="item-laptop">
            <Link href={projects[0].link} className="project-item" style={{ backgroundColor: projects[0].color }}>
              <div className="image-container">
                <Image src={projects[0].image} alt={projects[0].title} fill priority className="object-contain" />
              </div>
            </Link>
          </div>
          
          <div className="item-lantern">
            <Link href={projects[1].link} className="project-item" style={{ backgroundColor: projects[1].color }}>
              <div className="image-container">
                <Image src={projects[1].image} alt={projects[1].title} fill priority className="object-contain" />
              </div>
            </Link>
          </div>
          
          <div className="item-brochure">
            <Link href={projects[2].link} className="project-item" style={{ backgroundColor: projects[2].color }}>
              <div className="image-container">
                <Image src={projects[2].image} alt={projects[2].title} fill priority className="object-contain" />
              </div>
            </Link>
          </div>
          
          {/* Second row */}
          <div className="item-packaging">
            <Link href={projects[3].link} className="project-item" style={{ backgroundColor: projects[3].color }}>
              <div className="image-container">
                <Image src={projects[3].image} alt={projects[3].title} fill className="object-contain" />
              </div>
            </Link>
          </div>
          
          <div className="item-product">
            <Link href={projects[4].link} className="project-item" style={{ backgroundColor: projects[4].color }}>
              <div className="image-container">
                <Image src={projects[4].image} alt={projects[4].title} fill className="object-contain" />
              </div>
            </Link>
          </div>
          
          <div className="item-website">
            <Link href={projects[5].link} className="project-item" style={{ backgroundColor: projects[5].color }}>
              <div className="image-container">
                <Image src={projects[5].image} alt={projects[5].title} fill className="object-contain" />
              </div>
            </Link>
          </div>
          
          {/* Third row */}
          <div className="item-appgame">
            <Link href={projects[6].link} className="project-item" style={{ backgroundColor: projects[6].color }}>
              <div className="image-container">
                <Image src={projects[6].image} alt={projects[6].title} fill className="object-contain" />
              </div>
            </Link>
          </div>
          
          {/* Fourth row */}
          <div className="item-phone">
            <Link href={projects[7].link} className="project-item" style={{ backgroundColor: projects[7].color }}>
              <div className="image-container">
                <Image src={projects[7].image} alt={projects[7].title} fill className="object-contain" />
              </div>
            </Link>
          </div>
          
          <div className="item-gogi">
            <Link href={projects[8].link} className="project-item" style={{ backgroundColor: projects[8].color }}>
              <div className="image-container">
                <Image src={projects[8].image} alt={projects[8].title} fill className="object-contain" />
              </div>
            </Link>
          </div>
          
          <div className="item-band">
            <Link href={projects[9].link} className="project-item" style={{ backgroundColor: projects[9].color }}>
              <div className="image-container">
                <Image src={projects[9].image} alt={projects[9].title} fill className="object-contain" />
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
        }
        
        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 12px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .image-container img {
          object-fit: contain !important;
          max-width: 100%;
          max-height: 100%;
          margin: 0 auto; /* Horizontal centering */
          position: relative !important; /* Override Next.js Image absolute positioning */
          height: auto !important; /* Let height adjust automatically */
          width: auto !important; /* Let width adjust automatically */
          max-height: 100% !important;
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
            max-width: 100%; /* Changed from 280px to take full width */
            margin: 0 auto;
            gap: 20px; /* Increased gap for better separation */
          }
          
          /* Explicitly set grid positions */
          .item-laptop { grid-column: 1; grid-row: 1; }
          .item-lantern { grid-column: 1; grid-row: 2; }
          .item-brochure { grid-column: 1; grid-row: 3; }
          .item-packaging { grid-column: 1; grid-row: 4; }
          .item-product { 
            grid-column: 1; 
            grid-row: 5;
            margin-top: 0;
            align-self: auto;
          }
          .item-website { grid-column: 1; grid-row: 6; }
          .item-appgame { grid-column: 1; grid-row: 7; }
          .item-phone { grid-column: 1; grid-row: 8; }
          .item-gogi { grid-column: 1; grid-row: 9; }
          .item-band { grid-column: 1; grid-row: 10; }
          
          /* Make all items much taller */
          .item-laptop,
          .item-lantern,
          .item-brochure,
          .item-packaging,
          .item-product,
          .item-website,
          .item-phone,
          .item-gogi {
            height: 520px; /* Significantly increased height */
            aspect-ratio: auto;
          }
          
          .item-appgame,
          .item-band {
            height: 520px; /* Increased height for wide items */
            aspect-ratio: auto;
          }
          
          .image-container {
            padding: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;