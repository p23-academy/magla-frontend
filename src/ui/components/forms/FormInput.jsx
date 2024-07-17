const FormInput = ({
  name,
  label,
  required,
  type,
  initialValue,
  vertical,
  value,
  onChange,
}) => {
  return (
    <div className={`flex gap-2 ${vertical ? "flex-col" : "flex-row"}`}>
      <label className={"w-32"} htmlFor={name}>{label}:</label>
      <input
        className={"border-2 border-black px-2 py-1"}
        required={required}
        type={type || "text"}
        name={name}
        defaultValue={initialValue}
        step={"0.01"}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FormInput