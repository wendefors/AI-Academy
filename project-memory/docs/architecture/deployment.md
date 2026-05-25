# Drift och lokal körning

## Lokal körning

Appen körs lokalt med:

```bash
npm run dev
```

Preview-servern läser filer från projektroten och serverar statiska filer.

Standardport:

```text
3000
```

Valfri port kan anges med miljövariabeln `PORT`:

```bash
PORT=3010 npm run dev
```

## Verifiering

Kodsyntax verifieras med:

```bash
npm run build
```

Det kommandot kör:
- `node --check app.js`
- `node --check scripts/preview-server.mjs`

## Nätverkstest

Vid lokal test på telefon behöver telefonen vara på samma nätverk som datorn. Servern har testats via datorns lokala nätverksadress.

Exempel från aktuell miljö:

```text
http://192.168.1.124:3010
```

Den adressen kan ändras när nätverket ändras.

## Framtida hosting

Eftersom appen är statisk kan den hostas på valfri statisk hosting. Om hosting införs bör följande dokumenteras:
- vald plattform
- buildkommando
- publiceringsmapp
- domän
- cacheprinciper
- eventuell åtkomstbegränsning
