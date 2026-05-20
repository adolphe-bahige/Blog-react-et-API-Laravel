function Title({ children, className }) {
  return (
    <div className="w-full bg-indigo-900 p-3 rounded-md text-white">
      <div className={`flex justify-between ${className}`}>{children}</div>
    </div>
  );
}

export default Title;
