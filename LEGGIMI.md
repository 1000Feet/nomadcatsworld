# Sito di Nomad Cats World — cosa c'è in questa cartella

Una pagina web pronta da rifinire, più le istruzioni per Claude Code.

## Guardarla subito

La pagina sta nella cartella `sito/`, l'unica che viene pubblicata. Apri `sito/index.html` con un doppio clic. Per vederla come sarà online, nel Terminale:

```bash
cd /percorso/di/questa/cartella
python3 -m http.server 8000 --directory sito
```

poi apri http://localhost:8000 nel browser.

Le immagini in `design/` mostrano la pagina finita, su computer e su telefono.

## Darla a Claude Code

1. Apri questa cartella in Claude Code.
2. Claude Code legge da solo il file `CLAUDE.md`, che contiene regole, struttura e l'elenco delle cose da completare.
3. Scrivigli, per esempio: "Leggi CLAUDE.md e dimmi cosa manca per pubblicare il sito".

## Cosa è finto, per ora

- **I pulsanti App Store e Google Play** non portano da nessuna parte: scorrono fino al modulo. I link veri si mettono in `sito/js/main.js`. Prima della pubblicazione vanno sostituiti con i badge ufficiali di Apple e Google.
- **Il viaggio di "Olive"** è un esempio inventato, e la pagina lo dice.

## Cosa è pronto ma va controllato da te

- **Il modulo email** invia a Netlify Forms. Funziona solo sul sito pubblicato su Netlify, dopo aver attivato "Enable form detection" nella sezione Forms del progetto.
- **La pagina Privacy** è una bozza completa: va fatta rivedere da un legale e vanno confermate le frasi su come funziona l'app.
- **Il prezzo** (2 gatti gratis, Nomad Pass) è stato tolto dalla pagina perché nell'app non è costruito.
