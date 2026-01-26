import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'full' | 'compact';
  className?: string;
}

const Logo = ({ variant = 'full', className = '' }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      {/* Logo image */}
      <img
        src="/logo.png"
        alt="ValueData"
        className="h-10 w-auto"
      />

      {/* Texto ValueData */}
      {variant === 'full' && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900 leading-tight">
            Value <span className="text-blue-600">Data</span>
          </span>
          <span className="text-xs text-gray-500 leading-tight tracking-wide">
            AI ANALYTICS
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
