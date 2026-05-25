# Frontendarkitektur

## Översikt

Frontend består av tre huvudfiler:
- `index.html` för struktur
- `styles.css` för layout och visuell design
- `app.js` för datahämtning, state och rendering

Appen använder ingen frontendramverk och inga externa runtime-bibliotek.

## Modulhantering

`app.js` innehåller `moduleFiles`, en ordnad lista över markdownfiler. Vid start hämtas varje fil med `fetch`.

Varje modul förväntas ha frontmatter med:
- `title`
- `slug`
- `level`
- `category`
- `tags`
- `estimated_time`
- `prerequisites`

Metadata används för navigation, kategorikort, läsvy och progress.

## State

State hålls i ett enkelt objekt:
- `modules`: alla laddade moduler
- `activeSlug`: aktuell modul
- `filter`: aktivt filter i vänsterspalten
- `completed`: set med slugs för genomförda moduler

Progress sparas i `localStorage` under nyckeln `ai-academy-progress`.

## Rendering

Appen renderar:
- progresspanel
- modulnavigation
- kategorikort på startsidan
- läsvy för vald modul

När en modul öppnas:
- startsidans block döljs
- modulens metadata visas överst
- markdowninnehållet renderas till HTML
- URL-hashen uppdateras till modulens slug

## Markdown och frontmatter

Frontmatter parsas med en enkel lokal parser.

Markdown stöder de format som används i modulerna idag:
- rubriker
- stycken
- punktlistor
- numrerade listor
- blockquote
- horisontell linje
- kodblock
- inline code
- fetstil och kursiv

Parsern är avsiktligt enkel. Om innehållet börjar använda mer avancerad markdown bör en etablerad markdownparser övervägas.

## UI-principer

Designen ska vara:
- ren
- lugn
- läsbar
- användarfokuserad
- responsiv

Startsidan ska förklara utbildningen kort och hjälpa användaren välja väg. Modulsidor ska prioritera läsning.

Mobil:
- sidomenyn ligger off-canvas
- menyknappen ligger i en fast toppremsa
- läsvyn har genomförd-knapp både överst och längst ner
