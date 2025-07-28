interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`max-w-6xl w-full mx-auto px-6 sm:px-8 md:px-14 lg:px-5  ${className}`}
    >
      {children}
    </div>
  );
}
