import React from 'react';

export const Phone: React.FC = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6.5 3.5L9 3l2 4-1.5 1.5a8.5 8.5 0 003 3L14 10l4 2 -.5 2.5c-.15.8-.75 1.4-1.55 1.55A10.5 10.5 0 013.95 6.05C4.1 5.25 4.7 4.65 5.5 4.5L6.5 3.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MapPin: React.FC = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M12 21s-5-4.2-5-9a5 5 0 0110 0c0 4.8-5 9-5 9z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="10"
      r="2"
      stroke="currentColor"
      strokeWidth="1.4"
    />
  </svg>
);

export const Mail: React.FC = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M5 7.5L12 12l7-4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Clock: React.FC = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="8"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M12 8v4l2 2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);