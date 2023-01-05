# Z-Product-Card

Este es un paquete de pruebas de despliegue en NPM

## Ejemplo

```tsx
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'z-product-card';
```

```tsx
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
