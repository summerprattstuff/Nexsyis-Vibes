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
};

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

const LEDGER_HEAD = `
  <thead>
    <tr>
      <th style="width:36px"></th>
      <th style="width:88px">RO #</th>
      <th>Vehicle</th>
      <th>Customer</th>
      <th style="width:110px">Assigned</th>
      <th style="width:96px">Promised</th>
      <th class="num" style="width:100px">Total</th>
      <th style="width:92px">Status</th>
    </tr>
  </thead>`;

function stagePanel(key, title, count, rowsHtml) {
  return `
    <div class="panel ticks stage-panel stage-${key}">
      <table class="ledger">
        ${LEDGER_HEAD}
        <tbody>
          <tr class="group group-${key}">
            <td colspan="8"><span class="tick"></span>${title} · ${count}</td>
          </tr>
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
    <aside class="spine" aria-label="Sections">
      <a class="brand" href="index.html" title="Nexsyis">
        <img src="assets/nexsyis-mark.ico" alt="" />
        <span class="brand-word">Nexsyis</span>
      </a>
      <nav class="spine-nav">
        ${vibe === "command" ? `<div class="spine-kicker">Workspace</div>` : ""}
        <button class="spine-item is-active" type="button">
          <span class="tile"><span class="ico">${ICO.office}</span></span>
          <span class="lbl">Office</span>
        </button>
        <button class="spine-item" type="button">
          <span class="tile"><span class="ico">${ICO.prod}</span></span>
          <span class="lbl">Production</span>
        </button>
        <button class="spine-item" type="button">
          <span class="tile"><span class="ico">${ICO.buy}</span></span>
          <span class="lbl">Purchasing</span>
        </button>
        ${vibe === "command" ? `<div class="spine-kicker">Back office</div>` : ""}
        <button class="spine-item" type="button">
          <span class="tile"><span class="ico">${ICO.acct}</span></span>
          <span class="lbl">Accounting</span>
        </button>
        <button class="spine-item" type="button">
          <span class="tile"><span class="ico">${ICO.insight}</span></span>
          <span class="lbl">Insight</span>
        </button>
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
        <div class="search" title="Search placeholder">
          <input placeholder="Search screens…" readonly />
          <button class="btn btn-primary" type="button" style="border-radius:0;height:100%">Go</button>
        </div>
        <button class="icon-btn" type="button" aria-label="Notifications">
          <span class="ico" style="width:16px;height:16px">${ICO.bell}</span>
          <span class="badge">3</span>
        </button>
        <button class="btn ${vibe === "command" ? "btn-teal" : "btn-primary"}" type="button">New estimate</button>
      </header>

      <div class="tabstrip" role="tablist">
        <button class="tab" type="button">Home</button>
        <button class="tab is-active" type="button">Folders <span class="x">×</span></button>
        <button class="tab is-dirty" type="button"><span class="dot"></span> Estimate 24817 <span class="x">×</span></button>
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

        <div class="sel-bar">
          <strong>01 folder · $6,412.80</strong>
          <span class="hint">Open · assign · range-select</span>
          <button class="btn btn-sm" type="button">Open</button>
          <button class="btn btn-sm" type="button">Assign</button>
          <button class="btn btn-sm" type="button">Clear</button>
        </div>

        <div class="toolbar">
          <span class="count">7 folders</span>
          <div class="search" style="min-width:160px;height:28px">
            <input placeholder="RO #, customer…" readonly />
          </div>
          <div class="seg">
            <button class="chip is-on" type="button">All open</button>
            <button class="chip" type="button">My desk</button>
            <span class="ph ph-line short" style="width:56px;height:26px;border-radius:999px"></span>
          </div>
          <div class="topbar-spacer"></div>
          <button class="btn btn-sm btn-ghost" type="button">Filter</button>
          <button class="btn btn-sm btn-ghost" type="button">Columns</button>
        </div>

        <div class="stage-stack">
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
                <td><span class="ph ph-line"></span></td>
                <td><span class="ph ph-line short"></span></td>
                <td><span class="ph ph-line short"></span></td>
                <td><span class="ph ph-line short"></span></td>
                <td class="num"><span class="ph ph-line short" style="margin-left:auto"></span></td>
                <td><span class="ph ph-line short"></span></td>
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
                <td><span class="ph ph-line"></span></td>
                <td><span class="ph ph-line short"></span></td>
                <td><span class="ph ph-line short"></span></td>
                <td><span class="ph ph-line short"></span></td>
                <td class="num"><span class="ph ph-line short" style="margin-left:auto"></span></td>
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
                <td colspan="8" style="padding:12px">
                  <span class="ph ph-block" style="height:40px"></span>
                </td>
              </tr>`)}
        </div>
      </main>

    </div>
  </div>

  <div class="toast" role="status">Folder 24817 assigned · R. Alvarez</div>
  <div class="vibe-tag">${label} <a href="index.html">All vibes</a></div>
  `;

  document.title = `Nexsyis · ${label} · Folders`;
}

window.mountFolders = mountFolders;
