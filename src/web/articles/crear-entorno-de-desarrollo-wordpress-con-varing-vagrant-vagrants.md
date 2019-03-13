---
title: Crear entorno de desarrollo WordPress con Varing Vagrant Vagrants
date: 2018-02-19
tags: ["WordPress", "JS"]
---

Cuando empezamos a desarrollar **plugins**, **themes** o bien el propio **core** de **[WordPress](https://wordpress.org)** necesitamos hacerlo en local, y para eso tenemos varias formas de hacerlo.

Podemos instalar un un servidor en nuestro propio equipo, [hacerlo con contenedores Docker](https://barcia.gal/blog/crear-entorno-de-desarrollo-wordpress-con-docker/), usar aplicaciones como [Local by Flywheel](https://local.getflywheel.com), o crear entornos de desarrollo en máquinas virtuales. Esta última será la que trataremos hoy, y lo haremos con **[Vagrant](https://www.vagrantup.com)** y **[Varying Vagrant Vagrants (VVV)](https://varyingvagrantvagrants.org/docs/en-US/adding-a-new-site/setup-script/)**. A pesar de no ser la opción más sencilla de todas tampoco es extremadamente complicada, pero sin embargo sí nos da muchísima más potencia y versatilidad.

Los únicos requisitos previos son que debes conocer el uso básico de la **terminal**, tratar con archivos de configuracion de texto, hecharle un vistazo a [wp-cli](http://wp-cli.org), y un poco de paciencia 😉.

**[Vagrant](https://www.vagrantup.com)** es una herramienta para manejar **máquinas virtuales** orientadas a crear entornos de desarrollo de cualquier tipo. Funciona bajo un software de virtualización como **VirtualBox**, aunque también se puede hacer funcionar con Parallels, Hyper-V y VMWare. En su sitio web podéis acceder a su [documentación](https://www.vagrantup.com/docs/index.html).

Por fortuna, los desarrolladores de WordPress tenemos una herramienta **_open source_** estupenda para agilizarnos el proceso de crear el entorno de desarrollo: **[Varying Vagrant Vagrants (VVV)](https://varyingvagrantvagrants.org)**. Esto no es más que una **configuración básica** de una máquina virtual en Vagrant que trae por defecto muchas herramientas útiles: Servidor Nginx en un Ubuntu, wp-cli, PhpMyAdmin, etc.

A continuación explico **cómo crear nuestro primer WordPress con VVV**. El proceso está realizado en **Mac OS**. Pero la mayoría de archivos de configuración y comandos son idénticos para otros Sistemas Operativos. En las respectivas documentaciones tenéis más indicaciones para otros SO.

## 1. Requerimientos previos

1. **[Descargamos](https://www.virtualbox.org/wiki/Downloads)** **VirtualBox** de su página oficial y lo **instalamos**
2. **[Descargamos](https://www.vagrantup.com/downloads.html)** **Vagrant** de su página oficial y lo **instalamos**
3. Instalamos desde la terminal algunos **plugins** muy recomendados de Vagrant:
    `vagrant plugin install vagrant-hostsupdater vagrant-triggers vagrant-vbguest`

    1.  _hostupdater_: Actualiza el nombre de los hosts automáticamente en nuestra máquina
    2.  _triggers_: Permite ejecutar varios scripts en algunos momentos clave
    3.  _vbguest_: No es imprescindible. Si usamos VirtualBox previene algunos errores en directorios compartidos
4.  Este no es imprescindible, pero sí muy cómodo. Se trata de **[Vagrant Manager](http://vagrantmanager.com)**. Un programa para Mac OS y para Windows que nos añade un icono en la barra de menú/tareas desde donde podremos gestionar fácilmente nuestras máquinas virtuales.
5.  **Importante: Reinicia el equipo.**

## 2. Instalamos VVV

En su web recomiendan hacerlo mediante _git_ porque es mas sencillo actualizarlo posteriormente a las nuevas versiones.

Ejecutamos en la terminal:

```shell
git clone -b master git://github.com/Varying-Vagrant-Vagrants/VVV.git ~/vvv
```

Ahora se descarga VVV en el directorio `~/vvv` dentro de nuestro directorio personal.

Y ya estaría todo. Ejecutando `vagrant-up` ya se debería configurar correctamente una máquina virtual con una instalación de WordPress con una configuración que trae VVV por defecto, pero a continuación vemos como configurar nuestros propios sitios.

Es muy muy recomendable que te **leas TODA la documentación** de [Varying Vagrant Vagrants](https://varyingvagrantvagrants.org). Es muy corta, no te llevará demasiado tiempo.

## 3. Añadir un nuevo sitio

Una vez descargado VVV, accedemos al directorio recién descargado, en nuestro caso `~/vvv/` y copiamos el archivo `vvv-config.yml` a `vvv-custom.yml`. En este nuevo archivo será donde añadiremos nuestros sitios.

Este es un archivo [_Yaml_](https://es.wikipedia.org/wiki/YAML), así que es imprescindible mantener la _indentación_ correcta.

Cuando creamos un sitio nuevo con Vagrant, hay que tener en cuenta dos aspectos fundamentales:

1. Indicarlo en el archivo de configuración global `vvv-custom.yml.`
2. Crear los archivos de configuración del nuevo sitio en particular. Son dos: `vvv-nginx.conf` y `vvv-init.sh`. Estos archivos los debemos crear dentro del directorio: `~/vvv/www/NOMBRE_DEL_SITIO/provision/`

Los archivos de configuración del directorio `provision/` indicados en el punto número 2, se pueden obviar indicando en el `vvv-custom.yml` la URL de un repositorio para que los coja directamente de ahí.

En la documentación de VVV tienes más información acerca de [añadir nuevos sitios](https://varyingvagrantvagrants.org/docs/en-US/adding-a-new-site/).

### 3.1 vvv-custom.yml

Para añadir un nuevo sitio llamado, por ejemplo, "tienda" simplemente debemos añadir en `vvv-custom.yml` la siguiente configuración:

```yaml
sites:
  tienda:
    hosts:
      - tienda.test
```

Simplemente le hemos indicado el nombre del sitio, y la URL a través de la que accederemos al sitio. Si también queremos indicar un repositorio con los archivos de configuración _provision_, lo hacemos así:

```yaml
sites:
  tienda:
    repo: https://github.com/Varying-Vagrant-Vagrants/vvv-wordpress-default.git
    hosts:
      - tienda.test
```

Antes se solía usar la extensión `.dev` para URL's en entornos de desarrollo locales, pero ahora está administrada por Google. Lo correcto es usar extensiones `.test`. La propia [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) lo [recomienda y protege](https://en.wikipedia.org/wiki/.test) para tal fin.

Este es mi repositorio que utilizo para mis instalaciones básicas: [github.com/barcia/vvv-wordpress.git](https://github.com/barcia/vvv-wordpress.git)

### 3.2 Archivos _provision_

Como indicamos antes, son 2, `vvv-nginx.conf` y `vvv-init.sh`. Van dentro del directorio `provision/` y éste puede estar tanto dentro del directorio `www/NOMBRE_DEL_SITIO/` como en un repositorio remoto indicado en el `vvv-custom.yml`.

El archivo `vvv-init.sh` es un shell script que contiene todos los pasos que se deben realizar para la instalación de nuestro WordPress. Usando toda la potencia de wp-cli podemos conseguir instalaciones de WordPress totalmente personalizadas.

Este es el ejemplo de que indica en la web oficial de VVV:

```bash
#!/usr/bin/env bash
# Add the site name to the hosts file
echo "127.0.0.1 ${VVV_SITE_NAME}.test # vvv-auto" >> "/etc/hosts"
# Make a database, if we don't already have one
echo -e "\nCreating database '${VVV_SITE_NAME}' (if it's not already there)"
mysql -u root --password=root -e "CREATE DATABASE IF NOT EXISTS ${VVV_SITE_NAME}"
mysql -u root --password=root -e "GRANT ALL PRIVILEGES ON ${VVV_SITE_NAME}.* TO wp@localhost IDENTIFIED BY 'wp';"
echo -e "\n DB operations done.\n\n"
# Nginx Logs
mkdir -p ${VVV_PATH_TO_SITE}/log
touch ${VVV_PATH_TO_SITE}/log/error.log
touch ${VVV_PATH_TO_SITE}/log/access.log
# Install and configure the latest stable version of WordPress
cd ${VVV_PATH_TO_SITE}
if ! $(wp core is-installed --allow-root); then
  wp core download --path="${VVV_PATH_TO_SITE}" --allow-root
  wp core config --dbname="${VVV_SITE_NAME}" --dbuser=wp --dbpass=wp --quiet --allow-root
  wp core multisite-install --url="${VVV_SITE_NAME}.test" --quiet --title="${VVV_SITE_NAME}" --admin_name=admin --admin_email="admin@${VVV_SITE_NAME}.test" --admin_password="password" --allow-root
else
  wp core update --allow-root
fi
```
Puedes echar un vistazo a los repositorios indicados en el punto anterior y revistar los archivos de configuración de cada uno de ellos.

En cuanto al archivo `vvv-nginx.conf` es simplemente la configuración del servidor. El ejemplo básico puede ser este:

```json
server {
  listen 80;
  listen 443 ssl;
  server_name {vvv_site_name}.test;
  root {vvv_path_to_site};
  error_log {vvv_path_to_site}/log/error.log;
  access_log {vvv_path_to_site}/log/access.log;
  set $upstream {upstream};
  include /etc/nginx/nginx-wp-common.conf;
}
```

Con todo configurado, ejecutamos en la terminal `vagrant up` dentro del directorio VVV y ya debería arrancar nuestra máquina virtual. En la URL [vvv.test](http://vvv.test/) tenemos el Dashboard de VVV con accesos director a PhpMyAdmin y a los distintos sitios WordPress que hemos creado. La primera vez tarda unos minutos en descargar todo, pero después ya arrancan casi instantáneamente.

Cada vez que hagamos un cambio en cualquier archivo de configuración, debemos ejecutar `vagrant up --provision` para que cargue de nuevo todas las configuraciones.

En futuras publicaciones veremos como crear entornos de desarrollo WordPress con otras herramientas. [Aquí puedes ver como crear un entorno de desarrollo con Docker](https://barcia.gal/blog/crear-entorno-de-desarrollo-wordpress-con-docker/).
