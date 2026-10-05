# Tarea 2: Navegadores, motores y primera página interactiva
**Módulo:** Desarrollo Web en Entorno Cliente (DWEC)  
**Autor:** Achraf Akhmoul  

---

## Explicación de la tarea

En esta tarea he creado un sitio web compuesto por dos páginas integradas con Bootstrap 5 y un archivo de JavaScript externo, siguiendo todos los requisitos del Tema 02.

---

## 1. Evidencias y Capturas de Pantalla

### a. `index.html` en versión escritorio
![index.html en escritorio](capturas/01-index-pc.png)  
*Vista de la página principal en el navegador con la tabla de motores y mi nombre (Achraf Akhmoul) visible en la barra de navegación.*

### b. `interaccion.html` en modo dispositivo móvil
![interaccion.html en móvil](capturas/02-interaccion-movil.png)  
*Vista de la segunda página usando la emulación de móvil con F12 para comprobar que es adaptativa y no necesita scroll horizontal.*

### c. Consola con trazas de los tres botones
![Trazas en consola](capturas/03-consola-trazas.png)  
*Consola del navegador donde se ven los mensajes (`console.log`, `console.error` y `console.warn`) al hacer clic en los tres botones.*

### d. Alerta del botón «¿Qué navegador soy?»
![Alert de UserAgent](capturas/04-alert-useragent.png)  
*Ventana de aviso `alert()` que salta al pulsar el botón para mostrar el `userAgent`.*

### e. Entorno VS Code con Live Server
![VS Code y Live Server](capturas/05-vscode-liveserver.png)  
*Captura de mi pantalla en VS Code con la carpeta `tema02` y la extensión Live Server funcionando.*

---

## 2. «Quién hace qué» en el botón «Saludar»

Tomando como ejemplo el botón **«Saludar»**:

* **HTML (`interaccion.html`):** Crea el botón con la etiqueta `<button>` y usa `onclick="saludar()"` para llamar a la función cuando se pulsa.
* **CSS / Bootstrap:** Con las clases `btn btn-primary` le da la forma de botón, el color azul y los estilos responsivos.
* **JavaScript (`js/app.js`):** La función `saludar()` muestra la ventana emergente con `alert("¡Hola! Soy Achraf Akhmoul.")` y escribe una línea en la consola con `console.log(...)`.

---

## 3. Comparativa de cadenas `userAgent`

Al revisar `navigator.userAgent` en navegadores como Chrome o Edge, sale una cadena como esta:

`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36`

### ¿Por qué aparecen estas palabras?
* **`Mozilla/5.0`:** Se mantiene por motivos de compatibilidad histórica con webs antiguas que buscaban este identificador.
* **`AppleWebKit/537.36`:** Muestra la base del motor de renderizado del que proviene Blink (el motor de Chrome y Edge).
* **`Safari/537.36`:** Se incluye para evitar que algunos servidores bloqueen la página si no reconocen un navegador estándar.
* **`Chrome/...`:** Indica la versión concreta del navegador que se está usando.

---

## 4. Fuentes consultadas

* Documentación oficial de Bootstrap 5: https://getbootstrap.com/docs/5.3/
* CanIUse (CSS Container Queries): https://caniuse.com/css-container-queries
* MDN Web Docs (navigator.userAgent): https://developer.mozilla.org/es/docs/Web/API/Navigator/userAgent