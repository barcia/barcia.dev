---
title: CSS Background Animations
date: 2018-03-19
tags: ["css"]
---

En el diseño web todos los años vemos nuevas tendencias. Desde hace un tiempo es común ver cómo se están poniendo de moda (otra vez) los **degradados**. Si además le aplicamos una **suave animación**, podemos conseguir resultados estupendos.

Antes de nada, pasemos directamente a ver el código y el resultado:

<p class="codepen" data-height="300" data-theme-id="31077" data-default-tab="result" data-user="barcia" data-slug-hash="zWGMrr" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CSS Gradient Animation">
  <span>See the Pen <a href="https://codepen.io/barcia/pen/zWGMrr/">
  CSS Gradient Animation</a> by Iván Barcia (<a href="https://codepen.io/barcia">@barcia</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

En el ejemplo anterior aplicamos el fondo usando de caja o **contenedor** todo el `body`, pero es igual de sencillo hacerlo con otro contenedor cualquiera.

Si analizamos el código CSS vemos que primero simplemente añadimos un [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) normal a nuestro contenedor. Esto nos crea un **fondo con un gradiente** con el **ángulo** y los **colores** que le indiquemos. En el ejemplo indicamos `90deg` para que nos haga el degradado de forma **vertical**, y también indicamos los 2 colores que queremos usar en este degradado, pero podemos indicar el número de colores que queramos.

🎨 Visualmente, los **degradados suaves** y de sólo 2 colores suelen ser los que mejor quedan, aunque también algunas combinaciones de 3 colores pueden ser interesantes. En las páginas [uigradients.com](https://uigradients.com) y [webgradients.com](https://webgradients.com) hay ejemplos muy buenos.

Hasta aquí ya tenemos un fondo degradado en nuestro contenedor, pero se vé el degradado entero y eso no es lo que realmente queremos, así que en la siguiente linea cambiamos el **tamaño del fondo**, y lo hacemos 4 veces más **grande** con: `background-size: 400% 400%;` Así ya sólo vemos unha parte del degradado, ahora sólo nos queda darle movimiento.

En la siguiente linea aplicamos una **animación** a nuestro fondo: `animation: GradientAnimation 5s ease-in-out infinite;` Con esta propiedad primero indicamos que la animación a usar es _GradientAnimation_, que explicaremos después. Los siguientes parámetros son el **tiempo de ejecución** de un ciclo completo de la animación, el **tipo de animación** y el **número de veces** que se repetirá la animación. En la Mozilla Developer Network podéis ver a fondo la propiedad [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation).

Bien, en cuanto a la **animación** _GradientAnimation_ que vemos en el código, observamos que simplemente **mueve el fondo de un lado al otro**, y vuelve al origen.

**🔔 Importante**: debemos recordar que indicamos que nuestro degradado fuera **vertical** (90deg) entonces establecemos que la animación mueva el degradado **de un lado a otro** de forma **horizontal** para que se vean los dos colores. Cambiando el ángulo del degradado y el [background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) podemos hacer un degradado que se mueva el **cualquier dirección**.

Para terminar, también tenemos las **herramientas** [CSS Gradient](https://cssgradient.io) y [CSS Gradient Animator](https://www.gradient-animator.com), que nos permiten hacer todo esto de forma **visual**.


<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
