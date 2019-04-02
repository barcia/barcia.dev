---
title: Porqué me pasé a SVG inline
date: 2018-03-02T00:00:00+01:00
tags: ["html"]
---

Tenemos diversas formas de introducir iconos en nuestros sitios web. Como otros muchos _frontends_ a lo largo de los años lo hice de distintas maneras.

## Tipografía de iconos 👎

La forma más popular seguramente sea la de utilizar una **tipografía de iconos** como hace, por ejemplo, [Font Awesome](https://fontawesome.com). Esta manera de usar iconos tiene varias ventajas como que es tremendamente **sencilla de incluir﻿** en nuestro proyecto. Simplemente debemos añadir en nuestro `<head>` al CSS que nos indiquen, donde ya viene preconfigurado el link a la tipografía (que puede ser en local o a través de un CDN) y los estilos básicos para que funcione correctamente.

Otra ventaja es que también es tremendamente **fácil de utilizar**. Por norma general utilizan la etiqueta `<i>` de HTML junto con una o varias clases para añadir los estilos básicos. Este es un ejemplo básico de un icono de Font Awesome:

```html
<i class="fas fa-camera-retros"></i>
```

La última gran ventaja es que al ser una tipografía, estos iconos son bastante **personalizables** con CSS: podemos cambiar el color, el tamaño, añadir transiciones, etc.

Como vemos, este método es tan popular porque es tremendamente sencillo de implementar y bastante personalizable. Pero no todo son ventajas. Tiene, a mi parecer, dos grandes **desventajas** que son lo que hicieron que dejara de usar este método hace ya mucho tiempo: **No es semántico**, y **no es accesible**.

La etiqueta `<i>` de HTML está creada por especificación para añadir texto normalmente en itálica (desde HTML5 se desaconseja el uso de las etiquetas puramente estilísticas), por lo tanto no es adecuada para añadir ningún tipo de imagen como estamos haciendo con los iconos. Por extensión, **tampoco es accesible**, pues un software con un lector de pantalla está entendiendo que en esa etiqueta hay un texto en itálica, y no un icono. **Es muy importante escribir un HTML semántico y que siga los estándares de la W3C**.

## La alternativa: SVG 👍

Descartada la opción de las tipografías de iconos buscamos una alternativa más adecuada. Las **imágenes ráster** (JPG, PNG, etc) nos anulan por completo la posibilidad de usar distintos tamaños, personalizarlos, etc. así que descartamos también esta opción, y la alternativa que nos queda son los _Scalable Vector Graphics_ o [**SVG**](https://developer.mozilla.org/kab/docs/Web/SVG).

El SVG es un lenguaje abierto que forma parte de HTML y está pensado para crear gráficos escalables, así que es exactamente lo que necesitamos. No es este artículo para hablar de la sintaxis ni bondades del SVG (que las tiene, y muchas 😉, pero solo comentaré que hay dos formas básicas de añadir un SVG, con la etiqueta `<img>` y la etiqueta `<svg>`. En este artículo de _CSS Tricks_ teneis más información: [Using SVG](https://css-tricks.com/using-svg/).

## Con _sprites_ y Ajax 🤯

Cuando empecé a usar SVG en lugar de tipografías de iconos, intenté buscar un **flujo de trabajo** parecido al que tenía, y lo encontré.

La solución que adopté en un principio fué la de juntar todos iconos SVG de mi proyecto en un **_sprite_**. donde cada icono de ese _sprite_ tenía un ID único. En mi caso, se ponía como ID automáticamente en nombre que yo le daba al SVG. Por supuesto, todo esto lo hacía de forma automática con [Gulp](https://gulpjs.com) y plugins como [SVGStore](https://www.npmjs.com/package/svgstore), [SVGMin](https://www.npmjs.com/package/gulp-svgmin), [Rename](https://www.npmjs.com/package/gulp-rename), etc. (Si os interesa, puedo explicar en un artículo el proceso que seguía)

Después cargaba ese _sprite_ con Ajax, y a partir de ese momento ya podía invocar cualquiera de mis iconos SVG con la etiqueta [<use>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) y el ID del icono:

```html
<use xlink:href="#share"></use>
```

Este método era más respetuoso con el estándar y me permitía añadir iconos de forma sencilla, pero con el tiempo también me fuí dando cuenta de algunos **incovenientes**.

1.  Necesitaba usar **JavaScript** y **Ajax** para algo tan básico como añadir un icono.
2.  Al estar todos los iconos en un _sprite_, en todas las páginas se cargaban **todos** los iconos del proyecto. Mal para el WPO.
3.  Aunque sí podía cambiar algunas cosas básicas con CSS como el color y el tamaño, no eran totalmente **personalizables**.

## SVG Inline 🏆

Después de darle muchas vueltas, hacer pruebas e investigar un poco para mejorar mi sistema para trabajar con iconos, decidí comenzar a incluír los iconos de la forma más espartana posible: con **_SVG inline_**, es decir, escribir el código del icono directamente en el HTML. Ya veis que es algo extremadamente simple, pero es que este método tiene importantes bondades:

1.  Es muy **sencillo de utilizar**. Simplemente debemos copiar o escribir el código SVG directamente en el HTML.
2.  El mejor método en cuanto a **WPO** ya que no necesitamos añadir contenido externo (ni CSS, ni JavaScript, ni SVG externos), y cargamos en cada página única y exclusivamente l**os iconos que se usan** en esa página.
3.  Es totalmente **personalizable**. Todo el código está ahí en el HTML. Podemos añadir clases a cada parte del icono y personalizar todo lo que se nos ocurra, colores, tamaños, transiciones, añadir animaciones, etc.

En cuanto a desventajas, que ni siquiera es una desventaja como tal, al principio simplemente me parecía que **sobrecargaba** un poco el HTML, pero editando un poco nuestros SVG o usando herramientas como [SVGO](https://github.com/svg/svgo) podemos conseguir un código muy limpio y muy corto para iconos básicos.

Ejemplo de icono básico de tres barras:

<iframe height="200" scrolling="no" title="Three bars icon with SVG inline" src="//codepen.io/barcia/embed/paZdxO/?height=185&amp;theme-id=31077&amp;default-tab=html&amp;embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href='https://codepen.io/barcia/pen/paZdxO/'>Three bars icon with SVG inline</a> by Iván Barcia (<a href='https://codepen.io/barcia'>@barcia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>

El flujo de trabajo es sencillo. Junto a los demás archivos del código fuente de mi proyecto web, tengo un directorio llamado `svg/` o `icons/` donde tengo almacenados los iconos SVG que uso. Cuando tengo que añadir un icono en mi HTML, simplemente lo busco en el directorio, copio el código, lo pego en su lugar correspondiente, y listo. Así siempre mantengo los iconos que uso con el código fuente del proyecto.

Cuanto más uso este método más me gusta y más cómodo me siento con el. Esta es la forma que la W3C nos indicó para añadir gráficos simples hace ya bastante años, pero es curioso como a veces le damos vueltas a todo y buscamos opciones más complicadas sin necesidad. 🙈

Aquí os dejo un artículo de Chris Coyer donde explica alguna bondad acerca de escribir SVG inline: [A Pretty Good SVG Icon System](https://css-tricks.com/pretty-good-svg-icon-system/). Si queréis profundizar más en el lenguaje SVG, os recomiendo [Scalable de Jorge Aznar](https://leanpub.com/scalable) y [Pocket Guide to Writing SVG de Joni Trythal.](http://svgpocketguide.com)
