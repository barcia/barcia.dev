---
title: Crear un repositorio Git en Dropbox, Google Drive o en un USB
date: 2018-03-26
tags: ["resources"]
---

Recientemente estaba trabajando en un proyecto que no podía, de momento, subir a [mi cuenta de GitHub](https://github.com/barcia) teniendo en cuenta que todos mis repositorios ahí son **públicos**. Para tener repositorios **privados** es necesario **pagar** una cuota mensual de $7 al mes. Por supuesto es una opción muy a tener en cuenta en un futuro, pero no para este caso en el que sólo se trataba de un proyecto puntual.

La opción que valoré fué la de **guardar** todo mi proyecto directamente en mi **servicio de almacenamiento**, que en este momento es Dropbox, pero me encontré con el problema de que debido a todas las **dependencias de _Node_** que utilizo en el proyecto, el **peso** total se iba a más de 120Mb, cuando el código del proyecto en sí no llega ni a 1Mb. Esto es muy **ineficiente**, tanto por el espacio que desperdicio en el servicio de como por todos los miles de archivos que debo sincronizar entre la nube y mi equipo. 👎

La opción ideal era clara: poder **crear un repositorio git completo como en [GitHub](https://github.com)**, donde poder hacer _push_, _pull_, etc, pero **en Dropbox** (o dónde queramos). Para esto, necesitamos primero tener nuestro servicio de almacenamiento **sincronizado** en nuestro equipo, para que nos aparezcan los directorios del servicio de almacenamiento en nuestro explorador de archivos igual que los demás directorios.

Ya sé que hay servicios como [Bitbucket](https://bitbucket.org) o [GitLab](https://about.gitlab.com) que permiten repositorios gratuítos, pero esta opción es útil y rápida si sólo queremos sincronizar algún proyecto puntual.

En mi caso utilizo **Dropbox**, pero el proceso es totalmente igual para crear nuestro repositorio git en **Google Drive**, **OneDrive**, o en un dispositivo **USB**, **disco duro externo**, etc. Sólo debemos indicar la ruta correcta hacia el directorio. Por ejemplo, un USB en MacOS podría ser: `/Volumes/miusb`

En mi caso ya tenía un repositorio git en local, pero si no es el caso os indico como **crearlo**:

```bash
~/proyecto $ git init
~/proyecto $ git add .
~/proyecto $ git commit -m "primer commit"
```

Ahora nos vamos al directorio donde almacenaremos nuestro repositorio git, y creamos sólo la **estructura** de un repositorio git. Esto lo hacemos con la opción `--bare`.

```bash
~/Dropbox $ git init --bare proyecto.git
```

😎 **ProTip**: Podemos crear un directorio oculto llamado, por ejemplo, `~/Dropbox/.git` dentro del cual crearemos todos nuestros repositorios, y así ese directorio no se verá en el explorador de archivos y nos evitamos que nos moleste o borrarlo accidentalmente.

Bien, ahora ya sólo debemos **añadir** este repositorio a nuestro proyecto, y **subir** los cambios:

```bash
~/proyecto $ git remote add origin ~/Dropbox/proyecto.git
~/proyecto $ git push -u origin master
```

Finalmente, ya tenemos un **repositorio** completo en nuestro Dropbox igual a uno almacenado en GitHub. El día que queramos volver a trabajar en ese repositorio simplemente lo clonamos como cualquier otro:

```bash
~ $ git clone ~/Dropbox/proyecto.git
```

Aunque mi objetivo simplemente era que no fuera público, realmente también podemos hacer cosas como **compartir** ese directorio de Dropbox varias personas del **equipo** y trabajar todos en el mismo proyecto.
