import "./App.css"

import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "nb-product-card"

const product = {
  id: "1",
  title: "Coffee Mug - Card! ",
  // img: './coffee-mug.png',
}

function App() {
  return (
    <div className='App App-header'>
      <ProductCard
        product={product}
        initialValues={{ count: 10, maxCount: 15 }}
      >
        {() => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  )
}

export default App
