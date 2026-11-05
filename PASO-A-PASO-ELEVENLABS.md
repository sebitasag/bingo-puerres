# ENGLISH BINGO: voz de ElevenLabs y GitHub Pages (gratis)

## Cómo funciona
GitHub Pages solo guarda archivos; no tiene un "backend" donde esconder una clave.
Si la API key estuviera en la página, cualquiera podría verla y gastarse tus créditos.

Por eso los audios se crean **una sola vez en tu computador** con ElevenLabs y se suben
como archivos MP3 en la carpeta `audio/`. La página solo los reproduce: no hay botones
ni claves, y no gasta créditos cada vez que juegas.

Si falta algún audio, la página usa la voz del computador, lenta y con pausas.

**Costo:** los 50 audios gastan unos 3.000 créditos, una sola vez. El plan gratis
da unos 10.000 al mes.

---

## Paso 1. Crear la cuenta gratis
1. Entra a **https://elevenlabs.io** → **Sign up**, con tu correo o con Google.
2. Elige el plan **Free**. No pide tarjeta.

## Paso 2. Crear la API key
1. Abre **https://elevenlabs.io/app/developers/api-keys**
   (o, en el menú de la izquierda, **Developers → API Keys**).
2. Pulsa **Create API Key** y ponle de nombre `english bingo`.
3. Permisos: **Text to Speech → Access** y **Voices → Read**.
4. Pulsa **Create** y **copia la clave** (empieza por `sk_`). Solo se muestra una vez.

## Paso 3. Guardar la clave en tu computador
1. En la carpeta `Bingo`, crea un archivo de texto llamado **`elevenlabs-key.txt`**.
2. Pega dentro la clave y guarda.

Este archivo **no se sube a GitHub**: el archivo `.gitignore` ya lo excluye.

## Paso 4. Elegir la voz
1. En la carpeta `Bingo`, haz clic derecho → **Abrir en Terminal**.
2. Escribe:
   ```
   node generar-audios.js voces
   ```
   Sale la lista de tus voces con su **ID** (un código como `21m00Tcm4TlvDq8ikWAM`).
3. Para escuchar las voces antes, entra a **elevenlabs.io → Voices**.
4. Abre `generar-audios.js` con el Bloc de notas y cambia estas dos líneas de arriba:
   ```js
   const VOICE_ID = "21m00Tcm4TlvDq8ikWAM"; // pega aquí el ID de tu voz
   const SPEED = 0.8;                       // 0.7 = muy lento · 1.0 = normal
   ```

## Paso 5. Probar con un solo audio
```
node generar-audios.js prueba
```
Abre `audio/I-shout.mp3` y escúchalo. Debe decir *"I… shout… shout"*.
Si no te gusta, borra ese archivo, cambia la voz o la velocidad y repite.

## Paso 6. Generar los 50 audios
```
node generar-audios.js
```
Tarda uno o dos minutos. Al final dice **¡Listo!** y la carpeta `audio/` tiene 50 archivos MP3.
Si se corta, vuelve a ejecutarlo: sigue donde quedó y no repite los que ya hizo.

## Paso 7. Subir a GitHub Pages
1. Crea un repositorio en GitHub, por ejemplo `english-bingo`.
2. Sube estos archivos:
   - `index.html`
   - `english-bingo.html`
   - `verbs.js`
   - la carpeta `audio/` completa
   - **No subas** `elevenlabs-key.txt`.
3. En el repositorio ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**,
   la rama **main** y la carpeta **/ (root)**, y pulsa **Save**.
4. En uno o dos minutos la página estará en
   `https://TU-USUARIO.github.io/english-bingo/`.

> Si subes los archivos arrastrándolos en la web de GitHub, no hay riesgo de subir la clave:
> solo se sube lo que arrastres.

---

## Si algo falla
| Lo que pasa | Qué hacer |
|---|---|
| `Falta el archivo elevenlabs-key.txt` | Revisa el nombre exacto. Windows a veces lo guarda como `elevenlabs-key.txt.txt`. |
| `ERROR ... 401` | La clave está mal copiada o le falta un permiso (Paso 2). |
| `ERROR ... 402` o `quota` | Se acabaron los créditos del mes. Espera al próximo mes; el script sigue donde quedó. |
| Una voz de la biblioteca da error | Algunas voces de la biblioteca son solo para planes de pago. Usa una de las que vienen por defecto. |
| En la página no suena la voz bonita | Revisa que la carpeta `audio/` esté subida y que los nombres sean como `I-shout.mp3`. |
