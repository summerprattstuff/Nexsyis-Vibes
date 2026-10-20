/* Lo-fi Folders shell — 10 critical elements, 3 vibe directions. */

const ICO = {
  office: `<svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h6"/></svg>`,
  prod: `<svg viewBox="0 0 24 24"><path d="M3 7h18M6 7v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
  buy: `<svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/></svg>`,
  acct: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M4 10h16M12 6v12"/></svg>`,
  insight: `<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 14v4M12 10v8M17 6v12"/></svg>`,
  bell: `<svg viewBox="0 0 24 24"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>`,
  plus: `<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>`,
  parts: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>`,
  cal: `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>`,
  invoice: `<svg viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6z"/><path d="M9 12h6M9 16h4"/></svg>`,
  upload: `<svg viewBox="0 0 24 24"><path d="M12 16V5M8 9l4-4 4 4"/><path d="M4 19h16"/></svg>`,
  search: `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>`,
  close: `<svg viewBox="0 0 24 24"><path d="M7 7l10 10M17 7 7 17"/></svg>`,
  home: `<svg viewBox="0 0 24 24"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>`,
  popout: `<svg viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"/><path d="M14 4h6v6M20 4l-9 9"/></svg>`,
  filter: `<svg viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4"/></svg>`,
  columns: `<svg viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="16" rx="1"/><rect x="14" y="4" width="6" height="16" rx="1"/></svg>`,
  layers: `<svg viewBox="0 0 24 24"><path d="M12 3 3 8l9 5 9-5-9-5z"/><path d="M3 12l9 5 9-5M3 16l9 5 9-5"/></svg>`,
  check: `<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7"/></svg>`,
  sidebar: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>`,
};

/** Top sections → L1 destinations → optional L2 kids (from Chalk nav concept). */
const SPINE_NAV = [
  { type: "kicker", label: "Workspace" },
  {
    id: "office",
    label: "Office",
    icon: "office",
    expanded: true,
    active: true,
    children: [
      { label: "Folders", count: "24", active: true },
      { label: "Scheduling" },
      { label: "Loaner Fleet", count: "6" },
      {
        label: "Contacts",
        count: "8",
        children: [
          { label: "Customers" },
          { label: "Insurance Companies" },
          { label: "Agents" },
          { label: "Adjusters" },
          { label: "Vendor Contacts" },
          { label: "Rental Companies" },
          { label: "Fleets" },
          { label: "Tow Companies" },
        ],
      },
      { label: "Record Deposit / CC Batch" },
    ],
  },
  {
    id: "production",
    label: "Production",
    icon: "prod",
    children: [
      { label: "Floor", count: "11" },
      { label: "Quality Control", count: "4" },
      { label: "Rework / Returns", count: "1" },
      { label: "Labor" },
    ],
  },
  {
    id: "purchasing",
    label: "Purchasing",
    icon: "buy",
    children: [
      { label: "Purchase Orders", count: "18" },
      { label: "Purchase Assistant" },
      { label: "Third Party Purchasing" },
      { label: "Vendor Sourcing" },
      { label: "A/P Invoices", count: "7" },
    ],
  },
  { type: "kicker", label: "Back office" },
  {
    id: "accounting",
    label: "Accounting",
    icon: "acct",
    children: [
      {
        label: "Accounts Payable",
        count: "12",
        children: [
          { label: "A/P Invoices", count: "7" },
          { label: "A/P Payments" },
          { label: "A/P Imports" },
          { label: "Reconcile Statements", count: "3" },
          { label: "Vendors" },
        ],
      },
      {
        label: "Accounts Receivable",
        count: "11",
        children: [
          { label: "A/R Payments" },
          { label: "Adjustments" },
          { label: "Refunds" },
          { label: "Return Checks", count: "1" },
          { label: "Sales Tax" },
          { label: "Deposits" },
        ],
      },
      {
        label: "Banking",
        count: "8",
        children: [
          { label: "Transactions" },
          { label: "Bank Reconciliation", count: "2" },
          { label: "Positive Pay" },
          { label: "Credit Cards" },
        ],
      },
      {
        label: "General Ledger",
        count: "8",
        children: [
          { label: "Journal Entries" },
          { label: "GL Detail Inquiry" },
          { label: "GL Report Map" },
          { label: "GL Import" },
        ],
      },
      {
        label: "Payroll & Time",
        count: "12",
        open: true,
        children: [
          { label: "Employees" },
          { label: "Approve Time", count: "6" },
          { label: "Absences" },
          { label: "Pay Rates" },
          { label: "1099 Processing" },
        ],
      },
    ],
  },
  {
    id: "insight",
    label: "Insight",
    icon: "insight",
    children: [
      { label: "Reports by Folder", count: "4" },
      { label: "All Reports", count: "17" },
      { label: "My Favorites" },
      { label: "Subscriptions" },
    ],
  },
];

function countHtml(count) {
  if (count == null || count === "") return "";
  return `<span class="spine-count">${count}</span>`;
}

function renderSpineLeaf(item) {
  return `
    <button class="spine-leaf${item.active ? " is-active" : ""}" type="button">
      <span class="spine-leaf-lbl">${item.label}</span>
      ${countHtml(item.count)}
    </button>`;
}

function renderSpineL1(item) {
  const hasKids = Array.isArray(item.children) && item.children.length > 0;
  const open = hasKids && item.open;
  return `
    <div class="spine-branch${open ? " is-open" : ""}${item.active ? " is-active" : ""}">
      <button class="spine-link${item.active ? " is-active" : ""}${hasKids ? " has-kids" : ""}" type="button"${hasKids ? ` aria-expanded="${open ? "true" : "false"}"` : ""}>
        <span class="spine-mark" aria-hidden="true">${hasKids ? `<span class="ico spine-chevron">${ICO.chevron}</span>` : "—"}</span>
        <span class="spine-link-lbl">${item.label}</span>
        ${countHtml(item.count)}
      </button>
      ${hasKids ? `<div class="spine-leaves">${item.children.map(renderSpineLeaf).join("")}</div>` : ""}
    </div>`;
}

function renderSpineNav(vibe) {
  if (vibe !== "command") {
    return SPINE_NAV.filter((n) => n.type !== "kicker")
      .map(
        (sec) => `
      <button class="spine-item${sec.active ? " is-active" : ""}" type="button">
        <span class="tile"><span class="ico">${ICO[sec.icon]}</span></span>
        <span class="lbl">${sec.label}</span>
      </button>`
      )
      .join("");
  }

  return SPINE_NAV.map((node) => {
    if (node.type === "kicker") {
      return `<div class="spine-kicker">${node.label}</div>`;
    }
    const tree = node.children?.length
      ? `<div class="spine-tree">${node.children.map(renderSpineL1).join("")}</div>`
      : "";
    return `
      <div class="spine-section${node.expanded ? " is-expanded" : ""}${node.active ? " is-current" : ""}" data-section="${node.id}">
        <button class="spine-item${node.active ? " is-active" : ""}" type="button" data-spine-section aria-expanded="${node.expanded ? "true" : "false"}">
          <span class="tile"><span class="ico">${ICO[node.icon]}</span></span>
          <span class="lbl">${node.label}</span>
          <span class="ico spine-section-chevron" aria-hidden="true">${ICO.chevron}</span>
        </button>
        ${tree}
      </div>`;
  }).join("");
}

const LABELS = {
  command: "Command Center",
  drafting: "Drafting Table",
  quiet: "Minimalist",
};

function gauge(pct) {
  const r = 16;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  return `<svg viewBox="0 0 44 44" aria-hidden="true">
    <circle class="track" cx="22" cy="22" r="${r}" />
    <circle class="arc" cx="22" cy="22" r="${r}"
      stroke-dasharray="${dash} ${c}"
      transform="rotate(-90 22 22)" />
  </svg>`;
}

const LEDGER_COLS = `
  <colgroup>
    <col class="col-check" />
    <col class="col-ro" />
    <col class="col-vehicle" />
    <col class="col-customer" />
    <col class="col-assigned" />
    <col class="col-promised" />
    <col class="col-total" />
    <col class="col-status" />
  </colgroup>`;

const LEDGER_HEAD = `
  <thead>
    <tr>
      <th></th>
      <th>RO #</th>
      <th>Vehicle</th>
      <th>Customer</th>
      <th>Assigned</th>
      <th>Promised</th>
      <th class="num">Total</th>
      <th>Status</th>
    </tr>
    <tr class="filter-row" hidden>
      <th></th>
      <th><input class="filter-field" placeholder="ro" /></th>
      <th><input class="filter-field" placeholder="vehicle" /></th>
      <th><input class="filter-field" placeholder="customer" /></th>
      <th><input class="filter-field" placeholder="assigned" /></th>
      <th><input class="filter-field" placeholder="promised" /></th>
      <th><input class="filter-field" placeholder="total" /></th>
      <th></th>
    </tr>
  </thead>`;

function stagePanel(key, title, count, rowsHtml) {
  return `
    <div class="panel ticks stage-panel stage-${key}">
      <div class="stage-head">
        <span class="tick"></span>${title} · ${count}
      </div>
      <table class="ledger">
        ${LEDGER_COLS}
        ${LEDGER_HEAD}
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>`;
}

function mountFolders(vibe) {
  const root = document.getElementById("app");
  const label = LABELS[vibe] || vibe;
  document.body.dataset.vibe = vibe;

  const kpis = vibe === "command"
    ? `
      <div class="kpis">
        <div class="kpi">
          <div class="kpi-gauge">
            ${gauge(72)}
            <div><span class="k">Open value</span><span class="v">$41.2K</span></div>
          </div>
        </div>
        <div class="kpi">
          <div class="kpi-gauge">
            ${gauge(54)}
            <div><span class="k">Avg cycle</span><span class="v">6.4d</span></div>
          </div>
        </div>
        <div class="kpi is-alert">
          <div class="kpi-gauge">
            ${gauge(18)}
            <div><span class="k">Late</span><span class="v">02</span></div>
          </div>
        </div>
      </div>`
    : `
      <div class="kpis">
        <div class="kpi"><span class="k">Open value</span><span class="v">$41.2K</span></div>
        <div class="kpi"><span class="k">Avg cycle</span><span class="v">6.4d</span></div>
        <div class="kpi is-alert"><span class="k">Late</span><span class="v">02</span></div>
      </div>`;

  root.innerHTML = `
  <div class="app">
    <aside class="spine is-open" aria-label="Sections">
      <div class="spine-head">
        <a class="brand" href="index.html" title="Nexsyis">
          <img src="assets/nexsyis-mark.ico" alt="" />
          <span class="brand-word">Nexsyis</span>
        </a>
        <button class="spine-toggle" type="button" aria-expanded="true" aria-label="Collapse navigation" title="Collapse navigation">
          <span class="ico">${ICO.sidebar}</span>
        </button>
      </div>
      <nav class="spine-nav">
        ${renderSpineNav(vibe)}
      </nav>
      <div class="spine-foot">
        ${vibe === "command" ? `
          <div class="user-row" title="Operator">
            <div class="user-chip">DM</div>
            <div class="user-meta">
              <strong>Charlotte South</strong>
              <span>Dana M.</span>
            </div>
          </div>` : `
          <span class="ph ph-block" style="width:28px;height:28px;border-radius:8px" title="Setup placeholder"></span>
          <div class="user-chip" title="Operator">DM</div>`}
      </div>
    </aside>

    <div class="workspace">
      <header class="topbar">
        <div class="crumb">Office / <strong>Folders</strong></div>
        <div class="topbar-spacer"></div>
        <div class="topbar-actions">
          <button class="icon-btn search-toggle" type="button" aria-label="Search" aria-expanded="false">
            <span class="ico" style="width:16px;height:16px">${ICO.search}</span>
          </button>
          <div class="notif-wrap">
            <button class="icon-btn notif-toggle" type="button" aria-label="Notifications" aria-expanded="false">
              <span class="ico" style="width:16px;height:16px">${ICO.bell}</span>
              <span class="badge">3</span>
            </button>
            <div class="notif-panel" hidden>
              <div class="notif-tabs">
                <button class="notif-tab is-all is-on" type="button">All <b>4</b></button>
                <button class="notif-tab is-task" type="button">Task <b>2</b></button>
                <button class="notif-tab is-team" type="button">Team <b>1</b></button>
                <button class="notif-tab is-cust" type="button">Customer <b>1</b></button>
              </div>
              <ul class="notif-list">
                <li class="notif-item" data-cat="task">
                  <span class="notif-dot is-task"></span>
                  <div class="notif-body">
                    <div class="notif-top">
                      <strong>QC hold on RO 24802</strong>
                      <time>9:12a</time>
                    </div>
                    <span>Blend panel flagged by T. Cole — needs your sign-off.</span>
                  </div>
                </li>
                <li class="notif-item" data-cat="team">
                  <span class="notif-dot is-team"></span>
                  <div class="notif-body">
                    <div class="notif-top">
                      <strong>Parts meeting moved</strong>
                      <time>Yest</time>
                    </div>
                    <span>Now 3:30p in the front office.</span>
                  </div>
                </li>
                <li class="notif-item" data-cat="cust">
                  <span class="notif-dot is-cust"></span>
                  <div class="notif-body">
                    <div class="notif-top">
                      <strong>Marcus Webb replied</strong>
                      <time>Yest</time>
                    </div>
                    <span>“Can I pick up Friday instead?”</span>
                  </div>
                </li>
                <li class="notif-item" data-cat="task">
                  <span class="notif-dot is-task"></span>
                  <div class="notif-body">
                    <div class="notif-top">
                      <strong>A/P batch ready</strong>
                      <time>Mon</time>
                    </div>
                    <span>12 invoices staged for approval.</span>
                  </div>
                </li>
              </ul>
              <button class="notif-foot" type="button">Mark all read / completed</button>
            </div>
          </div>
          <button class="btn btn-upload" type="button">
            <span class="ico" style="width:14px;height:14px">${ICO.upload}</span>
            Upload Image
          </button>
          <button class="btn ${vibe === "command" ? "btn-teal" : "btn-primary"}" type="button">New estimate</button>

          <div class="topbar-search-panel" hidden>
            <div class="search search-screens" title="Search screens">
              <input placeholder="screen, report, setup…" />
              <button class="btn btn-primary" type="button">Search</button>
            </div>
            <div class="search search-folder" title="Go to folder">
              <input placeholder="Go to Folder #" />
              <button class="btn btn-primary" type="button">Go</button>
            </div>
            <button class="icon-btn search-close" type="button" aria-label="Close search">
              <span class="ico" style="width:16px;height:16px">${ICO.close}</span>
            </button>
          </div>
        </div>
      </header>

      <div class="tabstrip" role="tablist">
        <button class="tab" type="button">
          <span class="ico tab-ico">${ICO.home}</span>
          Home
        </button>
        <button class="tab is-active" type="button">
          Folders
          <span class="ico tab-ico tab-action" title="Open in new window">${ICO.popout}</span>
          <span class="ico tab-ico tab-action x" title="Close">${ICO.close}</span>
        </button>
        <button class="tab is-dirty" type="button">
          <span class="dot"></span>
          Estimate 24817
          <span class="ico tab-ico tab-action x" title="Close">${ICO.close}</span>
        </button>
        <button class="close-all" type="button">Close all</button>
      </div>

      <main class="content">
        <div class="page-head">
          <div>
            <div class="page-meta">Charlotte South · 7 open · Updated 09:41</div>
            <h1 class="page-title">Folders</h1>
          </div>
          ${kpis}
        </div>

        <div class="sel-bar">
          <strong>01 folder · $6,412.80</strong>
          <span class="sel-bar-spacer"></span>
          <button class="btn btn-sm btn-sel-open" type="button">Open</button>
          <button class="btn btn-sm btn-sel-soft" type="button">Assign</button>
          <button class="btn btn-sm btn-sel-soft" type="button">Clear</button>
        </div>

        <div class="launcher" aria-label="Quick actions">
          <button class="launch-tile" type="button">
            <span class="tile"><span class="ico">${ICO.plus}</span></span>
            <span class="name">New Estimate</span>
            <span class="sub">Start a folder</span>
          </button>
          <button class="launch-tile" type="button">
            <span class="tile"><span class="ico">${ICO.parts}</span></span>
            <span class="name">Order Parts</span>
            <span class="sub">Purchasing</span>
          </button>
          <button class="launch-tile" type="button">
            <span class="tile"><span class="ico">${ICO.cal}</span></span>
            <span class="name">Schedule</span>
            <span class="sub">Bay calendar</span>
          </button>
          <button class="launch-tile" type="button">
            <span class="tile"><span class="ico">${ICO.invoice}</span></span>
            <span class="name">Invoice</span>
            <span class="sub">Close & bill</span>
          </button>
        </div>

        <div class="toolbar">
          <span class="count">7 folders</span>
          <div class="search toolbar-search">
            <input placeholder="RO #, customer…" />
            <button class="btn btn-primary" type="button">Search</button>
          </div>
          <div class="topbar-spacer"></div>
          <button class="btn btn-sm btn-neo stages-toggle is-active" type="button" aria-pressed="true">
            <span class="ico">${ICO.layers}</span>
            <span class="stages-toggle-label">Group</span>
          </button>
          <button class="btn btn-sm btn-neo filter-toggle" type="button" aria-pressed="false">
            <span class="ico">${ICO.filter}</span>
            Filter
          </button>
          <div class="columns-wrap">
            <button class="btn btn-sm btn-neo columns-toggle" type="button" aria-expanded="false">
              <span class="ico">${ICO.columns}</span>
              Columns
            </button>
            <div class="columns-panel" hidden>
              <div class="columns-head">Columns</div>
              <label class="columns-row is-locked"><span class="columns-check is-on"><span class="ico">${ICO.check}</span></span> RO number</label>
              <label class="columns-row"><span class="columns-check is-on"><span class="ico">${ICO.check}</span></span> Vehicle</label>
              <label class="columns-row"><span class="columns-check is-on"><span class="ico">${ICO.check}</span></span> Customer</label>
              <label class="columns-row"><span class="columns-check is-on"><span class="ico">${ICO.check}</span></span> Assigned</label>
              <label class="columns-row"><span class="columns-check is-on"><span class="ico">${ICO.check}</span></span> Promised</label>
              <label class="columns-row"><span class="columns-check is-on"><span class="ico">${ICO.check}</span></span> Total</label>
            </div>
          </div>
        </div>

        <div class="stage-stack stages-collapsed">
          ${stagePanel("process", "In process", "03", `
              <tr class="data is-selected">
                <td><span class="check"></span></td>
                <td><a class="ro" href="#">24817</a></td>
                <td>2022 Chevrolet Silverado 1500</td>
                <td>Marcus Webb</td>
                <td>R. Alvarez</td>
                <td>Aug 19</td>
                <td class="num">$6,412.80</td>
                <td><span class="tag tag-neutral">Floor</span></td>
              </tr>
              <tr class="data">
                <td><span class="check"></span></td>
                <td><a class="ro" href="#">24802</a></td>
                <td>2021 Honda CR-V EX</td>
                <td>Priya Raman</td>
                <td>T. Cole</td>
                <td>Aug 18</td>
                <td class="num">$3,088.45</td>
                <td><span class="tag tag-attention">Parts</span></td>
              </tr>
              <tr class="data">
                <td><span class="check"></span></td>
                <td><a class="ro" href="#">24795</a></td>
                <td>2019 Ford F-150 XLT</td>
                <td>Amina Ortiz</td>
                <td>R. Alvarez</td>
                <td>Aug 20</td>
                <td class="num">$4,190.00</td>
                <td><span class="tag tag-neutral">Floor</span></td>
              </tr>`)}
          ${stagePanel("awaiting", "Awaiting parts", "03", `
              <tr class="data">
                <td><span class="check"></span></td>
                <td><a class="ro" href="#">24790</a></td>
                <td>2020 Toyota Camry LE</td>
                <td>Joel Fenwick</td>
                <td>M. Suh</td>
                <td>Aug 22</td>
                <td class="num">$2,215.00</td>
                <td><span class="tag tag-critical">3d late</span></td>
              </tr>
              <tr class="data">
                <td><span class="check"></span></td>
                <td><a class="ro" href="#">24788</a></td>
                <td>2017 Subaru Outback</td>
                <td>Elena Park</td>
                <td>T. Cole</td>
                <td>Aug 21</td>
                <td class="num">$1,842.60</td>
                <td><span class="tag tag-attention">Parts</span></td>
              </tr>
              <tr class="data">
                <td><span class="check"></span></td>
                <td><a class="ro" href="#">24781</a></td>
                <td>2023 Kia Telluride</td>
                <td>Noah Briggs</td>
                <td>M. Suh</td>
                <td>Aug 24</td>
                <td class="num">$5,020.15</td>
                <td><span class="tag tag-attention">Parts</span></td>
              </tr>`)}
          ${stagePanel("ready", "Ready", "02", `
              <tr class="data">
                <td><span class="check"></span></td>
                <td><a class="ro" href="#">24771</a></td>
                <td>2018 Nissan Rogue SV</td>
                <td>Curtis Bailey</td>
                <td>T. Cole</td>
                <td>Aug 15</td>
                <td class="num">$1,466.25</td>
                <td><span class="tag tag-neutral">Ready</span></td>
              </tr>
              <tr class="data">
                <td><span class="check"></span></td>
                <td><a class="ro" href="#">24760</a></td>
                <td>2016 Honda Accord Sport</td>
                <td>Sam Delgado</td>
                <td>R. Alvarez</td>
                <td>Aug 14</td>
                <td class="num">$980.40</td>
                <td><span class="tag tag-neutral">Ready</span></td>
              </tr>`)}
        </div>
      </main>

    </div>
  </div>

  <div class="toast" role="status">Folder 24817 assigned · R. Alvarez</div>
  `;

  document.title = `Nexsyis · ${label} · Folders`;
  wireTopbarSearch();
  wireAllOpenToggle();
  wireSpineToggle();
  wireSpineNav();
  wirePopovers();
}

function wireSpineToggle() {
  const spine = document.querySelector(".spine");
  const btn = document.querySelector(".spine-toggle");
  if (!spine || !btn) return;

  btn.addEventListener("click", () => {
    const open = spine.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Collapse navigation" : "Expand navigation");
    btn.title = open ? "Collapse navigation" : "Expand navigation";
  });
}

function wireSpineNav() {
  const nav = document.querySelector(".spine-nav");
  if (!nav) return;

  const clearLeafActive = () => {
    nav.querySelectorAll(".spine-link.is-active, .spine-leaf.is-active, .spine-branch.is-active").forEach((el) => {
      el.classList.remove("is-active");
    });
  };

  nav.addEventListener("click", (e) => {
    const sectionBtn = e.target.closest("[data-spine-section]");
    if (sectionBtn) {
      const section = sectionBtn.closest(".spine-section");
      if (!section) return;
      const willOpen = !section.classList.contains("is-expanded");
      nav.querySelectorAll(".spine-section.is-expanded").forEach((s) => {
        if (s !== section) {
          s.classList.remove("is-expanded");
          s.querySelector("[data-spine-section]")?.setAttribute("aria-expanded", "false");
        }
      });
      section.classList.toggle("is-expanded", willOpen);
      sectionBtn.setAttribute("aria-expanded", willOpen ? "true" : "false");
      nav.querySelectorAll(".spine-section.is-current, .spine-item.is-active").forEach((el) => {
        el.classList.remove("is-current", "is-active");
      });
      section.classList.add("is-current");
      sectionBtn.classList.add("is-active");
      return;
    }

    const link = e.target.closest(".spine-link");
    if (link) {
      const branch = link.closest(".spine-branch");
      if (!branch) return;
      if (link.classList.contains("has-kids")) {
        const open = branch.classList.toggle("is-open");
        link.setAttribute("aria-expanded", open ? "true" : "false");
      }
      clearLeafActive();
      link.classList.add("is-active");
      branch.classList.add("is-active");
      return;
    }

    const leaf = e.target.closest(".spine-leaf");
    if (leaf) {
      clearLeafActive();
      leaf.classList.add("is-active");
      leaf.closest(".spine-branch")?.classList.add("is-active");
      leaf.closest(".spine-branch")?.querySelector(".spine-link")?.classList.add("is-active");
    }
  });
}

function wireTopbarSearch() {
  const actions = document.querySelector(".topbar-actions");
  if (!actions) return;
  const panel = actions.querySelector(".topbar-search-panel");
  const toggle = actions.querySelector(".search-toggle");
  const closeBtn = actions.querySelector(".search-close");
  const firstInput = panel?.querySelector("input");
  let closing = false;

  const open = () => {
    if (closing) return;
    panel.hidden = false;
    panel.classList.remove("is-leaving");
    panel.classList.add("is-entering");
    actions.classList.add("is-searching");
    toggle.setAttribute("aria-expanded", "true");
    firstInput?.focus();
    window.setTimeout(() => panel.classList.remove("is-entering"), 220);
  };

  const close = () => {
    if (closing || !actions.classList.contains("is-searching")) return;
    closing = true;
    panel.classList.remove("is-entering");
    panel.classList.add("is-leaving");
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      actions.classList.remove("is-searching");
      panel.classList.remove("is-leaving");
      panel.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
      closing = false;
      panel.removeEventListener("animationend", finish);
    };
    panel.addEventListener("animationend", finish);
    window.setTimeout(finish, 240);
  };

  toggle?.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && actions.classList.contains("is-searching")) close();
  });
}

function wireAllOpenToggle() {
  const btn = document.querySelector(".stages-toggle");
  const stack = document.querySelector(".stage-stack");
  if (!btn || !stack) return;
  const label = btn.querySelector(".stages-toggle-label");

  btn.addEventListener("click", () => {
    const collapsed = stack.classList.toggle("stages-collapsed");
    btn.classList.toggle("is-active", collapsed);
    btn.setAttribute("aria-pressed", collapsed ? "true" : "false");
    if (label) label.textContent = collapsed ? "Group" : "Ungroup";
  });
}

function wirePopovers() {
  const notifBtn = document.querySelector(".notif-toggle");
  const notifPanel = document.querySelector(".notif-panel");
  const filterBtn = document.querySelector(".filter-toggle");
  const filterRows = document.querySelectorAll(".filter-row");
  const columnsBtn = document.querySelector(".columns-toggle");
  const columnsPanel = document.querySelector(".columns-panel");

  const closeAll = (except) => {
    if (except !== "notif" && notifPanel) {
      notifPanel.hidden = true;
      notifBtn?.setAttribute("aria-expanded", "false");
      notifBtn?.classList.remove("is-active");
    }
    if (except !== "columns" && columnsPanel) {
      columnsPanel.hidden = true;
      columnsBtn?.setAttribute("aria-expanded", "false");
      columnsBtn?.classList.remove("is-active");
    }
  };

  notifBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = notifPanel.hidden;
    closeAll("notif");
    notifPanel.hidden = !open;
    notifBtn.setAttribute("aria-expanded", open ? "true" : "false");
    notifBtn.classList.toggle("is-active", open);
  });

  filterBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    closeAll();
    const open = filterBtn.getAttribute("aria-pressed") !== "true";
    filterRows.forEach((row) => {
      row.hidden = !open;
    });
    filterBtn.setAttribute("aria-pressed", open ? "true" : "false");
    filterBtn.classList.toggle("is-active", open);
  });

  columnsBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = columnsPanel.hidden;
    closeAll("columns");
    columnsPanel.hidden = !open;
    columnsBtn.setAttribute("aria-expanded", open ? "true" : "false");
    columnsBtn.classList.toggle("is-active", open);
  });

  document.querySelectorAll(".columns-row:not(.is-locked)").forEach((row) => {
    row.addEventListener("click", (e) => {
      e.preventDefault();
      row.querySelector(".columns-check")?.classList.toggle("is-on");
    });
  });

  const notifItems = document.querySelectorAll(".notif-item");
  const filterNotifs = (cat) => {
    notifItems.forEach((item) => {
      const show = cat === "all" || item.dataset.cat === cat;
      item.hidden = !show;
      item.classList.toggle("is-hidden", !show);
    });
  };

  document.querySelectorAll(".notif-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".notif-tab").forEach((t) => t.classList.remove("is-on"));
      tab.classList.add("is-on");
      const cat = tab.classList.contains("is-task")
        ? "task"
        : tab.classList.contains("is-team")
          ? "team"
          : tab.classList.contains("is-cust")
            ? "cust"
            : "all";
      filterNotifs(cat);
    });
  });

  document.addEventListener("click", () => closeAll());
  notifPanel?.addEventListener("click", (e) => e.stopPropagation());
  columnsPanel?.addEventListener("click", (e) => e.stopPropagation());
}

window.mountFolders = mountFolders;
