const BigButton = ({
  className,
  text,
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      className={`h-14 rounded p-2 ${disabled ? "bg-gray-400" : "bg-orange-400"} text-xl font-bold ${className}`}
      onClick={onClick}
      type={type || "button"}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default BigButton