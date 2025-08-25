import React, { useEffect, useRef } from 'react';
import '../../styles/pixel-canvas.css';

interface PixelCanvasProps {
  gap?: number;
  speed?: number;
  colors?: string[];
  theme?: 'teal' | 'orange' | 'blue' | 'purple' | 'green' | 'pink';
  noFocus?: boolean;
}

const PixelCanvas: React.FC<PixelCanvasProps> = ({ 
  gap = 4, 
  speed = 30, 
  colors = [],
  theme = 'teal',
  noFocus = false 
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const createPixelGrid = () => {
      // Clear existing pixels
      canvas.innerHTML = '';
      
      const rect = canvas.getBoundingClientRect();
      const pixelSize = 8; // Base pixel size
      const totalGap = gap;
      
      // Calculate grid dimensions
      const cols = Math.floor((rect.width - totalGap) / (pixelSize + totalGap));
      const rows = Math.floor((rect.height - totalGap) / (pixelSize + totalGap));
      
      // Set CSS Grid
      canvas.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
      canvas.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
      canvas.style.gap = `${gap}px`;
      
      // Calculate center position
      const centerX = Math.floor(cols / 2);
      const centerY = Math.floor(rows / 2);
      
      // Color palette
      const defaultColors = theme === 'teal' ? ['#2DD4BF', '#5EEAD4', '#14B8A6'] :
                           theme === 'orange' ? ['#FF7849', '#FF8B61', '#FFB088'] :
                           theme === 'blue' ? ['#3B82F6', '#60A5FA', '#93C5FD'] :
                           theme === 'purple' ? ['#8B5CF6', '#A78BFA', '#C4B5FD'] :
                           theme === 'green' ? ['#10B981', '#34D399', '#6EE7B7'] :
                           ['#EC4899', '#F472B6', '#F9A8D4']; // pink
      
      const pixelColors = colors.length > 0 ? colors : defaultColors;
      
      // Create pixels
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const pixel = document.createElement('div');
          pixel.className = 'pixel';
          
          // Calculate distance from center for staggered animation
          const distance = Math.sqrt(Math.pow(col - centerX, 2) + Math.pow(row - centerY, 2));
          const delay = Math.min(Math.floor(distance), 10);
          pixel.setAttribute('data-delay', delay.toString());
          
          // Random color from palette
          const randomColor = pixelColors[Math.floor(Math.random() * pixelColors.length)];
          pixel.style.color = randomColor;
          
          // Add special classes for variety
          const rand = Math.random();
          if (rand > 0.85) {
            pixel.classList.add('bright');
          } else if (rand > 0.7) {
            pixel.classList.add('glow');
          } else if (rand < 0.15) {
            pixel.classList.add('dim');
          }
          
          // Mark center pixels
          if (Math.abs(col - centerX) <= 1 && Math.abs(row - centerY) <= 1) {
            pixel.classList.add('center');
          }
          
          // Random pulse animation
          if (Math.random() > 0.8) {
            pixel.classList.add('pulse');
          }
          
          canvas.appendChild(pixel);
        }
      }
    };

    // Initial creation
    createPixelGrid();
    
    // Recreate on resize
    const resizeObserver = new ResizeObserver(() => {
      createPixelGrid();
    });
    
    resizeObserver.observe(canvas);
    
    return () => {
      resizeObserver.disconnect();
    };
  }, [gap, speed, colors, theme]);

  return (
    <div 
      ref={canvasRef}
      className={`pixel-canvas ${noFocus ? 'no-focus' : ''}`}
      data-theme={theme}
      data-gap={gap}
      data-speed={speed}
    />
  );
};

export default PixelCanvas;
