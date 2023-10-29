const Button = ({ label, color }) => {
  return (
    <button
      className={`${color} outline-1 border border-primary  text-color-1 font-bold tracking-wider uppercase px-6 py-4 md:px-6 md:py-4  rounded-full text-[10px] md:text-sm`}
    >
      {label}
    </button>
  );
};

export default Button;
