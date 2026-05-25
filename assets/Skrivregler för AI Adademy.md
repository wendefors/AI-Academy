## Syfte

Detta dokument definierar:
- tonalitet
- struktur
- pedagogik
- markdown-standard
- AI-genereringsregler
- stilistiska begränsningar

Målet är att skapa innehåll som:
- känns mänskligt skrivet
- är pedagogiskt och pragmatiskt
- respekterar läsarens tid
- fungerar bra i markdown
- är förberett för framtida webbapp/RAG/sökbar kunskapsbas
- kan genereras konsekvent med hjälp av AI

---

# Grundprinciper

## 1. Respektera läsarens tid

Varje stycke ska motivera sin existens.

Undvik:
- fluff
- upprepningar
- långa introduktioner
- självklarheter
- överförklaringar

Fokusera på:
- tydlighet
- konkreta exempel
- praktisk nytta
- hög signal-to-noise ratio

---

## 2. Förändra beteenden, inte bara förståelse

Målet är inte att läsaren ska kunna prata om AI.

Målet är att läsaren ska:
- börja arbeta annorlunda
- tänka annorlunda
- testa nya arbetssätt
- bygga egna workflows
- automatisera delar av sitt arbete
- samarbeta med AI på ett mer medvetet sätt

Fråga alltid:
> Vad ska läsaren börja göra annorlunda efter denna modul?

---

## 3. Principer framför verktyg

Undvik att:
- låsa innehåll till specifika produkter
- fokusera på UI
- skriva versionsspecifikt material

Fokusera istället på:
- arbetssätt
- mental models
- workflows
- kontext
- systemsyn
- återanvändbarhet

---

# Tonalitet

## Texten ska kännas

- pedagogisk
- rak
- neutral
- saklig
- pragmatisk
- professionell
- mänsklig
- tydlig
- lugn
- teknisk utan att vara akademisk

---

## Texten ska INTE kännas

- evangeliserande
- hypeig
- corporate
- LinkedIn-aktig
- överpolerad
- säljig
- motivational
- futuristisk
- “AI-genererad”

---

# Språkregler

## Primärt språk

- Svenska är standardspråk
- Engelska AI-termer får användas när de är etablerade

Exempel:
- workflows
- prompting
- context window
- skills
- embeddings
- inference
- agents
- vibe coding

---

## Rubriker

Rubriker ska:
- vara på svenska
- vara tydliga
- vara konkreta
- undvika clickbait
- undvika title case

Bra:

```md
# Kontext är viktigare än prompts
```

Dåligt:

```md
# The Future Of AI Workflows
```

---

## Begrepp

När nya begrepp introduceras:
- ge en kort förklaring
- undvik långa definitioner
- länka vidare till etablerade externa källor vid behov

---

# Strukturregler

## Rekommenderad modulstruktur

Varje modul bör huvudsakligen följa:

1. Kort introduktion
2. Teori och mental modell
3. Konkreta exempel
4. Praktiskt workflow/användning
5. Labb eller praktiskt moment
6. Sammanfattning
7. Checklista för att komma igång
8. Utmanande/reflekterande tanke

Strukturen får vara flexibel, men:
- teori ska komma före praktik
- praktik ska avsluta modulen

---

## Stycken och rytm

Använd:
- korta till medellånga stycken
- variation i rytm
- blandning av:
  - löpande text
  - listor
  - exempel
  - scenarion

Undvik:
- väggar av text
- överdriven användning av punktlistor
- överstrukturerade texter
- identiska styckesrytmer

---

# Pedagogiska regler

## Stegrande komplexitet

Innehåll ska:
- börja intuitivt
- byggas lager för lager
- använda analogier vid behov
- introducera komplexitet gradvis

---

## Exempel

Exempel ska:
- vara realistiska
- vara arbetsnära
- fokusera på faktisk användning
- hjälpa läsaren tänka i workflows

Undvik:
- artificiella toy examples
- generiska “skriv en prompt om en katt”-övningar

---

## Praktiska moment

Praktiska moment ska:
- ha tydliga mål
- tillåta fri väg till lösning
- uppmuntra användning av LLM under labben
- fokusera på läsarens riktiga arbete
- skapa faktisk beteendeförändring

Labs ska kännas som:
- experiment
- förbättring av vardagen
- prototyping
- utforskning

Labs ska INTE kännas som:
- skoluppgifter
- examinationer
- certifieringsmoment

---

# Anti-AI-slop-regler

## Undvik generiska AI-mönster

UNDVIK:
- emojis
- ikoner
- överanvändning av em dashes (—)
- motivational tone
- “framtiden är här”
- “AI revolutionerar allt”
- “i dagens snabbt föränderliga landskap”
- “let’s dive in”
- “inte bara X utan Y”
- överdriven optimism
- retoriska överdrifter
- överdriven användning av tankstreck
- repetitiva meningsstarter
- repetitiva sammanfattningar
- överdrivet perfekta strukturer
- corporate-språk
- fluffiga introduktioner
- buzzwords utan konkret innebörd

---

## Undvik LinkedIn-ton

Texten ska inte låta som:
- thought leadership
- marknadsföring
- keynote-slides
- AI-evangelism
- startup-copy

Undvik formuleringar som:
- “AI förändrar allt”
- “framtidens arbete”
- “revolutionera ditt sätt att arbeta”
- “ta din produktivitet till nästa nivå”

---

## Undvik överpolering

Texten ska:
- kännas mänsklig
- tillåta viss ojämnhet
- prioritera tydlighet framför retorik
- inte kännas för perfekt komponerad

Variation är bra.

Förutsägbarhet är dåligt.

---

# Innehållsprinciper

## Fokusområden

Innehållet ska genomgående fokusera på:
- AI som collaborator
- AI-first mindset
- kontext framför prompts
- workflows framför enstaka frågor
- skills som återanvändbara AI-förmågor
- markdown som AI-native format
- automation
- systemsyn
- agentiskt arbete
- vibe coding
- personal knowledge systems

---

## Transparens

Var transparent med:
- osäkerheter
- begränsningar
- förändringstakt inom AI
- tradeoffs

Undvik att skriva kategoriskt när området förändras snabbt.

---

# Markdown-standard

## Frontmatter

Alla moduler ska innehålla frontmatter.

Exempel:

```md
---
title: Kontext är viktigare än prompts
slug: context-over-prompts
level: 1
category: skills-and-context
tags:
  - context
  - workflows
  - prompting
estimated_time: 10 min
prerequisites: []
---
```

---

## Metadata

Varje modul ska innehålla:
- title
- slug
- level
- category
- tags
- estimated_time
- prerequisites

---

## Strukturella regler

Varje modul ska vara:
- liten
- fokuserad
- återanvändbar
- indexerbar
- webbapp-kompatibel
- lätt att söka/RAG:a

Undvik:
- gigantiska monolitiska dokument
- flera huvudämnen i samma fil

---

# Viktigaste principen

Materialet ska hjälpa människor att:
- tänka annorlunda
- arbeta annorlunda
- bygga egna system
- samarbeta med AI
- automatisera vardagen
- förändra sina arbetssätt på djupet

Målet är inte konsumtion av information.

Målet är förändring i praktiken.