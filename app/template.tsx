export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* Remove any Footer component if it exists here */}
    </>
  );
} 