

// Reusable premium image component with dark overlay and optimized loading
export default function PremiumImage({ 
  src, 
  alt, 
  className = '', 
  rounded = true,
  overlay = true,
  aspectRatio = 'aspect-[4/3]',
  priority = false,
}) {
  // Convert to WebP if possible (for Unsplash images)
  const getOptimizedSrc = (originalSrc) => {
    if (originalSrc.includes('images.unsplash.com')) {
      // Add WebP format parameter for Unsplash images
      return `${originalSrc}&fm=webp`;
    }
    return originalSrc;
  };

  return (
    <div className={`relative overflow-hidden ${rounded ? 'rounded-card' : ''} ${aspectRatio} ${className}`}>
      <img
        src={getOptimizedSrc(src)}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="w-full h-full object-cover transition-opacity duration-300"
        onLoad={(e) => {
          e.target.style.opacity = '1';
        }}
        onError={(e) => {
          // Fallback to original source if WebP fails
          if (src.includes('images.unsplash.com')) {
            e.target.src = src;
          }
        }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-bg-page/30" />
      )}
    </div>
  );
}
