# PWA Notes

Prueba de concepto de una aplicación PWA Offline-First

## Primeros pasos

```
git clone https://github.com/pfraces/pwa-notes
cd pwa-notes
npm install
```

Este proyecto dispone de 2 builds (DEV y PROD):

- **DEV:** No instala el service worker por lo que no se puede considerar PWA
  pero permite un flujo de desarrollo fluído recargando los servidores al
  detectar cambios
- **PROD:** Instala el service worker que permite instalar la PWA como
  aplicación de escritorio y trabajar en modo offline

Comandos para ejecutar cada build y levantar los servidores:

- **DEV:** `npm run start:dev`
- **PROD:** `npm run start:prod`
- `npm start` ejecuta el build de DEV por defecto

Se puede acceder a la aplicación navegando a <http://localhost:8080>

## Objetivos

Resolver dudas sobre el enfoque Offline-First

### Instalación

- [ ] Pasos a seguir para instalar la PWA
- [ ] Se puede instalar en escritorio Windows 10?
- [ ] Se puede instalar desde la primera carga?

### Actualización

- [ ] Pasos a seguir para actualizar la PWA

### Persistencia

- [ ] Quota de disco: Porcentaje sobre la capacidad total
- [ ] Cómo activar el almacenamiento persistente
- [ ] Estrategias al llegar al máximo de quota

### Offline - Online

- [ ] Experiencia de usuario en cada modo
- [ ] Funcionalidades disponibles en cada modo

## Tecnologías usadas

### Cliente

- [Vue](https://vuejs.org/)
- [Vue Material](https://vuematerial.io/)
- [PouchDB](https://pouchdb.com/)

### Servidor

- [Express](https://expressjs.com)
- [LowDB](https://github.com/typicode/lowdb)

## Documentación

- [PWA - Progressive Web Applications](doc/pwa/index.md)

## Referencias

- [Build an offline-first, data-driven PWA](https://codelabs.developers.google.com/codelabs/workbox-indexeddb/index.html)
- [PouchDB - Getting Started](https://pouchdb.com/getting-started.html)
