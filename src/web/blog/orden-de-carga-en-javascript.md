---
title: Orden de carga en JavaScript
date: 2019-03-03
update: 2019-03-03
tags: ["css", "js"]
---
# jbjb

Cuando empezaste a escribir **JavaScript** seguramente te encontraste con el problema de que, dependiendo de en qué lugar de tu web **colocaras** el código, éste se 
ejecutaba o no. Veamos cómo podemos controlar eso.

Seguro que más de una vez optaste por importar tu script JS en el footer, para así “evitarte problemas”. En diversos lugares Google recomienda hacerlo así, pero hagas caso de todo lo que te dice Google. 😌

Efectivamente, eso suele funcionar sin problemas, y la W3C no nos indica que la etiqueta `<script>` no pueda ir ahí. Sin embargo, lo normal es que todos los recursos externos de indiquen en el `<head>` y podemos hacerlo con todos los JavaScript sin problema.

Podemos elegir cuándo se carga un **JavaScript** tanto si estamos escribiendo código como si sólo queremos importar un script.

Primero debes saber que cuando se empieza a cargar el DOM y llega a esos recursos **externos**, se paraliza la carga del DOM mientras se cargan esos recursos. Esto puede que no nos interese, pero podemos controlarlo con el primero de los atributos que veremos: el atributo async.

## SubHEading of two
Si añadimos el atributo async a un script que importamos, éste no paraliza la carga del DOM y se carga el script al mismo tiempo que el DOM. Puede ser útil en muchas ocasiones y ayuda a optimizar la carga de nuestro sitio web.

```html
// Este script se carga al mismo tiempo que el DOM sin paralizar su carga
<script src="script.js" async></script>
```

El otro atributo que veremos también es tremendamente útil y nos evitará tener que colocar nuestro script al final del DOM. Se trata del atributo defer. El atributo defer carga nuestro script justo cuando se termina de cargar el DOM. Esto es muy útil si nuestro script necesita obtener algunos de los elementos del DOM.

