import React from 'react';

interface TechIconProps {
  id: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ id, className = "w-5 h-5" }) => {
  switch (id) {
    case 'c':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" stroke="#3B82F6" strokeWidth="1.5" />
          <path d="M15 9.5a4 4 0 1 0 0 5" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'java':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M7 19c3 1.5 7 1.5 10 0M8 21c2.5 1 5.5 1 8 0" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
          <path d="M13 3c-1 3-3 4-1 7-2-2-1-4 1-7z" fill="#EF4444" opacity="0.9"/>
          <path d="M15 6c-1 2-2 3-0.5 5-1.5-1.5-1-3 0.5-5z" fill="#F97316" opacity="0.9"/>
          <path d="M5 14c4 1 10 1 14 0" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'dsa':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2">
          <circle cx="12" cy="5" r="2.5" fill="#8B5CF6"/>
          <circle cx="6" cy="17" r="2.5" fill="#8B5CF6"/>
          <circle cx="18" cy="17" r="2.5" fill="#8B5CF6"/>
          <line x1="10.5" y1="7" x2="7.5" y2="15" stroke="#A78BFA" strokeWidth="1.5"/>
          <line x1="13.5" y1="7" x2="16.5" y2="15" stroke="#A78BFA" strokeWidth="1.5"/>
        </svg>
      );
    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="20" height="20" x="2" y="2" rx="3" fill="#FACC15" />
          <path d="M8 12v4.5a2 2 0 0 1-2 2H5M13 18.5c1.5 0 2.5-.7 2.5-1.8 0-2.2-3-1.8-3-3.2 0-.8.7-1.5 2-1.5 1 0 1.8.5 2 1" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'html':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 3l1.5 16.5L12 22l6.5-2.5L20 3H4z" fill="#E44D26"/>
          <path d="M12 4.5v15.5l5.2-2L18.4 4.5H12z" fill="#F16529"/>
          <path d="M12 8H8.5l.3 3h3.2v-3zm0 5H8.8l.2 2.5 3 .8v-2.3l-1.5-.4-.1-1.1h1.6v.5z" fill="#fff"/>
          <path d="M12 8h3.5l-.3 3H12v-3zm0 5h3.2l-.3 3-2.9.8v-2.3l1.5-.4.1-1.1H12v-1z" fill="#EBEBEB"/>
        </svg>
      );
    case 'css':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 3l1.5 16.5L12 22l6.5-2.5L20 3H4z" fill="#1572B6"/>
          <path d="M12 4.5v15.5l5.2-2L18.4 4.5H12z" fill="#33A9DC"/>
          <path d="M12 7.5H8.2l.2 2.5H12v-2.5zm0 4.5H8.6l.3 3.5 3.1.8v-2.3l-1.5-.4-.1-1.1h1.6v-.5z" fill="#fff"/>
        </svg>
      );
    case 'springboot':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#6DB33F"/>
          <path d="M12 6a6 6 0 1 0 5 9.3l-2.2-1.3a3.5 3.5 0 1 1-2.8-5.5V6z" fill="#fff"/>
          <circle cx="12" cy="12" r="2" fill="#6DB33F"/>
        </svg>
      );
    case 'nodejs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z" fill="#339933"/>
          <path d="M12 6l5 3v6l-5 3-5-3V9l5-3z" stroke="#fff" strokeWidth="1.5"/>
        </svg>
      );
    case 'react':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
        </svg>
      );
    case 'nextjs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#000" stroke="#fff" strokeWidth="1.5"/>
          <path d="M9 7.5v9m0-9l7 9.5m0-9.5v5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="6" rx="8" ry="3" fill="#00758F"/>
          <path d="M4 6v5c0 1.6 3.6 3 8 3s8-1.4 8-3V6" stroke="#00758F" strokeWidth="1.5"/>
          <path d="M4 11v5c0 1.6 3.6 3 8 3s8-1.4 8-3v-5" stroke="#00758F" strokeWidth="1.5"/>
          <path d="M14 9c2 1 4 2 4 4" stroke="#F29111" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'oracle':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="5" width="20" height="14" rx="7" fill="#F80000"/>
          <rect x="5.5" y="8" width="13" height="8" rx="4" fill="#0B0F19"/>
        </svg>
      );
    case 'mongodb':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C10.5 4 6 9 6 13.5c0 4.2 3.2 7.5 6 8.5 2.8-1 6-4.3 6-8.5C18 9 13.5 4 12 2z" fill="#47A248"/>
          <path d="M12 2.5v18c0-.5.5-1 1-1.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'supabase':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M13 2.5L4 14.5h7.5L9 22.5 20 9.5h-8l3-7z" fill="#3ECF8E"/>
        </svg>
      );
    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M21.5 10.5l-8-8a2.1 2.1 0 0 0-3 0l-8 8a2.1 2.1 0 0 0 0 3l8 8a2.1 2.1 0 0 0 3 0l8-8a2.1 2.1 0 0 0 0-3z" fill="#F05032"/>
          <circle cx="12" cy="12" r="2" fill="#fff"/>
          <circle cx="8" cy="8" r="1.5" fill="#fff"/>
          <line x1="8" y1="8" x2="12" y2="12" stroke="#fff" strokeWidth="1.5"/>
        </svg>
      );
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    case 'postman':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF6C37"/>
          <path d="M8 12l8-5-3 5 3 5-8-5z" fill="#fff"/>
        </svg>
      );
    default:
      return (
        <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-primary-light font-mono text-xs">
          &lt;&gt;
        </div>
      );
  }
};
