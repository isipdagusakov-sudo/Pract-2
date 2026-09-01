import './App.css'
import ProductCard from './components/ProductCard'

// Массив товаров. Данные хранятся в App и передаются
// в каждую карточку через props.
const products = [
  {
    id: 1,
    name: 'Ноутбук ASUS VivoBook 15',
    price: 54990,
    image: 'https://placehold.co/300x200/dbeafe/1e3a8a.png?text=Ноутбук',
  },
  {
    id: 2,
    name: 'Смартфон Samsung Galaxy A55',
    price: 32990,
    image: 'https://placehold.co/300x200/dcfce7/14532d.png?text=Смартфон',
  },
  {
    id: 3,
    name: 'Наушники Sony WH-1000XM5',
    price: 24990,
    image: 'https://placehold.co/300x200/fef9c3/713f12.png?text=Наушники',
  },
  {
    id: 4,
    name: 'Мышь Logitech MX Master 3S',
    price: 8490,
    image: 'https://placehold.co/300x200/fce7f3/831843.png?text=Мышь',
  },
]

// Корневой компонент приложения: выводит заголовок
// и список карточек товаров
function App() {
  return (
    <div className="app">
      <h1 className="app__title">Каталог товаров</h1>

      <div className="app__cards">
        {/* Для каждого товара создаём свою карточку.
            key нужен React, чтобы различать элементы списка */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App
