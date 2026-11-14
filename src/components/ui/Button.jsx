const Button = ({ text, style, variant = "purple" }) => {
  const variation = {
    purple: "bg-primary text-white hover:bg-primary/90",
    black: "text-neutral-500 hover:text-primary",
  };
  return (
    <button
      className={`text-md ${style} inline-block cursor-pointer rounded-md px-8 py-2 transition-transform active:scale-95 ${variation[variant]}`}
    >
      {text}
    </button>
  );
};

export default Button;
