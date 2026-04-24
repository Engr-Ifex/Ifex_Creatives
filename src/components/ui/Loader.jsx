const Loader = () => {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black">
      
      {/* Spinner */}
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#5CBF0D] border-t-transparent" />

      {/* Optional text */}
      <p className="mt-4 text-sm text-white/60 animate-pulse">
        Loading experience...
      </p>
    </div>
  );
};

export default Loader;