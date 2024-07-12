const BigFormInput = ({
  name,
  label,
  required,
  type,
  initialValue
}) => {
  return (
    <div className={"flex gap-2 w-full"}>
      <label className={"w-40 text-2xl"} htmlFor={name}>{label}:</label>
      <input
        className={"border-2 border-black px-2 py-1 text-xl flex-grow"}
        required={required}
        type={type || "text"}
        name={name}
        defaultValue={initialValue}
        step={"0.01"}
      />
    </div>
  )
}

export default BigFormInput