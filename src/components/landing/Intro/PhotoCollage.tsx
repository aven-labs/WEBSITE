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
      className={`grid grid-cols-2 gap-2 w-[300px] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {photos.map((photo, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg aspect-square"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            alt={`Weekend photo ${index + 1}`}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
