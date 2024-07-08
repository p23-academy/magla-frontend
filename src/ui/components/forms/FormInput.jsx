const FormInput = ({
  name,
  label,
  required,
  type,
  initialValue
}) => {
  return (
    <div className={"flex gap-2"}>
      <label className={"min-w-16"} htmlFor={name}>{label}:</label>
      <input
        className={"border-2 border-black"}
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