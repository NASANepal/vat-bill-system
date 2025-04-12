export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`p-4 border rounded shadow bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
