# Veckans utmaning

Lägg veckoutmaningar som markdownfiler i den här mappen.

Appen byter aktiv utmaning varje måndag kl. 06.00 svensk tid.

Filnamn som stöds:

```text
vecka-01.md
vecka-1.md
vecka-23.md
```

Rekommenderat format är `vecka-XX.md`, enligt svensk/ISO-kalendervecka. Exempel:

```text
vecka-23.md
```

Om det inte finns någon fil för aktuell vecka visar appen ett meddelande om att det saknas utmaning den här veckan.

Exempel på frontmatter:

```md
---
vecka: 23
title: Prova ett nytt AI-arbetssätt
---
```
