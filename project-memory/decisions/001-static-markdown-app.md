# Statisk markdownbaserad app

## Status

Accepted

## Kontext

AI Academy består av ett antal utbildningsmoduler i markdown. Första versionen behöver vara enkel att bygga, lätt att ändra och kunna köras lokalt utan konto, databas eller deploymentflöde.

## Beslut

Appen byggs som en statisk frontend som läser moduler direkt från markdownfiler i `modules/`. Metadata ligger i frontmatter och används för navigation, kategorier, nivåer och tidsangivelser.

## Konsekvenser

Fördelar:
- låg komplexitet
- lätt att uppdatera modultexter
- ingen backend behövs
- innehållet är portabelt och AI-läsbart

Nackdelar:
- modulindex är tills vidare hårdkodat
- ingen central progress eller användarhantering
- enkel egen parsing kräver försiktighet om markdownformatet växer
