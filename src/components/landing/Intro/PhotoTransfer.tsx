import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Check } from "lucide-react";

const PhotoTransfer: React.FC = () => {
  const [transferProgress, setTransferProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [visiblePhotos, setVisiblePhotos] = useState<number[]>([]);

  // Photo IDs for different images from picsum
  const photoIds = [237, 433, 1074, 577, 582, 659];

  useEffect(() => {
    // Animate transfer progress
    const progressInterval = setInterval(() => {
      setTransferProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Show photos one by one in bento grid
    photoIds.forEach((_, index) => {
      setTimeout(() => {
        setVisiblePhotos((prev) => [...prev, index]);
      }, index * 400);
    });

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="w-[280px] relative text-background">
      {/* Bento Grid - 2x3 layout */}
      <div className="grid grid-cols-3 gap-1.5 mb-3 aspect-[3/2]">
        {photoIds.map((photoId, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: visiblePhotos.includes(index) ? 1 : 0,
              scale: visiblePhotos.includes(index) ? 1 : 0.8,
            }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className={`relative bg-background/10 rounded-md overflow-hidden ${
              index === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            {visiblePhotos.includes(index) && (
              <img
                src={`https://picsum.photos/300/300?random=${photoId}`}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Transfer icon */}
      <motion.div
        className="absolute top-2 right-2"
        animate={{
          y: isComplete ? 0 : [0, -4, 0],
        }}
        transition={{
          duration: 1,
          repeat: isComplete ? 0 : Infinity,
          ease: "easeInOut",
        }}
      >
        {isComplete ? (
          <Check className="w-5 h-5 text-background" />
        ) : (
          <Upload className="w-5 h-5 text-background/60" />
        )}
      </motion.div>

      {/* Progress Bar */}
      <div className="h-1 bg-background/10 rounded-full overflow-hidden mb-2">
        <motion.div
          className="h-full bg-background rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${transferProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Status Text */}
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium truncate">
          {isComplete ? "Transfer Complete" : "Transferring..."}
        </span>
        <span className="text-background/60 text-xs">
          {isComplete ? `${photoIds.length} photos` : `${Math.round(transferProgress)}%`}
        </span>
      </div>
    </div>
  );
};

export default PhotoTransfer;
