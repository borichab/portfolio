export const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl border p-4 shadow-sm ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);
