(() => {
  const data = window.PORTFOLIO;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  if (!data) return;

  // Theme toggle: remembers the visitor's choice on this device.
  const themeToggle = $('#theme-toggle');
  const applyTheme = (theme) => {
    const dark = theme === 'dark';
    document.body.classList.toggle('dark-theme', dark);
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
      themeToggle.setAttribute('title', dark ? 'Switch to light theme' : 'Switch to dark theme');
      const icon = $('.theme-icon', themeToggle), label = $('.theme-label', themeToggle);
      if (icon) icon.textContent = dark ? '☀' : '☾';
      if (label) label.textContent = dark ? 'Light mode' : 'Dark mode';
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', dark ? '#151711' : '#f7f5f0');
  };
  let savedTheme = 'light';
  try { savedTheme = localStorage.getItem('arjun-portfolio-theme') || 'light'; } catch (_) {}
  applyTheme(savedTheme);
  if (themeToggle) themeToggle.addEventListener('click', () => {
    const next = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('arjun-portfolio-theme', next); } catch (_) {}
  });

  document.documentElement.classList.add('js-ready');
  $('#year').textContent = new Date().getFullYear();
  $('#email-link').href = `mailto:${data.email}`;
  $('#linkedin-link').href = data.linkedin;
  $('#hero-linkedin').href = data.linkedin;

  $('#stats-grid').innerHTML = data.stats.map((item, i) => `
    <article class="metric-card"><span class="metric-index">0${i + 1}</span><strong>${item.value}</strong><b>${item.label}</b><small>${item.note}</small></article>`).join('');

  const visualMarkup = (p) => {
    const labels = {
      quality: `<div class="visual-ui quality-ui"><div class="ui-head"><span class="ui-brand-dot"></span><span>QUALITY OVERVIEW</span><span class="ui-menu">•••</span></div><div class="ui-kpis"><div><small>TOTAL SAMPLES</small><b>10,248</b><i>↗ 12.8%</i></div><div><small>UNDER REVIEW</small><b>1,306</b><i>↘ 4.2%</i></div></div><div class="ui-chart"><div class="chart-y"><span>100</span><span>75</span><span>50</span><span>25</span></div><div class="chart-columns">${[42,66,53,82,61,94,72,88].map((v,i)=>`<i style="--bar:${v}%;--i:${i}"></i>`).join('')}</div></div><div class="ui-legend"><span><i></i> Standard</span><span><i></i> Needs review</span></div></div>`,
      university: `<div class="visual-ui university-ui"><div class="uni-top"><span>STUDENT PERFORMANCE</span><span>↗</span></div><div class="uni-score"><strong>86.4<span>%</span></strong><small>Overall pass rate</small></div><div class="uni-progress"><i style="width:86%"></i></div><div class="uni-bottom"><span>ENROLMENT <b>12.8k</b></span><span>ATTENDANCE <b>92%</b></span></div><div class="uni-circles"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>`,
      customer: `<div class="visual-ui customer-ui"><div class="customer-top"><span>SEGMENT SNAPSHOT</span><span>2024 ↗</span></div><div class="donut"><div><b>4</b><small>SEGMENTS</small></div></div><div class="donut-legend"><span><i></i> Loyal</span><span><i></i> Growing</span><span><i></i> At risk</span></div></div>`,
      reporting: `<div class="visual-ui reporting-ui"><div class="report-window"><div class="window-dots"><i></i><i></i><i></i></div><div class="code-line short"></div><div class="code-line long"></div><div class="code-line mid"></div><div class="code-line longer"></div><div class="code-line short"></div><div class="code-line mid"></div></div><div class="report-stamp">LESS MANUAL<br><b>MORE IMPACT ↗</b></div></div>`
    };
    return labels[p.visual] || '';
  };

  const projectCard = (p, index) => `<article class="project-card tone-${p.tone} size-${p.size}" data-category="${p.category}" style="--card-index:${index}">
    <button class="project-open" data-project="${p.id}" aria-label="View details for ${p.title}">
      <div class="project-art art-${p.visual}">${visualMarkup(p)}<span class="project-number">${p.number} / 04</span><span class="open-arrow">↗</span></div>
      <div class="project-content"><div class="project-meta"><span>${p.category}</span><span class="project-meta-dot">✳</span></div><h3>${p.title}</h3><p class="project-subtitle">${p.subtitle}</p><div class="project-bottom"><span class="impact-label">${p.impact}</span><span class="card-arrow">↗</span></div></div>
    </button></article>`;
  const grid = $('#projects-grid');
  const filters = ['All', ...new Set(data.projects.map(p => p.category))];
  $('#project-filters').innerHTML = filters.map((f,i) => `<button class="filter-chip ${i===0?'selected':''}" data-filter="${f}">${f}</button>`).join('');
  const renderProjects = (filter='All') => {
    const selected = data.projects.filter(p => filter === 'All' || p.category === filter);
    grid.innerHTML = selected.map((p,i) => projectCard(p,i)).join('');
    $$('.project-open', grid).forEach(btn => btn.addEventListener('click', () => showProject(btn.dataset.project)));
  };
  renderProjects();
  $('#project-filters').addEventListener('click', e => {
    const btn = e.target.closest('[data-filter]'); if (!btn) return;
    $$('.filter-chip').forEach(chip => chip.classList.toggle('selected', chip === btn)); renderProjects(btn.dataset.filter);
  });

  $('#skills-groups').innerHTML = data.skills.map((group,i) => `<article class="toolkit-card"><div class="toolkit-card-head"><span class="toolkit-icon">${group.icon}</span><span class="toolkit-index">0${i+1}</span></div><h3>${group.title}</h3><div class="skill-pills">${group.items.map(item=>`<span>${item}</span>`).join('')}</div></article>`).join('');
  $('#timeline').innerHTML = data.journey.map((item,i) => `<article class="journey-item"><div class="journey-marker"><span></span></div><div class="journey-date">${item.date}</div><div class="journey-main"><span class="journey-type">${item.type}</span><h3>${item.title}</h3><h4>${item.org}</h4><p>${item.description}</p></div><div class="journey-place">${item.place}</div></article>`).join('');

  function showProject(id) {
    const p = data.projects.find(item => item.id === id); if (!p) return;
    $('#dialog-content').innerHTML = `<div class="dialog-art tone-${p.tone}">${visualMarkup(p)}</div><span class="section-kicker">${p.category} · PROJECT ${p.number}</span><h2>${p.title}</h2><p class="dialog-subtitle">${p.subtitle}</p><p>${p.description}</p><div class="dialog-impact">${p.impact}</div><div class="skill-pills dialog-tags">${p.tags.map(tag=>`<span>${tag}</span>`).join('')}</div>`;
    $('#project-dialog').showModal();
  }
  $('.dialog-close').addEventListener('click', () => $('#project-dialog').close());
  $('#project-dialog').addEventListener('click', e => { if (e.target === $('#project-dialog')) $('#project-dialog').close(); });

  // App-like bottom navigation: update active item while scrolling or tapping.
  const navItems = $$('.nav-item');
  const sections = ['home','about','work','skills','contact'].map(id => document.getElementById(id)).filter(Boolean);
  navItems.forEach(item => item.addEventListener('click', () => { navItems.forEach(n=>n.classList.toggle('active', n===item)); }));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if (!visible) return;
      let id = visible.target.id;
      if (id === 'experience') id = 'skills';
      navItems.forEach(n=>n.classList.toggle('active', n.dataset.nav===id));
    }, {rootMargin:'-25% 0px -55% 0px', threshold:[0,.15,.35]});
    sections.forEach(section=>observer.observe(section));
  }

  // Gentle reveal-on-scroll without hiding content when JS or the observer is unavailable.
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
    }), {threshold:.08});
    $$('.section-block, .project-card, .contact-section').forEach(el=>{el.classList.add('reveal-ready');revealObserver.observe(el);});
  }
})();
