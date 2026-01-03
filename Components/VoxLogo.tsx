
import React from 'react';

interface VoxLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const VoxLogo: React.FC<VoxLogoProps> = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-32 h-32",
    xl: "w-48 h-48"
  };

  const fontSizes = {
    sm: "text-[10px]",
    md: "text-[14px]",
    lg: "text-[32px]",
    xl: "text-[48px]"
  };

  const trainingSizes = {
    sm: "text-[4px]",
    md: "text-[5px]",
    lg: "text-[10px]",
    xl: "text-[14px]"
  };
  
  return (
    <div className={`relative ${sizes[size]} ${className} group shrink-0`}>
      {/* Main Circle */}
      <div className="absolute inset-0 bg-[#7B2CBF] rounded-full shadow-xl overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        {/* Glossy Overlay effect as seen in screenshot */}
        <div className="absolute top-0 left-0 w-full h-[55%] bg-white/10 rounded-b-[50%]" />
        
        {/* Logo Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white font-black tracking-tighter leading-none">
          <span className={`${fontSizes[size]} select-none font-sans`}>VOX</span>
          <span className={`${trainingSizes[size]} font-bold uppercase tracking-[0.3em] mt-[5%] opacity-90`}>TRAINING</span>
        </div>
      </div>
    </div>
  );
};

export default VoxLogo;