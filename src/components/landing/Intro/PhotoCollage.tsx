import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface PhotoCollageProps {
  isVisible: boolean;
}

export default function PhotoCollage({ isVisible }: PhotoCollageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Sample photos (you can replace these with actual API calls)
  const photos = [
    'https://source.unsplash.com/random/300x300?selfie',
    'https://source.unsplash.com/random/300x300?portrait',
    'https://source.unsplash.com/random/300x300?person',
    'https://source.unsplash.com/random/300x300?face'
  ];

  useEffect(() => {
    if (isVisible && containerRef.current) {
      // Animate photos appearing
      gsap.fromTo(
        containerRef.current.children,
        {
          opacity: 0,
          scale: 0.8,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.2)",
        }
      );
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col sm:grid sm:grid-cols-2 gap-1.5 sm:gap-2 w-full sm:w-[240px] md:w-[300px] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {photos.map((photo, index) => (
        <div
          key={index}
          className="flex sm:block overflow-hidden rounded-md sm:rounded-lg h-16 sm:h-auto sm:aspect-square"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            alt={`Weekend photo ${index + 1}`}
            className="w-16 sm:w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 flex-shrink-0"
          />
          <div className="flex-1 flex items-center px-3 sm:hidden bg-muted/20">
            <span className="text-xs text-muted-foreground">Photo {index + 1}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
