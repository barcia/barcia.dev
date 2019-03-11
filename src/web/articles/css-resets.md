---
title: CSS Resets
date: 2017-11-13
tags: ["CSS"]
---

Cualquiera que escriba CSS, antes o después se topa con los **_CSS Reset_**. La gran mayoría de _frameworks_ usan uno, ya sea uno conocido de los que veremos a continuación, o uno propio. Pero, ¿Qué es un _CSS Reset_?

Antes de explicar eso, debemos recordar que todos los **navegadores** web usan unos **estilos CSS por defecto** para que cuando abrimos un fichero HTML sin estilos CSS, o no establecemos estilos para un elemento en concreto, todo se vea correctamente, con jerarquía y coherencia. El problema nos surge a partir de que estos estilos por defecto de los navegadores non son exactamente iguales, y eso puede provocar que nuestra web se vea de formas distintas dependiendo del navegador con la que la visiten.

**Un _CSS Reset_ es un archivo** con un conjunto de reglas **CSS** destinadas a **unificar o resetear todos estos estilos por defecto** que carga nuestra web. Aunque solemos llamarlos _CSS Resets_, lo cierto es que a grandes rasgos los hay de dos tipos muy distintos: Los que resetean todos lo estilos, o los que simplemente buscan unificarlos corrigiendo diferencias entre navegadores.

Uno de los más conocidos -y más contundentes- es el de **[Meyer](https://meyerweb.com/eric/tools/css/reset/reset.css)**. Elimina y resetea las propiedades más comunes a todos los elementos HTML.

**Richard Clark** publicó en la web [HTML5 Doctor](http://html5doctor.com) una versión modificada y ampliada del _CSS Reset_ de Meyer llamada **[HTML5 Reset Stylesheet](http://html5doctor.com/html-5-reset-stylesheet/).**

Pero sin lugar a dudas, el más conocido y usado es **[Normalize.css](https://github.com/necolas/normalize.css/)** de Nicolas Gallagher. La mayoría de frameworks y webs lo usan, pero su función no es la de resetear todos los estilos, sinó la de **unificarlos** lo máximo posible, pero respetando la mayoría de los estilos por defecto de los navegadores. También se centra en corregir algunos _bugs._

Otro muy conocido y parecido al anterior es **[Santize.css](https://jonathantneal.github.io/sanitize.css/)**, de Jonathan Neal.

Estos _resets_ son muy **útiles** y casi diría que necesarios, el -gran- **problema** que le encuentro es que muchas reglas CSS son **opiniables**, pues simplemente son la percepción del programador que escribe el código, que cree que debe de ser así. Es por eso que estos proyectos más conocidos tienen muchos **_forks_** o incluso hai **creaciones a medida** para distintos _frameworks_ o proyectos. Por ejemplo, la nueva versión de [Bootstrap 4](http://getbootstrap.com) deja de lado Normalize.css y crea su propio _fork_ llamado **[Reboot.scss](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_reboot.scss)**.

Personalmente opté por la misma solución para mi framework [Bramework](https://github.com/barcia/bramework), y creé una versión personalizada que llamé **[Standarize.scss](https://github.com/barcia/bramework/blob/master/src/scss/plugins/_standarize.scss)**. Los motivos son que, **en mi opinión**, Normalize.css es demasiado extenso y subjetivo en algunos aspectos. Yo no necesito normalizar los estilos de no-se-qué extraña etiqueta HTML para IE7\. Por supuesto, otros proyectos sí pueden necesitarlo. Así que lo que hice fué **sacar** todo lo que me parecía **prescindible**, y **añadir** algunos pequeños detalles que sí me parecen importantes y que en Normalize.css no estaban.

Os recomiento que visitéis los CSS Resets de los que hemos hablado y **analicéis el código** en profundidad, pues ademáis de aprender mucho podréis ver cuál se adapta mejor a vuestras necesiades.

Un saludo.
