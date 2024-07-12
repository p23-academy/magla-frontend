const BigButton = ({
  className,
  text,
  onClick,
  type
}) => {
  return (
    <button
      className={`h-14 rounded p-2 bg-orange-400 text-xl font-bold ${className}`}
      onClick={onClick}
      type={type || "button"}
    >
      {text}
    </button>
  )
}

export default BigButton