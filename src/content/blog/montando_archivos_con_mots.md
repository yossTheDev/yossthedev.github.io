---
title: "Montando archivos con MOTS"
description: "Una útil herramienta para servir archivos estáticos desde la terminal"
pubDate: "May 6 2023"
heroImage: "/mots_scr.png"
badge: "New"
tags: "cli tools"
---

Hola a todos 👋 hoy les traigo una pequeña herramienta para montar archivos estáticos desde la terminal, en cualquier sistema operativo de escritorio ya sea **Windows**, **Linux** o **MacOS**.

## Instalación

La instalacion es muy sencilla solo debemos disponer de una versión reciente de NodeJS instalada en nuestro dispositivo. Puedes visitar la pagina oficial de [NodeJS](https://nodejs.com) para las intrucciones de instalación en tu sistema. Luego de eso es solo ejecutar este comando:

``` bash
npm install -g mots
```

## Verificar

Después que termine la instalación ya tendremos esta herramienta en nuestro sistema, para verificar que se halla instalado correctamente, ejecuta el siguiente comando y debería devolverte la versión actual de MOTS

``` bash
mots --version
```

``` bash
mots/0.0.8 linux-x64 node-v16.17.0
```

## Montando Archivos

Para comenzar a servir archivos a través de tu red local, desplázate mediante la terminal al directorio que quieras servir y ejecuta el siguiente comando:

``` bash
mots serve .
```

O puedes evitar desplazarte pasando como parámetro la ruta que quieras montar, por ejemplo:

``` bash
mots serve path/to/folder
```

También podemos definir el puerto en que se ejecutará nuestro servidor:

``` bash
mots serve path/to/folder -p 8080
```

## Para Otro Artículo

MOTS es una herramienta simple pero poderosa, otra de sus características es la creación de APIs de prueba que puedes ejecutar localmente, muy útil si quieres testear un proyecto antes de conectarlo a la API de producción, y sobre esto hablaremos en otro artículo 😁

Si quieres averiguar esto por tu cuenta aquí te dejo el enlace al repositorio en [GitHub](https://github.com/yossTheDev/mots) de esta app, no te olvides dejarle una ⭐ estrella, esto me dice que te ha gustado y me lleva a seguir desarrollándola.
