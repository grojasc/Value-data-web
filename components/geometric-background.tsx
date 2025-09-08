interface GeometricBackgroundProps {
  variant?: 'default' | 'subtle' | 'minimal';
  className?: string;
}

export default function GeometricBackground({ 
  variant = 'default', 
  className = '' 
}: GeometricBackgroundProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'subtle':
        return {
          opacity: 'opacity-20',
          blur: 'blur-2xl',
          size: 'small'
        };
      case 'minimal':
        return {
          opacity: 'opacity-10',
          blur: 'blur-3xl',
          size: 'tiny'
        };
      default:
        return {
          opacity: 'opacity-30',
          blur: 'blur-3xl',
          size: 'normal'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`absolute inset-0 pointer-events-none ${styles.opacity} ${className}`}>
      {/* Large gradient blobs */}
      {styles.size !== 'tiny' && (
        <>
          <div className={`absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-accent-500/40 to-transparent rounded-full ${styles.blur}`} style={{ animation: 'float 8s ease-in-out infinite' }}></div>
          <div className={`absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-bl from-secondary-500/40 to-transparent rounded-full ${styles.blur}`} style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '2s' }}></div>
          <div className={`absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-tr from-primary-400/20 to-transparent rounded-full ${styles.blur}`} style={{ animation: 'float 12s ease-in-out infinite', animationDelay: '4s' }}></div>
        </>
      )}

      {/* Floating geometric shapes */}
      {styles.size !== 'minimal' && (
        <>
          <div className="absolute top-20 left-1/4 w-3 h-3 bg-accent-400 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/3 left-1/6 w-4 h-4 bg-primary-300 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
          
          {/* Geometric lines and shapes */}
          <svg className="absolute top-1/2 left-10 w-32 h-32 text-accent-400/30 animate-pulse" fill="none" viewBox="0 0 128 128">
            <polygon points="64,10 90,54 38,54" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <svg className="absolute bottom-20 right-20 w-24 h-24 text-secondary-400/30 animate-pulse" fill="none" viewBox="0 0 96 96" style={{ animationDelay: '1s' }}>
            <rect x="20" y="20" width="56" height="56" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <svg className="absolute top-1/4 right-1/3 w-20 h-20 text-primary-400/20 animate-pulse" fill="none" viewBox="0 0 80 80" style={{ animationDelay: '2s' }}>
            <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </>
      )}

      {/* Minimal dots for minimal variant */}
      {styles.size === 'tiny' && (
        <>
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-accent-400/50 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-secondary-400/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/2 left-2/3 w-1 h-1 bg-primary-400/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </>
      )}
    </div>
  );
}