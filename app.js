const moduleFiles = [
  "modules/01-ai-first-tankesatt/1.1-fran-sokmotor-till-arbetsmotor.md",
  "modules/01-ai-first-tankesatt/1.2-ai-som-kollega.md",
  "modules/01-ai-first-tankesatt/1.3-kontext-ar-allt.md",
  "modules/01-ai-first-tankesatt/1.4-fran-dokument-till-system.md",
  "modules/02-arbetsfloden-och-produktivitet/2.1-moten-med-ai.md",
  "modules/02-arbetsfloden-och-produktivitet/2.2-research-och-analys.md",
  "modules/02-arbetsfloden-och-produktivitet/2.3-skriv-battre-snabbare.md",
  "modules/02-arbetsfloden-och-produktivitet/2.4-personliga-workflows.md",
  "modules/02-arbetsfloden-och-produktivitet/2.5-automatisera-sma-saker-forst.md",
  "modules/03-skills-och-kontext/3.1-vad-ar-en-skill.md",
  "modules/03-skills-och-kontext/3.2-fran-prompt-till-workflow.md",
  "modules/03-skills-och-kontext/3.3-markdown-som-ai-format.md",
  "modules/03-skills-och-kontext/3.4-bygg-ett-personligt-kontextbibliotek.md",
  "modules/03-skills-och-kontext/3.5-ai-minne-utan-minne.md",
  "modules/04-bygga-med-ai/4.1-du-behover-inte-vara-utvecklare.md",
  "modules/04-bygga-med-ai/4.2-vibe-coding.md",
  "modules/04-bygga-med-ai/4.3-bygg-sma-interna-verktyg.md",
  "modules/04-bygga-med-ai/4.4-ai-som-granssnitt.md",
  "modules/04-bygga-med-ai/4.5-fran-ide-till-fungerande-prototyp.md",
  "modules/05-agents-och-mcp/5.1-vad-ar-mcp.md",
  "modules/05-agents-och-mcp/5.2-verktyg-och-modeller.md",
  "modules/05-agents-och-mcp/5.3-ai-med-tillgang-till-varlden.md",
  "modules/05-agents-och-mcp/5.4-agentiska-workflows.md",
  "modules/05-agents-och-mcp/5.5-framtidens-kunskapsarbete.md",
  "modules/06-verktyg-i-praktiken/6.1-konversation-i-praktiken.md",
  "modules/06-verktyg-i-praktiken/6.2-dokument-och-research-i-praktiken.md",
  "modules/06-verktyg-i-praktiken/6.3-agentlagen-i-praktiken.md",
  "modules/06-verktyg-i-praktiken/6.4-organisationsintegrationer-i-praktiken.md",
  "modules/06-verktyg-i-praktiken/6.5-bygga-och-koda-i-praktiken.md"
];

const categoryInfo = {
  tankesatt: {
    title: "AI-first tänkesätt",
    summary: "Bryt gamla mentala modeller och börja arbeta med AI som collaborator."
  },
  "arbetsfloden-och-produktivitet": {
    title: "Arbetsflöden och produktivitet",
    summary: "Skapa vardagsnytta genom möten, analys, skrivande och små automatiseringar."
  },
  "skills-och-kontext": {
    title: "Skills och kontext",
    summary: "Bygg återanvändbar kontext, tydliga instruktioner och personliga system."
  },
  "bygga-med-ai": {
    title: "Bygga med AI",
    summary: "Gå från användning till skapande med prototyper och interna verktyg."
  },
  "agenter-och-system": {
    title: "Agenter, MCP och system",
    summary: "Förstå verktygsanrop, integrationer och mer agentiska arbetssätt."
  },
  "verktyg-i-praktiken": {
    title: "Verktyg i praktiken",
    summary: "Koppla utbildningens arbetssätt till konkreta AI-verktyg och praktisk användning."
  }
};

const levelInfo = {
  1: "Kom igång",
  2: "Bygg arbetssätt",
  3: "Fördjupa"
};

const state = {
  modules: [],
  activeSlug: "",
  filter: "all",
  query: "",
  completed: new Set(JSON.parse(localStorage.getItem("ai-academy-progress") || "[]"))
};

const elements = {
  nav: document.querySelector("#moduleNav"),
  categoryGrid: document.querySelector("#categoryGrid"),
  overview: document.querySelector("#overview"),
  overviewCount: document.querySelector("#overviewCount"),
  topbar: document.querySelector("#topbar"),
  reader: document.querySelector("#reader"),
  readerTitle: document.querySelector("#readerTitle"),
  readerMeta: document.querySelector("#readerMeta"),
  readerTags: document.querySelector("#readerTags"),
  readerBody: document.querySelector("#readerBody"),
  completeButton: document.querySelector("#completeButton"),
  completeButtonBottom: document.querySelector("#completeButtonBottom"),
  progressCount: document.querySelector("#progressCount"),
  progressBar: document.querySelector("#progressBar"),
  totalMinutes: document.querySelector("#totalMinutes"),
  moduleSearch: document.querySelector("#moduleSearch"),
  menuButton: document.querySelector("#menuButton"),
  homeButton: document.querySelector("#homeButton"),
  backdrop: document.querySelector("#backdrop")
};

init();

async function init() {
  state.modules = await loadModules();
  render();
  bindEvents();

  const requestedSlug = window.location.hash.replace("#", "");
  if (requestedSlug && state.modules.some((module) => module.slug === requestedSlug)) {
    openModule(requestedSlug, false);
  }
}

async function loadModules() {
  const results = await Promise.allSettled(moduleFiles.map(async (path, index) => {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const raw = await response.text();
    const { metadata, content } = parseFrontmatter(raw);
    return {
      ...metadata,
      path,
      content,
      order: index + 1,
      minutes: Number.parseInt(metadata.estimated_time, 10) || 0
    };
  }));

  const failed = results
    .map((result, index) => ({ result, path: moduleFiles[index] }))
    .filter(({ result }) => result.status === "rejected");

  if (failed.length) {
    console.error("Kunde inte läsa alla moduler:", failed);
  }

  return results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);
}

function bindEvents() {
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      document.querySelectorAll(".filter-button").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      renderNav();
    });
  });

  elements.moduleSearch.addEventListener("input", () => {
    state.query = elements.moduleSearch.value.trim().toLowerCase();
    renderNav();
  });

  elements.completeButton.addEventListener("click", toggleCompleted);
  elements.completeButtonBottom.addEventListener("click", toggleCompleted);

  elements.menuButton.addEventListener("click", openMenu);
  elements.homeButton.addEventListener("click", openHome);
  elements.backdrop.addEventListener("click", closeMenu);
}

function toggleCompleted() {
    if (!state.activeSlug) return;
    if (state.completed.has(state.activeSlug)) {
      state.completed.delete(state.activeSlug);
    } else {
      state.completed.add(state.activeSlug);
    }
    persistProgress();
    renderProgress();
    renderNav();
    renderCategories();
    updateCompleteButton();
}

function render() {
  renderProgress();
  renderNav();
  renderCategories();
  const totalMinutes = state.modules.reduce((sum, module) => sum + module.minutes, 0);
  const totalCategories = Object.keys(groupByCategory(state.modules)).length;
  elements.overviewCount.textContent = `${state.modules.length} moduler, ${totalCategories} områden`;
  elements.totalMinutes.textContent = formatDuration(totalMinutes);
}

function renderProgress() {
  const done = state.completed.size;
  const total = state.modules.length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  elements.progressCount.textContent = `${done} av ${total}`;
  elements.progressBar.style.width = `${percent}%`;
}

function renderNav() {
  const modules = filteredModules();
  const grouped = groupByCategory(modules);
  elements.nav.innerHTML = "";

  if (!modules.length) {
    const empty = document.createElement("p");
    empty.className = "empty-nav";
    empty.textContent = "Inga moduler matchar sökningen.";
    elements.nav.append(empty);
    return;
  }

  Object.entries(grouped).forEach(([category, modules]) => {
    const section = document.createElement("section");
    const title = document.createElement("h2");
    const list = document.createElement("div");

    title.className = "nav-group-title";
    title.textContent = categoryInfo[category]?.title || category;
    list.className = "nav-list";

    modules.forEach((module) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "module-link";
      button.classList.toggle("is-done", state.completed.has(module.slug));
      button.classList.toggle("is-active", state.activeSlug === module.slug);
      button.innerHTML = `
        <span class="module-status" aria-hidden="true">✓</span>
        <span>
          <span class="module-title">${escapeHtml(module.title)}</span>
          <span class="module-small">${formatDuration(module.minutes)}</span>
        </span>
        <span class="level-pill">${escapeHtml(levelInfo[module.level] || `Nivå ${module.level}`)}</span>
      `;
      button.addEventListener("click", () => openModule(module.slug));
      list.append(button);
    });

    section.append(title, list);
    elements.nav.append(section);
  });
}

function renderCategories() {
  const grouped = groupByCategory(state.modules);
  elements.categoryGrid.innerHTML = "";

  Object.entries(grouped).forEach(([category, modules]) => {
    const done = modules.filter((module) => state.completed.has(module.slug)).length;
    const minutes = modules.reduce((sum, module) => sum + module.minutes, 0);
    const info = categoryInfo[category] || { title: category, summary: "" };
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-card";
    button.innerHTML = `
      <div>
        <p class="eyebrow">${modules.length} moduler</p>
        <h3>${escapeHtml(info.title)}</h3>
        <p>${escapeHtml(info.summary)}</p>
      </div>
      <footer>
        <span>${done} av ${modules.length} klara</span>
        <span>${formatDuration(minutes)}</span>
      </footer>
    `;
    button.addEventListener("click", () => openModule(modules[0].slug));
    elements.categoryGrid.append(button);
  });
}

function openModule(slug, updateHash = true) {
  const module = state.modules.find((item) => item.slug === slug);
  if (!module) return;

  state.activeSlug = slug;
  elements.topbar.hidden = true;
  elements.overview.hidden = true;
  elements.categoryGrid.hidden = true;
  elements.reader.hidden = false;
  elements.readerTitle.textContent = module.title;
  elements.readerMeta.textContent = `${levelInfo[module.level] || `Nivå ${module.level}`} · ${categoryInfo[module.category]?.title || module.category} · ${formatDuration(module.minutes)}`;
  elements.readerTags.innerHTML = module.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
  elements.readerBody.innerHTML = markdownToHtml(module.content);
  updateCompleteButton();
  elements.homeButton.classList.remove("is-active");
  renderNav();
  closeMenu();

  if (updateHash) history.replaceState(null, "", `#${slug}`);
  elements.reader.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openHome() {
  state.activeSlug = "";
  elements.topbar.hidden = false;
  elements.overview.hidden = false;
  elements.categoryGrid.hidden = false;
  elements.reader.hidden = true;
  elements.homeButton.classList.add("is-active");
  history.replaceState(null, "", window.location.pathname);
  renderNav();
  closeMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateCompleteButton() {
  const done = state.completed.has(state.activeSlug);
  [elements.completeButton, elements.completeButtonBottom].forEach((button) => {
    button.classList.toggle("is-done", done);
    button.textContent = done ? "Genomförd" : "Markera som genomförd";
  });
}

function filteredModules() {
  return state.modules.filter((module) => {
    const matchesStatus =
      state.filter === "done"
        ? state.completed.has(module.slug)
        : state.filter === "remaining"
          ? !state.completed.has(module.slug)
          : true;

    if (!matchesStatus) return false;
    if (!state.query) return true;

    const searchableText = [
      module.title,
      module.slug,
      ...(Array.isArray(module.tags) ? module.tags : [])
    ].join(" ").toLowerCase();

    return searchableText.includes(state.query);
  });
}

function groupByCategory(modules) {
  return modules.reduce((groups, module) => {
    groups[module.category] ||= [];
    groups[module.category].push(module);
    return groups;
  }, {});
}

function persistProgress() {
  localStorage.setItem("ai-academy-progress", JSON.stringify([...state.completed]));
}

function formatDuration(minutes) {
  if (minutes <= 60) return `${minutes} min`;

  const rounded = Math.round(minutes / 5) * 5;
  const hours = Math.floor(rounded / 60);
  const remainingMinutes = rounded % 60;

  if (!remainingMinutes) return `${hours} tim`;
  return `${hours} tim ${remainingMinutes} min`;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { metadata: {}, content: raw };

  const metadata = {};
  let currentKey = "";

  match[1].split("\n").forEach((line) => {
    const keyValue = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    const listItem = line.match(/^\s+-\s*(.*)$/);

    if (keyValue) {
      currentKey = keyValue[1];
      const value = keyValue[2].trim();
      metadata[currentKey] = value === "[]" ? [] : value;
    } else if (listItem && currentKey) {
      if (!Array.isArray(metadata[currentKey])) metadata[currentKey] = [];
      metadata[currentKey].push(listItem[1].trim());
    }
  });

  return { metadata, content: match[2].trim() };
}

function markdownToHtml(markdown) {
  const lines = markdown.split("\n");
  const html = [];
  let listType = "";
  let inCode = false;
  let codeBuffer = [];
  let paragraph = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${parseInline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const closeList = () => {
    if (!listType) return;
    html.push(`</${listType}>`);
    listType = "";
  };

  lines.forEach((line) => {
    if (line.startsWith("```")) {
      if (inCode) {
        html.push(`<pre><code>${escapeHtml(codeBuffer.join("\n"))}</code></pre>`);
        codeBuffer = [];
        inCode = false;
      } else {
        flushParagraph();
        closeList();
        inCode = true;
      }
      return;
    }

    if (inCode) {
      codeBuffer.push(line);
      return;
    }

    if (!line.trim()) {
      flushParagraph();
      closeList();
      return;
    }

    if (line.trim() === "---") {
      flushParagraph();
      closeList();
      html.push("<hr>");
      return;
    }

    const heading = line.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      closeList();
      const level = heading[1].length;
      html.push(`<h${level}>${parseInline(heading[2])}</h${level}>`);
      return;
    }

    const blockquote = line.match(/^>\s+(.*)$/);
    if (blockquote) {
      flushParagraph();
      closeList();
      html.push(`<blockquote><p>${parseInline(blockquote[1])}</p></blockquote>`);
      return;
    }

    const unordered = line.match(/^-\s+(.*)$/);
    const ordered = line.match(/^\d+\.\s+(.*)$/);
    if (unordered || ordered) {
      flushParagraph();
      const nextType = unordered ? "ul" : "ol";
      if (listType !== nextType) {
        closeList();
        listType = nextType;
        html.push(`<${listType}>`);
      }
      html.push(`<li>${parseInline((unordered || ordered)[1])}</li>`);
      return;
    }

    paragraph.push(line.trim());
  });

  flushParagraph();
  closeList();
  return html.join("\n");
}

function parseInline(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function openMenu() {
  document.body.classList.add("nav-open");
  elements.backdrop.hidden = false;
}

function closeMenu() {
  document.body.classList.remove("nav-open");
  elements.backdrop.hidden = true;
}
