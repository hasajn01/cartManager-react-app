const Cart = ({ cartItem, removeItem }) => {
    return (
      <div>
        {cartItem.length === 0 ? (
          <div className="cartEmpty">
            <h5>Корзина пуста</h5>
          </div>
        ) : (
          <ul className='product-list'>
            {cartItem.map((product) => (
              <li className='product' key={product.cartId}>
                <img src={`/assets/img/${product.img}`} alt={product.name} width={325} height={294} />
                <div className='name-price'>
                  <div>{product.name}</div>
                  <div>{product.price}</div>
                </div>
                <button className='button' onClick={() => removeItem(product.cartId)}>
                  Удалить из корзины
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Cart;
  