/* ===== Professor: data/professor.json (Pages CMS '지도교수') ===== */
loadData('professor').then(P => {
  const tl = list => `<ul class="tl">${(list||[]).map(x => `<li><span class="yr">${esc(x.yr)}</span><span>${esc(x.text)}${x.en?`<small class="tl-en">${esc(x.en)}</small>`:''}</span></li>`).join('')}</ul>`;
  document.getElementById('profBox').innerHTML = `
      <div class="prof-card">
        ${P.photo?`<img class="avatar" src="${esc(P.photo)}" alt="${esc(P.name)} 교수">`:''}
        <h3>${esc(P.name)}</h3>
        <div class="en">${esc(P.en)}</div>
        <div class="pos">${esc(P.position).replace(/\n/g,'<br>')}</div>
        <ul class="contact-list">${(P.contacts||[]).map(c => `<li><b>${esc(c.label)}</b><span>${esc(c.value)}</span></li>`).join('')}</ul>
        <div class="ext-links">${(P.links||[]).map(l => `<a class="chip" href="${esc(l.url)}">${esc(l.label)}</a>`).join('')}</div>
      </div>
      <div class="timeline">
        <div class="tl-col"><h4>학력 (Education)</h4>${tl(P.education)}
        <h4>수상 (Awards)</h4>${tl(P.awards)}</div>
        <div class="tl-col"><h4>주요 경력 (Career)</h4>${tl(P.career)}</div>
      </div>`;
});
