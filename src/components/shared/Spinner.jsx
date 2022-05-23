export const Spinner = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <svg viewBox="25 25 50 50" className="spinner">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
};
