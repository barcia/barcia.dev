---
title: Orden de carga en JavaScript
date: 2018-10-12T00:00:00+01:00
tags: ["js", "wpo"]
---

Cuando empezaste a escribir JavaScript seguramente te encontraste con el problema de que, dependiendo de en qué lugar de tu web colocaras el código, éste se ejecutaba o no. Veamos cómo podemos controlar eso.

Seguro que más de una vez optaste por importar tu script JS en el _footer_, para así “evitarte problemas”. En diversos lugares Google recomienda hacerlo así, pero hagas caso de todo lo que te dice Google. 😌

Efectivamente, eso suele funcionar sin problemas, y la W3C no nos indica que la etiqueta `<script>` no pueda ir ahí. Sin embargo, lo normal es que todos los recursos externos de indiquen en el `<head>` y podemos hacerlo con todos los JavaScript sin problema.

Podemos elegir **cuándo se carga un JavaScript** tanto si estamos escribiendo código como si sólo queremos importar un script.

Primero debes saber que cuando se empieza a cargar el DOM y llega a esos recursos externos, se paraliza la carga del DOM mientras se cargan esos recursos. Esto puede que no nos interese, pero podemos controlarlo con el primero de los atributos que veremos: el atributo _**async**_.

Si añadimos el atributo _**async**_ a un script que importamos, éste no paraliza la carga del DOM y se carga el script al mismo tiempo que el DOM. Puede ser útil en muchas ocasiones y ayuda a optimizar la carga de nuestro sitio web.

```js
// Este script se carga al mismo tiempo que el DOM sin paralizar su carga
<script src="script.js" async></script>
```

El otro atributo que veremos también es tremendamente útil y nos evitará tener que colocar nuestro script al final del DOM. Se trata del atributo _**defer**_. El atributo _defer_ carga nuestro script justo cuando se termina de cargar el DOM. Esto es muy útil si nuestro script necesita obtener algunos de los elementos del DOM.

```js
// Este script se carga después de cargar el DOM
<script src="script.js" defer></script>
```

Ojo, con _defer_ el script de carga al cargar el DOM, que no necesariamente la página, por ejemplo, algunas imágenes puede que aún no se terminaran de cargar.

Tanto el atributo _async_ con el atributo _defer_ funcionan sólo con scripts que importamos con _src_, no funcionan con código JavaScript directamente escrito entre las etiquetas `<script>`

Ambos atributos son soportados por la gran mayoría de los navegadores. Puedes ver el soporte en la web de Can I Use tanto de [_async_](https://caniuse.com/#search=async) como de [_defer_](https://caniuse.com/#search=defer).

Si estamos **desarrollando** un script también tenemos métodos para controlar cuándo se carga o cuándo obtenemos lo que necesitamos del DOM.

Con el evento _**DOMContentLoaded**_ cargamos nuestro contenido después de que se cargue el DOM independientemente de en qué lugar se cargue el script.

```js
// El alert se ejecuta desupés de cargar el DOM
document.addEventListener("DOMContentLoaded", function() {
    alert("DOM cargado");
})
```

También podemos utilizar el evento **_load_** para que el código se ejecute después de cargar toda la página (Es decir, el DOM y los elementos externos como imágenes)

```js
// El alert se ejecuta después de cargar la página
document.addEventListener("load", function() {
    alert("Página cargada");
})
```

Como ves, tenemos muchos recursos a nuestro alcance para desarrollar bien JavaScript y para que se ejecute el código realmente cuando tiene que hacerlo.
