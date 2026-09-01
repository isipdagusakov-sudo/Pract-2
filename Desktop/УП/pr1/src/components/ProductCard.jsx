import { useState } from 'react'
import './ProductCard.css'

// Компонент «Карточка товара».
// Данные о товаре (название, цена, картинка) приходят через props из App.
function ProductCard({ name, price, image }) {
  // count — сколько штук товара добавлено в корзину.
  // Состояние объявлено внутри компонента, поэтому у каждой карточки
  // свой независимый счётчик.
  const [count, setCount] = useState(0)

  // Обработчик нажатия на кнопку «Добавить в корзину»:
  // увеличиваем количество на 1
  const handleAdd = () => {
    setCount(count + 1)
  }

  return (
    <article className="product-card">
      {/* Изображение товара (ссылка или заглушка-placeholder) */}
      <img className="product-card__image" src={image} alt={name} />

      <h2 className="product-card__name">{name}</h2>
      <p className="product-card__price">{price.toLocaleString('ru-RU')} ₽</p>

      <button className="product-card__button" onClick={handleAdd}>
        Добавить в корзину
      </button>

      {/* Текущее количество выбранного товара */}
      <p className="product-card__count">
        {count > 0 ? `В корзине: ${count} шт.` : 'Товар ещё не в корзине'}
      </p>
    </article>
  )
}

export default ProductCard
