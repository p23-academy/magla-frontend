const Button = ({
  className,
  text,
  onClick,
  type
}) => {
  return (
    <button
      className={`h-10 rounded p-2 bg-orange-400 font-bold ${className}`}
      onClick={onClick}
      type={type || "button"}
    >
      {text}
    </button>
  )
}

export default Button