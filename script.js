/* ════════════════════════════════
   IMAGE DATA
════════════════════════════════ */
const ART_IMAGES = [
  'https://slashthehare.com/img/flat10.webp',
  'https://slashthehare.com/img/flat11.webp',
  'https://slashthehare.com/img/flat12.webp',
  'https://slashthehare.com/img/flat14.webp',
  'https://slashthehare.com/img/bw13.webp',
  'https://slashthehare.com/img/bw.webp',
  'https://slashthehare.com/img/sketch17.webp',
  'https://slashthehare.com/img/sketch2.webp',
  'https://f2.toyhou.se/file/f2-toyhou-se/images/111179207_vwkwTiWhOPwzHqU.jpg',
  'https://f2.toyhou.se/file/f2-toyhou-se/images/111179206_q0M7C3s7uV09Ame.jpg',
  'https://f2.toyhou.se/file/f2-toyhou-se/images/111179204_A1io4fBF6I9Ybgu.jpg',
  'https://f2.toyhou.se/file/f2-toyhou-se/images/111148269_FlDQCbwIIqDKbFH.png',
  'https://f2.toyhou.se/file/f2-toyhou-se/images/109781395_qY0y3KbjMH9FrrD.jpg',
  'https://f2.toyhou.se/file/f2-toyhou-se/images/115871725_XpoJajCuLmWwqmq.png',
  'https://f2.toyhou.se/file/f2-toyhou-se/images/115828727_WYGGbZJMQePXqzd.png?1772329324',
  'https://f2.toyhou.se/file/f2-toyhou-se/images/115823094_2miqdQBKIVos5Lf.png?1772197291',
  'https://f2.toyhou.se/file/f2-toyhou-se/images/112184555_QiAh04pihUy2BLC.png',
  'https://slashthehare.com/img/flat8.webp',
  'https://slashthehare.com/img/bw4.webp',
  'https://slashthehare.com/img/bw5.webp',
  'https://slashthehare.com/img/bw8.webp',
  'https://slashthehare.com/img/bw11.webp',
  'https://slashthehare.com/img/bw15.webp',
  'https://slashthehare.com/img/sketch16.webp',
  'https://slashthehare.com/img/sketch15.webp',
  'https://slashthehare.com/img/sketch13.webp',
  'https://slashthehare.com/img/sketch12.webp',
  'https://slashthehare.com/img/sketch6.webp',
  'https://slashthehare.com/img/sketch7.webp',
  'https://slashthehare.com/img/sketch8.webp',
];

const CUSTOM_IMAGES = [
  'https://f2.toyhou.se/file/f2-toyhou-se/images/80072675_pz7DbLhSXMA9n9w.png?1760458715',
  'https://f2.toyhou.se/file/f2-toyhou-se/images/114114416_v21iiehhvq1na3U.png',
  'https://f2.toyhou.se/file/f2-toyhou-se/images/103275967_2bjTvRiwaCYD4UK.jpg?1766205188',
  'https://f2.toyhou.se/file/f2-toyhou-se/images/107201251_35kRNBuA4HfRkYY.png?1760458656',
  'https://slashthehare.com/img/ref1.webp',
  'https://slashthehare.com/img/ref16.webp',
  'https://f2.toyhou.se/file/f2-toyhou-se/images/103276549_IYT4a6lrzVUqy0L.jpg?1760459165',
  'https://slashthehare.com/img/ref15.webp',
  'https://slashthehare.com/img/ref23.webp',
  'https://slashthehare.com/img/ref19.webp',
  'https://slashthehare.com/img/ref18.webp',
  'https://slashthehare.com/img/ref17.webp',
  'https://slashthehare.com/img/ref13.webp',
  'https://slashthehare.com/img/ref12.webp',
  'https://slashthehare.com/img/ref11.webp',
  'https://slashthehare.com/img/ref8.webp',
  'https://slashthehare.com/img/ref10.webp',
  'https://slashthehare.com/img/ref5.webp',
  'https://slashthehare.com/img/ref3.webp',
];

/* ════════════════════════════════
   GALLERY BUILDER
════════════════════════════════ */
function buildGallery(images, thumbsId, mainImgId) {
  const thumbs = document.getElementById(thumbsId);
  const mainImg = document.getElementById(mainImgId);
  if (!thumbs || !mainImg) return;

  images.forEach((src, i) => {
    const btn = document.createElement('button');
    btn.className = 'thumb-btn' + (i === 0 ? ' active' : '');
    btn.innerHTML = `<img src="${src}" alt="Sample ${i + 1}" loading="lazy"/>`;
    btn.addEventListener('click', () => {
      thumbs.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      mainImg.classList.remove('loaded');
      mainImg.src = src;
    });
    thumbs.appendChild(btn);
  });

  if (images.length) {
    mainImg.src = images[0];
    mainImg.addEventListener('load', () => mainImg.classList.add('loaded'));
    if (mainImg.complete) mainImg.classList.add('loaded');
  }
}

/* ════════════════════════════════
   TRELLO CONFIG
════════════════════════════════ */
const TRELLO = {
  apiKey:  'ce6649368393f966fd02936780bb489e',
  token:   'ATTA8b168cbec6b811ab91f0752e2de6fc3424c0791612683a04235fd470cadf00702B59DB42',           // add OAuth token here if board is private
  boardId: 'gsqAd4Xw',
  hideLists: [],         // e.g. ['Archive'] to hide specific lists
  listColours: {
    'to do':       'list-todo',
    'queue':       'list-todo',
    'pending':     'list-todo',
    'in progress': 'list-wip',
    'wip':         'list-wip',
    'working':     'list-wip',
    'sketch':      'list-sketch',
    'sketching':   'list-sketch',
    'lineart':     'list-sketch',
    'done':        'list-done',
    'complete':    'list-done',
    'completed':   'list-done',
    'finished':    'list-done',
  }
};

/* ════════════════════════════════
   LOAD TRELLO QUEUE
════════════════════════════════ */
async function loadQueue() {
  const out = document.getElementById('queue-output');
  const { apiKey, token, boardId, hideLists, listColours } = TRELLO;
  const base = 'https://api.trello.com/1';
  const auth = `key=${apiKey}${token ? '&token=' + token : ''}`;

  try {
    const [lRes, cRes] = await Promise.all([
      fetch(`${base}/boards/${boardId}/lists?${auth}&fields=name,id`),
      fetch(`${base}/boards/${boardId}/cards?${auth}&fields=name,idList,due,labels,url,desc&attachments=true&attachment_fields=url,previews,name,mimeType`)
    ]);
    if (!lRes.ok || !cRes.ok) throw new Error(`HTTP ${lRes.status}`);

    const lists = await lRes.json();
    const cards = await cRes.json();

    // Skip the first list entirely, then apply any hideLists filter
    const hideLow = hideLists.map(n => n.toLowerCase());
    const visible = lists
      .slice(1)
      .filter(l => !hideLow.includes(l.name.toLowerCase()));

    if (!visible.length) {
      out.innerHTML = `<div class="queue-empty">No lists found.</div>`;
      return;
    }

    const byList = {};
    visible.forEach(l => byList[l.id] = []);
    cards.forEach(c => { if (byList[c.idList] !== undefined) byList[c.idList].push(c); });

    const slotEl = document.getElementById('slot-count');
    const slotElInfo = document.getElementById('slot-count-info');
    if (slotEl) slotEl.textContent = cards.length;
    if (slotElInfo) slotElInfo.textContent = cards.length;

    let html = '<div class="list-group">';
    visible.forEach(list => {
      const cls = listColours[list.name.toLowerCase()] || 'list-default';
      const lc = byList[list.id] || [];
      html += `<div class="trello-list ${cls}">
        <div class="trello-list-header">
          <span>${esc(list.name)}</span>
          <span class="count">${lc.length}</span>
        </div>
        <div class="trello-cards">${lc.length
          ? lc.map(buildCard).join('')
          : '<span style="font-size:0.68rem;color:var(--faded);font-style:italic;display:block;text-align:center;">— empty —</span>'
        }</div>
      </div>`;
    });
    html += '</div>';
    out.innerHTML = html;

  } catch (err) {
    console.error(err);
    out.innerHTML = `<div class="queue-error">
      Failed to load queue.<br/>
      <span style="opacity:0.6;font-size:0.7rem">${esc(err.message)}</span>
    </div>`;
  }
}

/* ════════════════════════════════
   LINK EXTRACTION HELPERS
════════════════════════════════ */
// Pull all http(s) URLs out of a string
function extractLinks(text) {
  if (!text) return [];
  const matches = text.match(/https?:\/\/[^\s\)\]\>\"\']+/g) || [];
  // Deduplicate
  return [...new Set(matches)];
}

// Turn a URL into a short human-readable label
function linkLabel(url) {
  try {
    const u = new URL(url);
    // Strip www., keep host + truncated path
    const host = u.hostname.replace(/^www\./, '');
    const path = u.pathname.replace(/\/$/, '');
    const label = path ? host + path : host;
    return label.length > 45 ? label.slice(0, 43) + '…' : label;
  } catch {
    return url.length > 45 ? url.slice(0, 43) + '…' : url;
  }
}

// Render a small links section
function renderLinkPills(links) {
  if (!links.length) return '';
  return `<div class="card-links">${links.map(u =>
    `<a class="card-link-pill" href="${esc(u)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${esc(linkLabel(u))}</a>`
  ).join('')}</div>`;
}

function buildCard(card) {
  const colors = {
    green:  '#3a8a3a', yellow: '#b8a020', orange: '#c07010',
    red:    '#a01818', purple: '#7a3aaa', blue:   '#1a4a9a',
    sky:    '#1a90a8', lime:   '#3aaa6a', pink:   '#b840a0', black: '#303040'
  };

  const labels = card.labels?.length
    ? `<div class="card-labels">${card.labels.map(l =>
        `<span class="card-label-pill" style="background:${colors[l.color] || '#888'}">${esc(l.name || l.color || '')}</span>`
      ).join('')}</div>`
    : '';

  let due = '';
  if (card.due) {
    const d = new Date(card.due);
    const cls = d < new Date() ? ' overdue' : '';
    due = `<div class="card-due${cls}">Due ${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>`;
  }

  // Image strip from attachments — images are clickable for lightbox
  let imgStrip = '';
  const imageAttachments = (card.attachments || []).filter(a =>
    (a.mimeType && a.mimeType.startsWith('image/')) ||
    (a.previews && a.previews.length > 0)
  );
  if (imageAttachments.length > 0) {
    const imgs = imageAttachments.map(a => {
      const src = (a.previews && a.previews.length)
        ? a.previews.sort((x, y) => y.width - x.width)[0].url
        : a.url;
      const fullSrc = a.url || src;
      return `<img class="card-img" src="${esc(src)}" data-full="${esc(fullSrc)}" alt="${esc(a.name || 'attachment')}" loading="lazy" onclick="event.stopPropagation();openLightbox('${esc(fullSrc)}')"/>`;
    }).join('');
    imgStrip = `<div class="card-img-strip">${imgs}</div>`;
  }

  // Collect links: URLs from description + non-image URL attachments
  const descLinks = extractLinks(card.desc || '');
  const attachLinks = (card.attachments || [])
    .filter(a => !imageAttachments.includes(a) && a.url && a.url.startsWith('http'))
    .map(a => a.url);
  const allLinks = [...new Set([...descLinks, ...attachLinks])];
  const linkPills = renderLinkPills(allLinks);

  // Serialize card data for the detail overlay
  const cardData = JSON.stringify({
    name: card.name,
    desc: card.desc || '',
    url:  card.url  || '',
    due:  card.due  || '',
    labels: (card.labels || []).map(l => ({ name: l.name, color: l.color })),
    links: allLinks,
    images: imageAttachments.map(a => ({
      thumb: (a.previews && a.previews.length)
        ? (a.previews.sort((x, y) => y.width - x.width)[0]?.url || a.url)
        : a.url,
      full: a.url
    }))
  }).replace(/'/g, '&#39;').replace(/"/g, '&quot;');

  return `<div class="trello-card">
    ${labels}${imgStrip}
    <div class="card-name">${esc(card.name)}</div>
    ${due}
    <div class="card-footer-row">
      <button class="card-details-btn" onclick="event.stopPropagation();openCardDetail(this)" data-card="${cardData}">Show Details</button>
      ${card.url ? `<a class="card-trello-link" href="${esc(card.url)}" target="_blank" onclick="event.stopPropagation()">Trello ↗</a>` : ''}
    </div>
  </div>`;
}

/* ════════════════════════════════
   LIGHTBOX
════════════════════════════════ */
function openLightbox(src) {
  let lb = document.getElementById('img-lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'img-lightbox';
    lb.innerHTML = `
      <div class="lb-backdrop" onclick="closeLightbox()"></div>
      <button class="lb-close" onclick="closeLightbox()">✕</button>
      <img class="lb-img" src="" alt=""/>
    `;
    document.body.appendChild(lb);
  }
  const img = lb.querySelector('.lb-img');
  // Clear src first to prevent the browser from re-firing the cached image
  // and re-triggering the pop animation on the previous image
  img.src = '';
  // Force a reflow so the animation re-triggers cleanly on the new src
  img.classList.remove('lb-anim');
  void img.offsetWidth;
  img.classList.add('lb-anim');
  img.src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('img-lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}

/* ════════════════════════════════
   CARD DETAIL OVERLAY
════════════════════════════════ */
function openCardDetail(btn) {
  const colors = {
    green:'#3a8a3a', yellow:'#b8a020', orange:'#c07010',
    red:'#a01818', purple:'#7a3aaa', blue:'#1a4a9a',
    sky:'#1a90a8', lime:'#3aaa6a', pink:'#b840a0', black:'#303040'
  };

  const raw = btn.getAttribute('data-card')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  const card = JSON.parse(raw);

  let overlay = document.getElementById('card-detail-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'card-detail-overlay';
    document.body.appendChild(overlay);
  }

  const labelHtml = card.labels.length
    ? card.labels.map(l =>
        `<span class="cd-label-pill" style="background:${colors[l.color] || '#888'}">${esc(l.name || '')}</span>`
      ).join('')
    : '<span class="cd-no-labels">Not started</span>';

  const dueHtml = card.due
    ? (() => {
        const d = new Date(card.due);
        const cls = d < new Date() ? ' overdue' : '';
        return `<div class="cd-due${cls}">Due ${d.toLocaleDateString('en-US', { weekday:'short', month:'long', day:'numeric', year:'numeric' })}</div>`;
      })()
    : '';

  const imgHtml = card.images.length
    ? `<div class="cd-images">${card.images.map(img =>
        `<img class="cd-img" src="${esc(img.thumb)}" data-full="${esc(img.full)}" alt="attachment" loading="lazy"
          onclick="closeCardDetail();openLightbox('${esc(img.full)}')" />`
      ).join('')}</div>`
    : '';

  const descHtml = card.desc
    ? `<div class="cd-section-label">Notes</div>
       <div class="cd-desc">${esc(card.desc).replace(/\n/g, '<br/>')}</div>`
    : '';

  const linksHtml = (card.links && card.links.length)
    ? `<div class="cd-section-label">Links</div>
       <div class="cd-links">${card.links.map(u =>
         `<a class="cd-link-pill" href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(linkLabel(u))}</a>`
       ).join('')}</div>`
    : '';

  overlay.innerHTML = `
    <div class="cd-backdrop" onclick="closeCardDetail()"></div>
    <div class="cd-panel">
      <div class="cd-header">
        <span class="cd-eyebrow">Case File</span>
        <button class="cd-close" onclick="closeCardDetail()">✕</button>
      </div>
      <div class="cd-body">
        <h2 class="cd-title">${esc(card.name)}</h2>
        ${dueHtml}
        <div class="cd-section-label">Status</div>
        <div class="cd-labels">${labelHtml}</div>
        ${descHtml}
        ${linksHtml}
        ${card.images.length ? `<div class="cd-section-label">Attachments</div>${imgHtml}` : ''}
        ${card.url
          ? `<a class="cd-trello-btn" href="${esc(card.url)}" target="_blank">Open on Trello ↗</a>`
          : ''}
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // fade in images
  overlay.querySelectorAll('.cd-img').forEach(img => {
    if (img.complete) img.classList.add('loaded');
    else img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
  });
}

function closeCardDetail() {
  const ov = document.getElementById('card-detail-overlay');
  if (ov) ov.classList.remove('open');
  document.body.style.overflow = '';
}

// Close overlays on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLightbox(); closeCardDetail(); }
});

function esc(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
  );
}

/* ════════════════════════════════
   HEADER TABS
════════════════════════════════ */
document.querySelectorAll('.header-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.header-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.header-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('hpanel-' + btn.dataset.htab).classList.add('active');
  });
});

/* ════════════════════════════════
   TABS
════════════════════════════════ */
document.querySelectorAll('.folder-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.folder-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
  });
});

/* ════════════════════════════════
   INIT
════════════════════════════════ */
buildGallery(ART_IMAGES,    'art-thumbs',    'art-main-img');
buildGallery(CUSTOM_IMAGES, 'custom-thumbs', 'custom-main-img');
loadQueue();

// Fade in card images as they load (queue is injected dynamically)
const queueObserver = new MutationObserver(() => {
  document.querySelectorAll('.card-img:not(.loaded)').forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
    }
  });
});
queueObserver.observe(document.getElementById('queue-output'), { childList: true, subtree: true });
