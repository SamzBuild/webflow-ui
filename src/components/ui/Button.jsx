const Button = ({ text, variant = "purple" }) => {
  const variation = {
    purple:
      "bg-primary text-white inline-block duration-1000 transition-transform hover:scale-90 hover:text-primary hover:bg-transparent hover:border-primary hover:border",
    black: "text-neutral-500",
  };
  return (
    <button
      className={`text-md cursor-pointer rounded-md px-8 py-2 ${variation[variant]}`}
    >
      {text}
    </button>
  );
};

export default Button;
screenX;
