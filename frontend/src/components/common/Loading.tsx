const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-brand-navy mx-auto mb-4"></div>
        <h2 className="text-lg font-semibold text-brand-navy">Loading...</h2>
      </div>
    </div>
  );
};

export default Loading; 