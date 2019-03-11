---
title: Crear entorno de desarrollo WordPress con Docker
date: 2018-03-12
tags: ["WordPress"]
---

Hace unos días vimos cómo [crear un entorno de desarrollo WordPress con Varing Vagrant Vagrants (VVV)](https://barcia.gal/blog/crear-entorno-de-desarrollo-wordpress-con-varing-vagrant-vagrants/), hoy veremos cómo crearlo con [Docker](https://www.docker.com).

Docker es una plataforma de “**virtualización con contenedores**” que, por decirlo de una manera rápida, virtualiza aplicaciones aisladas con las dependencias mínimas que necesita esa aplicación, en lugar de virtualizar un sistema operativo completo.

Una de las ventajas que le encuentro a **Docker** respecto a **Vagrant** es que al no virtualizar un sistema operativo completo es muchísimo más ligero: ocupa menos espacio en nuestro equipo, arranca mucho más rápido –casi instantáneamente– y consume muchos menos recursos que Vagrant.

En el artículo que hablamos de [Vagrant](https://barcia.gal/blog/crear-entorno-de-desarrollo-wordpress-con-varing-vagrant-vagrants/) ya nombramos por encima las alternativas que había, así que aquí iremos directos al grano.

## Instalar Docker

Lo primero que debemos hacer es instalar Docker en nuestro equipo, para eso descargamos en [instalador adecuado para nuestro sistema operativo](https://docs.docker.com/install/) desde la página oficial. Además de Docker se nos instalará otra herramienta que será la que usemos después: **docker-compose**.

## Crear proyecto y _Dockerfile_

Bien, una vez tenemos correctamente instalado Docker, simplemente debemos crear un directorio nuevo en nuetro lugar de trabajo y, en él, el fichero docker-compose.yml (_Dockerfile_). Podría quedar algo así: `my_project/docker-compose.yml`. En este archivo indicaremos las instancias que queremos crear, en nuestro caso WordPress y MySQL:

    version: '3.3'
    services:
      wordpress:
        depends_on:
          - mysql
        image: wordpress:latest
        restart: always
        ports:
          - 8080:80
        environment:
          WORDPRESS_DB_PASSWORD: password
      mysql:
        image: mysql:5.7
        restart: always
        ports:
          - "8081:3306"
        environment:
          MYSQL_ROOT_PASSWORD: password

Destacaré la opción **_ports_**. Tal y como está configurado en el ejemplo anterior indica que podremos **acceder desde nuestro equipo a nuestro WordPress** en la URL **https://localhost:8080** y a nuestra base de datos en https://127.0.0.1:8081.

La opción **_restart: always_** indica que se inicialicen las instancias **automáticamente** siempre que si inicie Docker.

También podemos configurar Docker para que se inicie automáticamente al arrancar el sistema operativo y así siempre tendremos nuestro WordPress disponible al encender el equipo

[Aquí tenéis la página de referencia del](https://docs.docker.com/compose/compose-file/) _[dockerfile](https://docs.docker.com/compose/compose-file/)_ por si queréis profundizar en todas las posibilidades de configuración de este archivo.

## Arrancar nuestro WordPress

Una vez configurado nuestro _dockerfile_, simplemente accedemos desde la terminal a nuestro directorio: `cd my_project/`. Y ejecutamos el siguiente comando: `docker-compose up -d`. Esto **crea y arranca** nuestras instancias. La primera vez tardará un poco porque tiene que descargar las imágenes tanto de WordPress como de MySQL, pero después arranca casi instantáneamente. La **opción _-d_** simplemente indica que se ejecute en **segundo plano**.

Y listo, ahora ya deberíamos poder **acceder** a nuestro **WordPress** en la dirección [https://localhost:8080](https://localhost:8080).

Si queremos volver a **arrancar** o **detener** nuestras instancias simplemente debemos ejecutar los comandos: `docker-compose start` o `docker-compose stop`. Aquí podéis ver todos los [comandos que podemos utilizar con docker-compose](https://docs.docker.com/compose/reference/overview/).

## Virtualizar directorio en nuestro WordPress

Ahora ya tenemos un WordPress con Docker, pero para desarrollo nos interesa poder **virtualizar** ya sea **un theme o un plugin en nuestro WordPress**. Esto lo haremos añadiendo la siguiente opción en nuestro Dockerfile dentro de la configuración de `wordpress:`

    volumes:
        - /Users/USER/MY_THEME:/var/www/html/wp-content/themes/MY_THEME

Por supuesto, debemos cambiar _USER_ y _MY_THEME_ por los directorios que correspondan. Esto **virtualizará nuestro theme** dentro de la carpeta `/wp-content/themes/` de nuestro WordPress, y prodremos usarlo mientras lo vamos desarrollando sin ningún problema. Si es un plugin, haremos lo mismo pero en el directorio `/wp-content/plugins/`.

Sin más, así es como podemos crear un entorno de desarrollo WordPress muy básico pero totalmente funcional para desarrollar nuestros themes y plugins con Docker. En siguientes artículos veremos más opciones y _workflows_ que nos pueden resultar muy útiles ![🙂](https://s.w.org/images/core/emoji/2.4/svg/1f642.svg).
