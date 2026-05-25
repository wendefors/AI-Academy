# Lokal progress i webbläsaren

## Status

Accepted

## Kontext

Utbildningen behöver kunna visa vilka moduler användaren markerat som genomförda. Det är ännu inte beslutat om appen ska ha konton eller central lagring.

## Beslut

Progress sparas lokalt i webbläsaren via `localStorage`, med modulens `slug` som identifierare.

## Konsekvenser

Fördelar:
- ingen backend eller inloggning behövs
- enkelt att förstå och underhålla
- fungerar direkt i den statiska appen

Nackdelar:
- progress följer inte användaren mellan enheter
- progress kan försvinna om webbläsardata rensas
- ändrade slugs bryter kopplingen till tidigare progress
