// Genera los 50 audios del bingo con ElevenLabs y los guarda en la carpeta audio/.
// Se ejecuta UNA sola vez en tu computador. La API key nunca se sube a GitHub.
//
//   node generar-audios.js voces      -> muestra tus voces y su ID
//   node generar-audios.js            -> genera los audios que falten
//   node generar-audios.js prueba     -> genera solo uno (I-shout) para escuchar antes
//
// La clave va en el archivo elevenlabs-key.txt (está en .gitignore).
// La voz y la velocidad se cambian aquí abajo:

const VOICE_ID = "EXAVITQu4vr4xnSDxMaL"; // Sarah (voz gratis)
const SPEED = 0.8;                       // 0.7 = muy lento · 1.0 = normal

const fs = require("fs"), path = require("path"), vm = require("vm");
const dir = __dirname;
const keyFile = path.join(dir, "elevenlabs-key.txt");
if (!fs.existsSync(keyFile)) { console.log("Falta el archivo elevenlabs-key.txt con tu API key adentro."); process.exit(1); }
const KEY = fs.readFileSync(keyFile, "utf8").trim();

// Lee la lista de verbos de verbs.js
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(dir, "verbs.js"), "utf8") + ";this.VERBS=VERBS;this.LETTERS=LETTERS;", ctx);

async function voices() {
  const r = await fetch("https://api.elevenlabs.io/v1/voices", { headers: { "xi-api-key": KEY } });
  if (!r.ok) { console.log("Error", r.status, await r.text()); return; }
  const { voices } = await r.json();
  for (const v of voices) console.log(v.voice_id.padEnd(24), v.name, "·", Object.values(v.labels || {}).join(", "));
}

async function tts(l, v) {
  const out = path.join(dir, "audio", `${l}-${v}.mp3`);
  if (fs.existsSync(out)) { console.log("ya existe", l, v); return true; }
  const text = `${l}... <break time="1.2s" /> ${v}. <break time="1.5s" /> ${v}.`;
  const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`, {
    method: "POST",
    headers: { "xi-api-key": KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ text, model_id: "eleven_multilingual_v2",
      voice_settings: { stability: 0.6, similarity_boost: 0.8, style: 0.3, use_speaker_boost: true, speed: SPEED } })
  });
  if (!r.ok) { console.log("ERROR en", l, v, r.status, (await r.text()).slice(0, 300)); return false; }
  fs.writeFileSync(out, Buffer.from(await r.arrayBuffer()));
  console.log("ok", l, v);
  return true;
}

(async () => {
  const mode = process.argv[2];
  if (mode === "voces") return voices();
  fs.mkdirSync(path.join(dir, "audio"), { recursive: true });
  if (mode === "prueba") { await tts("I", "shout"); console.log("Escucha audio/I-shout.mp3. Si no te gusta, bórralo, cambia la voz y repite."); return; }
  for (const l of ctx.LETTERS) for (const [v] of ctx.VERBS[l]) {
    if (!(await tts(l, v))) { console.log("Me detuve. Revisa el error de arriba y vuelve a ejecutar: seguirá donde quedó."); return; }
  }
  console.log("¡Listo! Los 50 audios están en la carpeta audio/.");
})();
