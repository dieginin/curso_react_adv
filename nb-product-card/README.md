# NB-Product-Card

Este es un paquete de pruebas de despliegue en NPM

## Diego Balestra (NextBale)

## Ejemplo

```tsx
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from 'nb-product-card
```

```tsx
<ProductCard product={product} initialValues={{ count: 4, maxCount: 10 }}>
  {({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
