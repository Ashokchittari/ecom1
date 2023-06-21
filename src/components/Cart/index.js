import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      const onClickRemoveAll = () => {
        removeAllCartItems()
      }
      let totalBill = 0
      cartList.map(each => {
        totalBill += each.price * each.quantity
        return <h1>toal</h1>
      })

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div className="cart-header">
                  <h1 className="cart-heading">My Cart</h1>
                  <button type="button" onClick={onClickRemoveAll}>
                    Remove All
                  </button>
                </div>
                <CartListView />
                <div>
                  <h1>{`Order Total: Rs ${totalBill}/-`}</h1>
                  <p>{`${cartList.length} Items in cart`}</p>
                  <button type="button">Checkout</button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
