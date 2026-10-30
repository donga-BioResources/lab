/* ===== Members: data/members.json (Pages CMS '구성원 · 졸업생') ===== */
loadData('members').then(D => {
  const MEMBERS = D.groups || [], ALUMNI = D.alumni || [];   /* 졸업생: 위에서 아래로 입학 순서 */
  document.getElementById('memberList').innerHTML = MEMBERS.map(g => `
  <div class="mgroup"><h3>${esc(g.group)}</h3><div class="mcards">
  ${(g.list||[]).length ? g.list.map(m => `
    <div class="mcard"><div class="ph">${esc(String(m.ko||'').slice(-2))}</div><div>
      <h4>${esc(m.ko)}<span>${esc(m.en)}</span></h4><div class="role">${esc(m.role)}</div>${m.desc?`<p>${esc(m.desc)}</p>`:''}</div></div>`).join('')
  : `<div class="mcard ph-empty"><div class="ph">+</div><div><h4>구성원 추가 예정</h4><p>이름 · 연구 주제를 넣어 주세요.</p></div></div>`}
  </div></div>`).join('');
  document.getElementById('memberList').innerHTML += `
  <div class="mgroup"><h3>Alumni · 졸업생</h3>
  <ul class="alumni">${ALUMNI.map((a,i)=>({...a,no:i+1})).reverse().map(a=>`<li><span class="yr">${a.no}</span><span>${esc(a.n)}${a.note?`<em class="al-note">${esc(a.note)}</em>`:''}</span></li>`).join('')}</ul></div>`;
});
