# PWA - Progressive Web Applications

![pwa](pwa.png)

Las aplicaciones web progresivas usan las APIs web modernas junto a una
estrategia de mejoras progresivas para crear aplicaciones multi-plataforma.
Estas apps funcionan en todos los dispositivos y ofrecen varias características
que brindan al usuario las mismas ventajas y mejoras que las aplicaciones
nativas.

## Introducción

- [ ] Qué es?
- [ ] Qué aporta?

### Offline First

- [ ] En qué se basa esta metodología?

## Instalación

- [ ] Código
  - [ ] Manifest y assets
  - [ ] Service Worker
- [ ] Acciones de usuario
- [ ] Dispositivos soportados
- [ ] Se puede instalar desde la primera carga?

## Offline

- [ ] Funcionalidades disponibles

### Persistencia

- [ ] Cache de ficheros
- [ ] IndexedDB y wrappers (idb, pouchDB)
- [ ] Quota de disco
  - [ ] Quotas disponibles en diferentes dispositivos
  - [ ] Cómo detectar quota disponible?

### Service Worker

- [ ] Cómo funciona?
- [ ] Registro
- [ ] Actualización (invalidar versiones anteriores)
- [ ] Qué se puede hacer desde un SW?

## Online

- [ ] Funcionalidades disponibles
- [ ] Actualización (invalidar cache de ficheros)

## Offline - Online

- [ ] Cómo detectar en qué modo estamos?
- [ ] Compaginar ambos modos

## Estrategias de sincronización

- [ ] Réplica vs sincronizacion

### Réplica

- [ ] Full update
- [ ] Background sync (solo Chrome?)
- [ ] Deltas (ReST diffs)

### Sincronización

- [ ] Last wins
- [ ] Merge (CouchDB + PouchDB)
  - [ ] Restringir acceso a DB (reverse proxy, Hoodie, ...)
- [ ] Alternativas (Firebase, Scattlebutt, ...)

## Ecosistema

- [ ] [Workbox](https://developers.google.com/web/tools/workbox)
  - [ ] Script de generación de manifest
  - [ ] Background sync
  - [ ] Qué otras herramientas ofrece?
- [ ] [@vue/cli-plugin-pwa](https://cli.vuejs.org/core-plugins/pwa.html)
  - [ ] [workbox-webpack-plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)
  - [ ] [register-service-worker](https://github.com/yyx990803/register-service-worker)
- [ ] [webpack-pwa-manifest](https://github.com/arthurbergmz/webpack-pwa-manifest)
