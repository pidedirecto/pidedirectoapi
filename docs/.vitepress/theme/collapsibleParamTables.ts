const NBSP_PER_DEPTH_LEVEL = 2;

const PARAM_SECTION_HEADINGS = new Set(["Request", "Response"]);
const ENHANCED_TABLE_ATTR = "data-param-table-enhanced";

const CSS = {
  toggle: "param-table-toggle",
  toggleIcon: "param-table-toggle-icon",
  branchRow: "param-table-row--branch",
  hiddenRow: "param-table-row--hidden",
} as const;

interface ParamRow {
  element: HTMLTableRowElement;
  index: number;
  depth: number;
  parentIndex: number | null;
  hasChildren: boolean;
  expanded: boolean;
}

export function enhanceParamTables(docRoot: HTMLElement | null): void {
  if (!docRoot) return;

  for (const heading of docRoot.querySelectorAll("h2")) {
    if (!isParamSectionHeading(heading)) continue;

    for (const table of collectTablesUntilNextHeading(heading)) {
      enhanceTable(table);
    }
  }
}

function enhanceTable(table: HTMLTableElement): void {
  if (table.hasAttribute(ENHANCED_TABLE_ATTR)) return;

  const rows = buildParamRows(table);
  if (!rows.some((row) => row.depth > 0)) return;

  linkParents(rows);
  rows.filter((row) => row.hasChildren).forEach(addToggleButton);

  table.setAttribute(ENHANCED_TABLE_ATTR, "true");
  applyRowVisibility(rows);
}

function buildParamRows(table: HTMLTableElement): ParamRow[] {
  return getBodyRows(table).map((element, index) => ({
    element,
    index,
    depth: getIndentDepth(element.cells[0]),
    parentIndex: null,
    hasChildren: false,
    expanded: false,
  }));
}

/** Walk rows once and assign each row its nearest shallower parent. */
function linkParents(rows: ParamRow[]): void {
  const ancestorIndexes: number[] = [];

  for (const row of rows) {
    while (
      ancestorIndexes.length > 0 &&
      rows[ancestorIndexes.at(-1)!].depth >= row.depth
    ) {
      ancestorIndexes.pop();
    }

    const parentIndex = ancestorIndexes.at(-1);
    if (parentIndex !== undefined) {
      row.parentIndex = parentIndex;
      rows[parentIndex].hasChildren = true;
    }

    ancestorIndexes.push(row.index);
  }
}

// ---------------------------------------------------------------------------
// Toggle buttons
// ---------------------------------------------------------------------------

function addToggleButton(row: ParamRow): void {
  const nameCell = row.element.cells[0];
  if (!nameCell || nameCell.querySelector(`.${CSS.toggle}`)) return;

  row.element.classList.add(CSS.branchRow);

  const button = document.createElement("button");
  button.type = "button";
  button.className = CSS.toggle;
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-label", "Expand nested fields");
  button.innerHTML = `<span class="${CSS.toggleIcon}" aria-hidden="true"></span>`;

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    setToggleExpanded(button, !isExpanded);

    const table = row.element.closest("table");
    if (!table) return;

    applyRowVisibility(readParamRowsFromTable(table));
  });

  nameCell.prepend(button);
}

function setToggleExpanded(button: HTMLButtonElement, expanded: boolean): void {
  button.setAttribute("aria-expanded", String(expanded));
  button.setAttribute(
    "aria-label",
    expanded ? "Collapse nested fields" : "Expand nested fields",
  );
}

// ---------------------------------------------------------------------------
// Visibility
// ---------------------------------------------------------------------------

function applyRowVisibility(rows: ParamRow[]): void {
  const hiddenIndexes = new Set<number>();

  for (const row of rows) {
    if (row.depth === 0) continue;
    if (isHiddenByCollapsedAncestor(row, rows, hiddenIndexes)) {
      hiddenIndexes.add(row.index);
    }
  }

  for (const row of rows) {
    row.element.classList.toggle(CSS.hiddenRow, hiddenIndexes.has(row.index));
  }
}

function isHiddenByCollapsedAncestor(
  row: ParamRow,
  rows: ParamRow[],
  hiddenIndexes: Set<number>,
): boolean {
  if (row.parentIndex === null) return false;

  const parent = rows[row.parentIndex];
  if (!parent.expanded) return true;
  if (hiddenIndexes.has(parent.index)) return true;

  return isHiddenByCollapsedAncestor(parent, rows, hiddenIndexes);
}

function isParamSectionHeading(heading: Element): boolean {
  const title = (heading.textContent ?? "").replace(/\u200B/g, "").trim();
  return PARAM_SECTION_HEADINGS.has(title);
}

function collectTablesUntilNextHeading(heading: Element): HTMLTableElement[] {
  const tables: HTMLTableElement[] = [];
  let sibling = heading.nextElementSibling;

  while (sibling && sibling.tagName !== "H2") {
    if (sibling.tagName === "TABLE") {
      tables.push(sibling as HTMLTableElement);
    }
    sibling = sibling.nextElementSibling;
  }

  return tables;
}

function getBodyRows(table: HTMLTableElement): HTMLTableRowElement[] {
  return Array.from(table.querySelectorAll("tr")).slice(1);
}

function readParamRowsFromTable(table: HTMLTableElement): ParamRow[] {
  const bodyRows = getBodyRows(table);

  return bodyRows.map((element, index) => {
    const depth = getIndentDepth(element.cells[0]);
    const toggle = element.querySelector(`.${CSS.toggle}`);

    return {
      element,
      index,
      depth,
      parentIndex: findParentIndex(bodyRows, index, depth),
      hasChildren: element.classList.contains(CSS.branchRow),
      expanded: toggle?.getAttribute("aria-expanded") === "true",
    };
  });
}

function findParentIndex(
  bodyRows: HTMLTableRowElement[],
  rowIndex: number,
  depth: number,
): number | null {
  for (let i = rowIndex - 1; i >= 0; i--) {
    const candidateDepth = getIndentDepth(bodyRows[i].cells[0]);
    if (candidateDepth < depth) return i;
  }
  return null;
}

function getIndentDepth(cell: HTMLTableCellElement | undefined): number {
  if (!cell) return 0;

  const nbspInHtml = (cell.innerHTML.match(/&nbsp;/gi) ?? []).length;
  if (nbspInHtml > 0) return nbspInHtml / NBSP_PER_DEPTH_LEVEL;

  return countLeadingNbsp(cell.textContent ?? "") / NBSP_PER_DEPTH_LEVEL;
}

function countLeadingNbsp(text: string): number {
  let count = 0;
  for (const char of text) {
    if (char !== "\u00A0") break;
    count++;
  }

  return count;
}
