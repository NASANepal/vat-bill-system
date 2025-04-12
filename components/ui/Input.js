export function Input({ value, onChange, placeholder = "", className = "", ...props }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border p-2 rounded w-full ${className}`}
      {...props}
    />
  );
}
