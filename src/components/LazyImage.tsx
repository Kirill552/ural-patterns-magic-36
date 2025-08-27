import { useState, useRef, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
  onLoad?: () => void;
  onError?: () => void;
  width?: number;
  height?: number;
  sizes?: string;
  srcSet?: string;
  webpSrcSet?: string;
  avifSrcSet?: string;
}

export const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  placeholderClassName = "",
  onLoad,
  onError,
  width,
  height,
  sizes,
  srcSet,
  webpSrcSet,
  avifSrcSet
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px"
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Preserve layout to reduce CLS if width/height provided
  const containerStyle = width && height ? { aspectRatio: `${width} / ${height}` } : undefined;

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={containerStyle}>
      {!isLoaded && !hasError && (
        <Skeleton className={`w-full h-full absolute inset-0 ${placeholderClassName}`} />
      )}
      
      {isInView && (
        <picture>
          {avifSrcSet && <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />}
          {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`
            w-full h-full object-cover transition-opacity duration-300
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            ${hasError ? 'hidden' : ''}
          `}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
          width={width}
          height={height}
          sizes={sizes}
          srcSet={srcSet}
        />
        </picture>
      )}

      {hasError && (
        <div className={`
          w-full h-full flex items-center justify-center bg-muted text-muted-foreground
          ${placeholderClassName}
        `}>
          <div className="text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="text-sm">Изображение не загружено</div>
          </div>
        </div>
      )}
    </div>
  );
};