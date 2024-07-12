const FormInput = ({
  name,
  label,
  required,
  type,
  initialValue
}) => {
  return (
    <div className={"flex gap-2"}>
      <label className={"w-32"} htmlFor={name}>{label}:</label>
      <input
        className={"border-2 border-black px-2 py-1"}
        required={required}
        type={type || "text"}
        name={name}
        defaultValue={initialValue}
        step={"0.01"}
      />
    </div>
  )
}

export default FormInput