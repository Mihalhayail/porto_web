const Button = ({ children, variation, ...props }) => (
  <button
    {...props}
    className={`title mr-3  rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out ${
      variation === "primary"
        ? "bg-teal-700 hover:bg-transparent border-transparent hover:border-teal-700 border-2 text-gray-100 hover:text-teal-700 box-border"
        : "transparent border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-gray-100 box-border"
    }`}
  >
    {children}
  </button>
);

export default Button;
