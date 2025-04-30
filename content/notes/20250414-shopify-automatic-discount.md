---
title: "Shopify Automatic Discount"
slug: "shopify-automatic-discount"
datePub: "2025-04-14"
tags: ["shopify"]
---

In Shopify, you can create automatic discounts for your customers.

1. Crear código descuento para un segmento de clientes

2. Crear código que, si el cliente está logueado, se le aplique el descuento autománticamente al navegar por la web añadiendo la cookie de ese código

- puede ser con un searchparams
- puede ser aañadirlo directamente con JS
- crear boton anywhere en la tienda.
- botn en newsletter que aplique el código directamente

```js
fetch(`/discount/${DiscountCode}`);
```

3. Worksaround para loguin en el checkou

- nos lleva directamente a la página de login
- debemos tener el user page antiguo, que es el que nos permite editar el código Liquid, para poder añadir ese JS
