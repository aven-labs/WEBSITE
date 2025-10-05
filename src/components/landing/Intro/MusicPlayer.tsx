import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
} from "lucide-react";
import NCSImage from "@/styles/images/ncs.jpg";

interface MusicPlayerProps {
  isVisible?: boolean;
}

export default function MusicPlayer({ isVisible = true }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const updateProgress = () => {
    if (audioRef.current && progressRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      progressRef.current.style.width = `${progress}%`;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current?.duration || 0);
      });
    }
  }, []);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - bounds.left) / bounds.width;
    if (audioRef.current) {
      audioRef.current.currentTime = percent * duration;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`w-[320px] relative text-foreground transition-opacity duration-300 `}
    >
      <div className="overflow-hidden flex-shrink-0 mb-6">
        <img
          src={NCSImage.src}
          alt="Album cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 min-w-0">
          <p className="font-medium truncate">On & On</p>
          <p className="text-xs truncate">
            Cartoon, Daniel Levi, Jéja
          </p>
        </div>
      </div>

      <div
        className="h-1 bg-background/10 rounded-full overflow-hidden cursor-pointer mb-2"
        onClick={handleProgressClick}
      >
        <div
          ref={progressRef}
          className="h-full bg-background rounded-full w-0 transition-all duration-100"
        />
      </div>

      <div className="flex justify-between text-xs text-foreground/60 mb-4">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="flex items-center justify-between px-4">
        <button className="text-foreground/60 hover:text-foreground transition-colors">
          <Shuffle className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-4">
          <button className="text-foreground/60 hover:text-foreground transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/90 transition-colors group"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-background" />
            ) : (
              <Play className="w-5 h-5 text-background ml-0.5" />
            )}
          </button>
          <button className="text-foreground/60 hover:text-foreground transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
        <button className="text-foreground/60 hover:text-foreground transition-colors">
          <Repeat className="w-4 h-4" />
        </button>
      </div>

      <audio
        ref={audioRef}
        src="/music/song.mp3"
        onTimeUpdate={(e) => {
          updateProgress();
          setCurrentTime(e.currentTarget.currentTime);
        }}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}
