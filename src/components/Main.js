import React from 'react';
import './style.css'

function Main({addItem}) {

  const products = [
    { id: 1, name: 'МасBook', price: '85 000 рублей', img: 'image 1.png' },
    { id: 2, name: 'Galaxy', price: '80 000 рублей', img: 'image 2.png' },
    { id: 3, name: 'Скутер', price: '110 000 рублей', img: 'image 3.png' },
    { id: 4, name: 'Монитор Samsung', price: '20 000 рублей', img: 'image 4.png' },
    { id: 5, name: 'Респераторная маска', price: '1100 рублей', img: 'image 5.png' },
    { id: 6, name: 'Стиральная машина', price: '65 900 рублей', img: 'image 6.png' },
    { id: 7, name: 'Белый холодильник', price: '55 600 рублей', img: 'image 7.png' },
    { id: 8, name: 'Колонка', price: '7 100 рублей', img: 'image 8.png' },
    { id: 9, name: 'Наушники', price: '5 400 рублей', img: 'image 9.png' }
  
  ];

  return (
    <ul className='product-list'>
      {products.map((product) => (
          <li className='product' key={product.id}>
              <img src={`/assets/img/${product.img}`} alt='images' width={325} height={294}/>
              <div className='name-price'>
                <div >{product.name}</div>
                <div>{product.price}</div>
              </div>
              <button className='button' onClick={() => addItem(product)}> Добавить в корзину</button>
          </li>
      ))}
    </ul>
  );
  

}

export default Main;



