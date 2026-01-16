import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  href,
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary:
      'bg-[var(--primary)] text-[var(--primary-fg)] shadow-lg hover:opacity-95',
    secondary:
      'bg-[var(--bg-muted)] text-[var(--fg)] border border-[var(--card-border)] hover:opacity-95',
    outline:
      'border-2 border-[var(--card-border)] text-[var(--fg)] hover:bg-[var(--bg-muted)]',
    ghost: 'text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-muted)]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;
  
  const MotionComponent = href ? motion.a : motion.button;
  
  return (
    <MotionComponent
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={classes}
      onClick={onClick}
      href={href}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default Button;
