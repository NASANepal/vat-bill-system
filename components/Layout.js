export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <div className="max-w-4xl mx-auto">{children}</div>
    </div>
  );
}
