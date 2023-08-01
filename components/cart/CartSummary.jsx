import { useEffect, useState } from "react"
import styles from "./cartSummary.module.css"

function useCartSummary({ cart }) {
  const [summaryPrices, setSummaryPrices] = useState(null)

  const getTotalPrice = () => {
    const subTotal = cart.reduce(
      (acc, { quantity, price }) => acc + quantity * price,
      0
    )
    const shipment = 10
    const taxes = parseInt((subTotal * 0.12).toFixed(2))
    const total = subTotal + shipment + taxes

    setSummaryPrices({ subTotal, shipment, taxes, total })
  }

  useEffect(() => {
    getTotalPrice()
  }, [cart])

  return summaryPrices
}

export function CartSummary({ cart }) {
  const summaryPrices = useCartSummary({ cart })
  return (
    <aside className={styles.summary}>
      <h2 className={styles.h2}>Recuento</h2>

      <div className={styles.summaryInfoWrapper}>
        <div className={styles.summaryCount}>
          <div>
            <span>Subtotal</span>
            <span>${summaryPrices?.subTotal}</span>
          </div>
          <div>
            <span>Envío</span>
            <span>${summaryPrices?.shipment}</span>
          </div>
          <div>
            <span>impuestos</span>
            <span>${summaryPrices?.taxes}</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>${summaryPrices?.total}</span>
          </div>
        </div>

        <div className={styles.buttonsWrapper}>
          <button className={`${styles.button} ${styles.checkout}`}>
            <span>proceder al pago</span>
          </button>
          <button className={`${styles.button} ${styles.payWithPP}`}>
            <span>pagar con paypal</span>
          </button>
        </div>
      </div>
    </aside>
  )
}
