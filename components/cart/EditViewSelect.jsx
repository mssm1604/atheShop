"use client"

import { ArrowDown } from "../icons/Icons"
import styles from "@/components/cart/editView.module.css"

export function EditViewSelect({
  inputValue,
  setValue,
  selectName,
  selectOptions,
}) {
  const handleInputOnChange = (e) => {
    const value = e.target.value
    setValue((prevState) => ({ ...prevState, [selectName]: value }))
  }

  return (
    <div className={`${styles.input} ${styles.optSize}`}>
      <label htmlFor={selectName}>{selectName}</label>
      <div className={styles.selectorWrapper}>
        <select
          onChange={handleInputOnChange}
          className={styles.select}
          id={selectName}
        >
          {selectOptions.map((value) =>
            inputValue == value ? (
              <option key={value} value={value} selected>
                {value}
              </option>
            ) : (
              <option key={value} value={value}>
                {value}
              </option>
            )
          )}
        </select>
        <div className={styles.inputSvg}>
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}
