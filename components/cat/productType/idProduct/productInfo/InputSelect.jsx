import styles from './inputSelect.module.css'

export function InputSelect({ inputValue, selectName, selectOptions, setValue }) {
  const options = ["Selecciona", ...selectOptions]

  const handleOnChange = (e) => {
    const value = e.target.value
    value === "Selecciona" ? setValue(null) : setValue(value)
  }

  return (
    <div className={styles.selectWrapper}>
      <div className={styles.infoWrapper}>
        <label htmlFor={selectName}>{selectName}</label>
        <select
          className={`${styles.select} ${
            inputValue === "error" && styles.errorr
          }`}
          id={selectName}
          onChange={handleOnChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div
        className={`${styles.errorMessage} ${
          inputValue === "error" && styles.active
        }`}
      >
        <p>selecciona la {selectName}</p>
      </div>
    </div>
  )
}
