import { useEffect, useRef } from 'react';

interface LazyVideoProps {
  src: string;
}

const LazyVideo = ({ src }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.src = src;
          }
          if (videoRef.current) {
            observer.unobserve(videoRef.current);
          }
        }
      });
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className="absolute top-0 left-0 w-full h-full object-cover scale-[1.2]"
    />
  );
};

export default LazyVideo;