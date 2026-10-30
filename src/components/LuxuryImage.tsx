import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface LuxuryImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  categoryTag?: string;
}

export const LuxuryImage: React.FC<LuxuryImageProps> = ({
  src,
  alt = 'AK Makeover Studio Artistry',
  fallbackText,
  categoryTag,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#FDF2F4] via-[#F7EBEB] to-[#EED9DC] border border-[#EAC4C8]/50 overflow-hidden ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5838B_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 w-12 h-12 rounded-full bg-white/80 shadow-sm flex items-center justify-center text-[#B76E79] mb-3 border border-[#C5838B]/30">
          <Sparkles className="w-6 h-6 stroke-[1.5]" />
        </div>
        <span className="relative z-10 font-serif text-sm font-medium text-[#4A282D] text-center max-w-[85%] line-clamp-2">
          {fallbackText || alt}
        </span>
        {categoryTag && (
          <span className="relative z-10 mt-2 text-[11px] tracking-wider uppercase text-[#8A4C54] font-medium">
            AK Makeover Studio
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#F5ECEE] animate-pulse flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-[#C5838B] opacity-50" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
          isLoading ? 'opacity-0 scale-98' : 'opacity-100 scale-100'
        }`}
        {...props}
      />
    </div>
  );
};
