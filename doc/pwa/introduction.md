# PWA - Progressive Web Applications

Las aplicaciones web progresivas usan las APIs web modernas junto a una
estrategia de mejoras progresivas para crear aplicaciones multi-plataforma.
Estas apps funcionan en todos los dispositivos y ofrecen varias características
que brindan al usuario las mismas ventajas y mejoras que las aplicaciones
nativas.

## ¿Qué es una Progressive Web App?

Las PWA son apliaciones web que usan un número especifico de tecnologías y
patrones estandars que les permiten aprovechar tanto las caracteristicas de
aplicaciones web como las de apliciones nativas.

Las aplicaciones nativas se integran mejor con el sistema operativo y por lo
tanto ofrecen una experiencia más fluida a los usuarios que una aplicación web.
Puedes instalar una aplicación nativa que funcionará offline, y los usuarios
adoran presionar los íconos para acceder a sus aplicaciones favoritas, antes que
navegar usando el navegador.

PWA nos da la capacidad de crear web apps que puedan disfrutar de las mismas
ventajas que una aplicación nativa.

El término "Aplicación Web Progresiva" no es un nombre formal u oficial. Es sólo
una abreviatura usada inicialmente por Google para el concepto de crear una
aplicación flexible y adaptable usando solo tecnologías web.

## ¿Qué hace a una aplicacion ser una PWA?

Las PWA no son creadas con una sola tecnología. Representan una nueva filosofia
para construir aplicaciones web, involucrando algunos patrones específicos,
APIs, y otras caracteristicas. No es tan obvio si una aplicación web es una PWA
o no desde un primer vistazo. Una app podría ser considerada una PWA cuando
cumple ciertos requerimientos, o implementa un conjunto de caracteristicas
dadas: trabaja offline, es instalable, es fácil de sincronizar, puede enviar
notificaciones push, etc.

Estas son algunos principios clave que una aplicación web debe tratar de probar
para ser identificad como una PWA:

- **Descubrible**, así el contenido podrá ser encontrado por los motores de
  búsqueda.
- **Instalable**, así podra verse en la pantalla de inicio del dispositivo.
- **Enlazable**, así podrás compartirla con solo enviar la direccion URL.
- **Independiente de la red**, así podrá funcionar offline o con una conexión
  lenta.
- **Progresiva**, así podrá ser usable en navegadores viejos, pero completamente
  funcional en las ultimas versiones de los navegadores.
- **Reconectable**, así se podrán enviar notificaciones cuando haya contenido
  nuevo disponible.
- **Responsive**, así podrá ser usada en cualquier dispositivo con un navegador
  y una pantalla: teléfonos móviles, tablets, laptops, TVs, etc.
- **Segura**, así la conexón entre el usuario y la app está protegida contra
  terceros que intenten acceder a datos sensibles

## Ventajas

- Una disminución en el tiempo de carga después de que la app haya sido
  instalada, gracias a cachear con Service Workers, mientras guardamos precioso
  ancho de banda y tiempo. Las PWAs tienen una carga casi instantánea (a partir
  de la segunda visita).
- La habilidad de actualizar solo el contenido que ha cambiado cuando una
  actualizacion este disponible. En contraste, con una app nativa, incluso la
  más ligera modificación puede obligar al usuario a descargar la aplicación
  entera otra vez.
- Se ve y se siente que está más integrada con la plataforma nativa: iconos de
  aplicaciones en la pantalla de inicio, aplicaciones que se ejecutan
  automáticamente en modo de pantalla completa, etc.
- Reconectar con los usuarios por medio del sistema de notificaciones y tambien
  mensajes push, dirijido a usuarios más comprometidos y con mejores indices de
  conversion.

## Offline First

La irrupción del smartphone trajo consigo la tendencia **Mobile First**: diseñar
una web pensando en su visualización móvil y a partir de ahí optimizarla para la
pantalla del ordenador.

Los usuarios no están todo el tiempo con conexión, ya sea por estar de viaje, no
tener cobertura, no querer gastar datos, etc. Por ello aparece la tendencia
**Offline First**

Las aplicaciones _Offline-First_ permiten mover el contenido del servidor al
cliente. Si una aplicación puede acceder al servidor solo cuando lo necesita en
lugar de todo el tiempo será más rápida y fiable. Esto es particularmente
significativo cuando el contenido no cambia a menudo pero los usuarios necesitan
acceder rápidamente a este.

Para que una aplicación se considere _Offline-First_ debe asegurar que tanto el
código como los datos necesarios para su funcionamiento no sean dependientes de
la presencia de conexión a la red.

- **Código disponible offline:** Mediante el uso de los _Service Workers_ y el
  almacenamiento en _Cache_ el código de la aplicación se puede cargar sin
  necesidad de conexión.
- **Datos disponibles offline:** Mediante el uso de los sistemas de persistencia
  local como _Local Storage_ o _IndexedDB_ los datos se pueden almacenar en el
  cliente. Los datos pueden replicarse desde y hacia el servidor cuando la
  conexión a la red esté disponible.

## Referencias

- <https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps>
- <https://hasura.io/blog/design-guide-to-offline-first-apps/>
