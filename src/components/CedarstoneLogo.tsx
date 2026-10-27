import React from 'react';

interface CedarstoneLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'footer';
  isDark?: boolean;
}

export const CedarstoneLogo: React.FC<CedarstoneLogoProps> = ({
  className = 'h-10 w-auto',
  variant = 'full',
  isDark = false
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official SVG Logo Asset */}
      <img
        src="/assets/aistudio/g6_bb46d686.svg"
        alt="Cedarstone Hospital Logo - Shield with medical cross"
        className={`h-full w-auto object-contain transition-opacity ${
          isDark ? 'brightness-110 contrast-125' : ''
        }`}
        loading="eager"
      />
      {variant === 'footer' && (
        <span className="sr-only">Cedarstone Hospital Nairobi</span>
      )}
    </div>
  );
};
