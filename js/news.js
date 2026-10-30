/* ===== 연구실 소식: data/news.json (Pages CMS '연구실 소식') ===== */
loadData('news').then(N => {
  const list = document.getElementById('newsList');
  const posts = (N.posts||[]).slice().sort((a,b) => String(b.date||'').localeCompare(String(a.date||'')));
  if(!posts.length){ list.innerHTML = '<li class="n-empty">아직 등록된 소식이 없습니다.</li>'; return; }
  list.innerHTML = posts.map(n => {
    const imgs = (n.images||[]).filter(Boolean).map(src => `<img src="${esc(src)}" alt="" loading="lazy">`).join('');
    return `<li><div class="d">${esc(String(n.date||'').replace(/-/g,'.'))}</div><div class="nb"><div class="h">${esc(n.title)}</div>${n.body?`<div class="x">${esc(n.body).replace(/\n/g,'<br>')}</div>`:''}${imgs?`<div class="nimgs">${imgs}</div>`:''}</div></li>`;
  }).join('');
});
