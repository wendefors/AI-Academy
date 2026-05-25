---
Datum: 2026-05-04
tags:
  - AI
  - vibeCoding
---
# Syfte

Skapa och underhåll en AI-läsbar projektstruktur som fungerar som:
- långsiktig projektkontext
- onboarding för nya utvecklare eller AI-assistenter
- stabilt minne mellan chatsessioner
- underlag för framtida AI-agenter, RAG och MCP-servrar
- teknisk dokumentation och beslutshistorik

Målet är att projektet snabbt ska kunna förstås utan att någon behöver läsa hela Git-historiken eller tidigare chattar.

---

# Struktur som ska finnas

Projektet ska använda följande struktur:

```text
project-memory/
│
├── project-context.md
├── current-state.md
│
├── decisions/
│   ├── 001-xxx.md
│   ├── 002-zzz.md
│   └── ...
│
├── docs/
│   └── architecture/
│       ├── example: frontend.md
│       ├── example: backend.md
│       ├── example: database.md
│
└── prompts/
    ├── README.md
    ├── local/
    └── ...
```

Alla filer behöver inte existera direkt, men strukturen ska användas konsekvent när projektet växer.

---

# Viktiga regler

## Git och lokal kontext

- Lägg följande filer/mappar i `.gitignore` om de inte redan är ignorerade:
  - `project-context.md`
  - `current-state.md`
  - eventuella lokala AI-anteckningar eller experimentella promptfiler

- Dessa filer är primärt lokal arbetskontext och ska normalt inte pushas till Git.

- Arkitekturdocs och decisions kan däremot versioneras om de bedöms vara långsiktigt värdefulla.

---

## Säkerhet

Skriv aldrig:
- API-nycklar
- tokens
- lösenord
- service-role keys
- privata länkar
- persondata
- interna åtkomstuppgifter
- exakta instruktioner för att kringgå skydd

Om relevant:
- beskriv abstrakt istället

Exempel:
- skriv “adminvy skyddas via kod”
- skriv inte själva koden

---

## Dokumentationsprinciper

Dokumentationen ska vara:
- AI-läsbar
- mänskligt läsbar
- tydlig
- kompakt
- aktuell
- praktiskt användbar

Prioritera:
- signal över brus
- nuvarande sanning över historiska detaljer
- tydlighet över fullständighet

Undvik:
- dagboksliknande loggar
- långa kronologiska historier
- irrelevant historik
- duplicerad information

---

# `project-context.md`

## Syfte

Denna fil är projektets huvudsakliga och stabila kontextkälla.

Tänk:
> “Om en ny AI-assistent vaknade upp idag — vad behöver den veta för att förstå projektet?”

---

## Ska innehålla

### 1. Översikt
- projektets syfte
- problem som löses
- målgrupp
- kärnfunktioner

### 2. Nuvarande status
- projektets aktuella läge
- implementerade features
- kända begränsningar
- teknisk skuld

### 3. Teknisk arkitektur
- övergripande arkitektur
- teknologier
- viktiga filer/moduler
- integrationspunkter
- viktiga designbeslut

### 4. Data, säkerhet och drift
- typ av data
- säkerhetsprinciper
- miljövariabler utan värden
- deploy/drift-principer
- backupstrategier
- regler för produktion/shared data

### 5. Sprint- och utvecklingshistorik
- större milstolpar
- viktiga vägval
- lärdomar
- förändringar i riktning

Kortfattat och tidlöst.

### 6. Arbetsprinciper
- kodstandarder
- namngivning
- teststrategier
- verifieringskommandon
- viktiga utvecklingsprinciper
- saker som ska undvikas

### 7. Nästa steg
- prioriterade features
- pågående arbete
- öppna frågor

---

# `current-state.md`

## Syfte

Denna fil fungerar som projektets korttidsminne.

Den ska beskriva:
- vad som händer just nu
- aktivt fokus
- nuvarande blockers
- senaste större förändringar
- närmaste nästa steg

---

## Viktiga regler

- Kort och operativ
- Får förändras ofta
- Ska spegla aktuell verklighet
- Behöver inte vara tidlös

---

## Typiskt innehåll

- aktiv migrering
- nuvarande buggar
- pågående refactors
- aktuell sprint
- experiment
- temporära workarounds

---

# `decisions/`

## Syfte

Mappen innehåller viktiga arkitektur- och projektbeslut.

Tanken är att kunna svara på:
> “Varför gjorde vi så här?”

---

## Format

En fil per beslut:

```text
001-use-postgres.md
002-local-hosting.md
003-remove-realtime.md
```

---

## Struktur för beslut

```md
# Titel

## Status
Proposed / Accepted / Deprecated

## Kontext
Varför behövdes beslutet?

## Beslut
Vad beslutades?

## Konsekvenser
Fördelar, nackdelar och påverkan.
```

---

## Viktiga regler

- Fokusera på långlivade beslut
- Dokumentera tradeoffs
- Skriv kort och konkret
- Uppdatera status om beslut ändras

---

# `docs/architecture/`

## Syfte

Detaljerad teknisk dokumentation för systemets uppbyggnad.

Här dokumenteras:
- hur systemet fungerar
- inte sprintstatus eller featureönskemål

---

## Exempel på filer

### `frontend.md`
- frontendarkitektur
- routing
- state management
- UI-principer

### `backend.md`
- API-struktur
- services
- authflöden
- integrationslogik

### `database.md`
- tabeller
- relationer
- migrationsprinciper
- RLS-strategier
- backupstrategi

### `deployment.md`
- Docker
- Coolify
- miljövariabler
- build/deploy-flöden
- domäner
- reverse proxy
- SSL

### `integrations.md`
- externa API:er
- webhooks
- tredjepartstjänster
- synkflöden

---

## Viktiga regler

- Dokumentera system, inte implementationdetaljer
- Fokusera på förståelse
- Uppdatera vid större arkitekturförändringar
- Undvik duplicering från `project-context.md`

---

# `prompts/`

## Syfte

Samla återanvändbara prompts för:
- AI-assistenter
- kodgenerering
- refactoring
- analys
- dokumentation
- agents/MCP-flöden

---

## Exempel

```text
prompts/
│
├── generate-component.md
├── review-api.md
├── create-migration.md
└── summarize-feature.md
```

---

# Löpande uppdatering

Dokumentationen ska kontinuerligt:
- konsolideras
- förfinas
- komprimeras
- hållas aktuell

Inte:
- växa som en historisk logg

---

## Konkret

- skriv inte flera entries för samma förändring
- ta bort irrelevant information
- skriv om istället för att stapla uppdateringar
- slå ihop historik till stabil kunskap

---

# Mental modell

Tänk att:
- en ny utvecklare
- en AI-agent
- eller framtida du själv

ska kunna förstå projektet snabbt genom att läsa dessa filer.

De ska förstå:
- vad projektet gör
- hur det fungerar
- varför viktiga beslut tagits
- vad som händer just nu
- vad som är viktigt framåt

…utan att behöva läsa hela Git-historiken eller gamla chats.