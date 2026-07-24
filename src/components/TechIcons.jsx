import React from 'react';

// Custom clean SVG icon component registry for tech stack
export const TechIcon = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case 'React.js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2" fill="#00d8ff" />
          <g stroke="#00d8ff" strokeWidth="1.2">
            <ellipse cx="12" cy="12" rx="9" ry="3.5" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );

    case 'Next.js':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="64" fill="black" />
          <path d="M100.8 108.8L46.4 38.4H36.8V89.6H46.4V52.8L93.6 112C96.16 111.04 98.56 110.08 100.8 108.8Z" fill="white" />
          <path d="M83.2 38.4H92.8V89.6H83.2V38.4Z" fill="white" />
        </svg>
      );

    case 'Tailwind CSS':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 6C9.33333 6 7.66667 7.33333 7 10C8 8.66667 9.16667 8.33333 10.5 9C11.5 9.5 12.25 10.25 13.1 11.1C14.5 12.5 16.1 14.1 20 14C22.6667 14 24.3333 12.6667 25 10C24 11.3333 22.8333 11.6667 21.5 11C20.5 10.5 19.75 9.75 18.9 8.9C17.5 7.5 15.9 5.9 12 6ZM7 14C4.33333 14 2.66667 15.3333 2 18C3 16.6667 4.16667 16.3333 5.5 17C6.5 17.5 7.25 18.25 8.1 19.1C9.5 20.5 11.1 22.1 15 22C17.6667 22 19.3333 20.6667 20 18C19 19.3333 17.8333 19.6667 16.5 19C15.5 18.5 14.75 17.75 13.9 16.9C12.5 15.5 10.9 13.9 7 14Z" fill="#38BDF8" />
        </svg>
      );

    case 'JavaScript (ES6+)':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M14.5 18C15.5 18 16.5 17.5 16.5 16.2C16.5 15 15.5 14.5 14 14C12.5 13.5 12 13 12 12.2C12 11.5 12.8 11 13.8 11C14.8 11 15.4 11.4 15.8 12.2L17.2 11.3C16.5 10.1 15.4 9.5 13.8 9.5C12 9.5 10.5 10.6 10.5 12.3C10.5 13.8 11.5 14.3 13 14.8C14.5 15.3 15 15.8 15 16.5C15 17.2 14.2 17.8 13 17.8C11.8 17.8 11 17.2 10.4 16.2L9 17.2C9.8 18.7 11.2 19.5 13 19.5" fill="black" />
          <path d="M8 18V9.5H6.5V16.3C6 16.2 5.5 16 5.2 15.7L4.2 16.8C4.9 17.5 6.2 18 7.5 18" fill="black" />
        </svg>
      );

    case 'Redux':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="#764ABC" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 6L17 9V15L12 18L7 15V9L12 6Z" fill="#764ABC" />
        </svg>
      );

    case 'HTML5 & CSS3':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z" fill="#E34F26" />
          <path d="M12 5V19.6L17 18.1L18.2 5H12Z" fill="#EF652A" />
          <path d="M12 8H8L8.3 11H12V13.5H8.6L8.8 16L12 17V19.5L6.5 18L5.5 7H12V8Z" fill="white" />
        </svg>
      );

    case 'Node.js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7.5V18.5L12 24L22 18.5V7.5L12 2Z" fill="#5FA04E" />
          <path d="M12 4.5L19.5 8.7V17.3L12 21.5L4.5 17.3V8.7L12 4.5Z" fill="#68A063" />
        </svg>
      );

    case 'Express.js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#1E293B" />
          <text x="12" y="16" fontSize="11" fontWeight="bold" fill="#F8FAFC" textAnchor="middle" fontFamily="monospace">ex</text>
        </svg>
      );

    case 'MongoDB':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C11.5 5 9 8 9 12C9 16 11.5 19.5 12 22C12.5 19.5 15 16 15 12C15 8 12.5 5 12 2Z" fill="#47A248" />
        </svg>
      );

    case 'Python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M11.8 2C6.8 2 7.2 4.2 7.2 4.2V6.4H12V7H5.2C5.2 7 2 6.6 2 11.5C2 16.4 4.8 16.2 4.8 16.2H6.4V14.1C6.4 14.1 6.3 11.6 8.9 11.6H13.6C13.6 11.6 15.9 11.6 15.9 9.3V4.3C15.9 4.3 16.4 2 11.8 2Z" fill="#3776AB" />
          <path d="M12.2 22C17.2 22 16.8 19.8 16.8 19.8V17.6H12V17H18.8C18.8 17 22 17.4 22 12.5C22 7.6 19.2 7.8 19.2 7.8H17.6V9.9C17.6 9.9 17.7 12.4 15.1 12.4H10.4C10.4 12.4 8.1 12.4 8.1 14.7V19.7C8.1 19.7 7.6 22 12.2 22Z" fill="#FFD43B" />
        </svg>
      );

    case 'Django':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#0C4B33" />
          <text x="12" y="16" fontSize="13" fontWeight="extrabold" fill="#44B78B" textAnchor="middle" fontFamily="sans-serif">dj</text>
        </svg>
      );

    case 'Redis':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M2 7L12 2L22 7V17L12 22L2 17V7Z" fill="#DC382D" />
          <path d="M6 9.5L12 6.5L18 9.5V14.5L12 17.5L6 14.5V9.5Z" fill="#A41E11" />
        </svg>
      );

    case 'Java':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C10 6 7 8 7 11C7 14 9.2 16 12 16C14.8 16 17 14 17 11C17 8 14 6 12 2Z" fill="#5382A1" />
          <path d="M5 19C8 21 16 21 19 19" stroke="#E76F00" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'SQL / PostgreSQL':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 3C7 3 3 5 3 7.5V16.5C3 19 7 21 12 21C17 21 21 19 21 16.5V7.5C21 5 17 3 12 3Z" fill="#336791" />
          <path d="M3 7.5C3 10 7 12 12 12C17 12 21 10 21 7.5" stroke="#699BEC" strokeWidth="1.5" />
          <path d="M3 12C3 14.5 7 16.5 12 16.5C17 16.5 21 14.5 21 12" stroke="#699BEC" strokeWidth="1.5" />
        </svg>
      );

    case 'Docker':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M3 13.5C3 13.5 4.5 12.5 8 12.5C12 12.5 14 14.5 17.5 14.5C20 14.5 21.5 13.5 21.5 13.5V16C21.5 19 18 20.5 12 20.5C6 20.5 3 19 3 16V13.5Z" fill="#2496ED" />
          <rect x="5" y="9" width="3" height="2.5" rx="0.5" fill="#2496ED" />
          <rect x="9" y="9" width="3" height="2.5" rx="0.5" fill="#2496ED" />
          <rect x="13" y="9" width="3" height="2.5" rx="0.5" fill="#2496ED" />
          <rect x="9" y="5.5" width="3" height="2.5" rx="0.5" fill="#2496ED" />
        </svg>
      );

    case 'Kubernetes':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#326CE5" strokeWidth="2" />
          <path d="M12 3V21M3 12H21M5.5 5.5L18.5 18.5M18.5 5.5L5.5 18.5" stroke="#326CE5" strokeWidth="1.5" />
        </svg>
      );

    case 'AWS (Amazon Web Services)':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M6 17C10 20 15 20 18 17" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
          <path d="M17 15.5L19 17.5L16.5 18.5" fill="#FF9900" />
          <text x="12" y="12" fontSize="9" fontWeight="extrabold" fill="#FF9900" textAnchor="middle" fontFamily="sans-serif">aws</text>
        </svg>
      );

    case 'Git & GitHub':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M19 13C17.9 13 17 13.9 17 15C17 15.8 17.5 16.5 18.2 16.8C18.1 17.5 17.7 18.3 17 19C16.2 19.8 15.2 20 14 20C12.8 20 12 19.5 11.5 18.5C12.4 18 13 17.1 13 16C13 14.9 12.1 14 11 14C9.9 14 9 14.9 9 16C9 17.1 9.7 18 10.6 18.4C10.2 19.8 9.3 20.8 7.8 21.4C7.2 21.6 6.5 21.7 5.8 21.7" stroke="#F05032" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="11" cy="16" r="2" fill="#F05032" />
          <circle cx="17" cy="7" r="2" fill="#F05032" />
        </svg>
      );

    case 'Linux / Bash':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#000" />
          <path d="M6 8L10 12L6 16" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 16H17" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'Vite':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 6L12 22L22 6L12 2Z" fill="#646CFF" />
          <path d="M12 4L19 7L12 18L5 7L12 4Z" fill="#FFC400" />
        </svg>
      );

    case 'Postman':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path d="M8 12L16 8L13 16L11 13L8 12Z" fill="white" />
        </svg>
      );

    case 'Vercel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L24 22H0L12 1Z" fill="white" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
  }
};

export default TechIcon;
