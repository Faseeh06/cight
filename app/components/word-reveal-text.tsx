"use client"

import { useRef } from "react"

interface WordRevealTextProps {
  text: string
  className?: string
}

export default function WordRevealText({ text, className = "" }: WordRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const formattedText = text.replace(/CightBrowserisyourgatewaytodigitalindependence/g, 
    "Cight Browser is your gateway to digital independence");
  const words = formattedText.split(" ")
  
  // Function to render each word, with special styling for 'Browser'
  const renderWords = () => {
    return words.map((word, index) => {
      // Check if the word is 'Browser' (could be part of a longer word like 'Browser.')
      if (word.toLowerCase().includes('browser')) {
        // Extract the Browser part
        const parts = word.split(/(Browser)/i);
        
        return (
          <span key={index} className="inline-block mr-2 text-white">
            {parts.map((part, pIndex) => 
              part.toLowerCase() === 'browser' ? 
                <span key={pIndex} className="wave-gradient-text">{part}</span> : 
                part
            )}
          </span>
        );
      }
      
      return (
        <span key={index} className="inline-block mr-2 text-white">
          {word}
        </span>
      );
    });
  };

  return (
    <div ref={containerRef} className={className}>
      {renderWords()}
    </div>
  )
}
