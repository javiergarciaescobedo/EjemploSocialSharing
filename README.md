# Pasos que se han realizado
## En la carpeta del proyecto:
### Ejecutar:
```sh
ionic cordova plugin add cordova-plugin-x-socialsharing
npm install @ionic-native/social-sharing
```
## Archivo ***app.module.ts***:
### Añadir ***SocialSharingen*** en los providers:
Añadir en la zona de los ***imports*** con:
```sh
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
```
Añadir ***SocialSharing*** en la lista de providers:
```sh
providers: [
    ..., 
    SocialSharing
  ],
```
## Archivo ***home.page.ts***:
Añadir en la zona de los ***imports*** con:
```sh
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
```
Añadir ***SocialSharing*** inyectado en el constructor:
```sh
constructor(private socialSharing: SocialSharing)
```
Se ejecuta con dentro del método que se desee
```sh
this.socialSharing.share()
```


