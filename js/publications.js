/* ===== Publications: 데이터 ===== */
const TOPIC_LABEL = {all:"전체", seed:"종자 생리", metabolite:"기능성 대사물질", other:"기타"};

/* 논문·특허 목록은 data/publications.json (Pages CMS '연구실적')에서 수정 · * = 교신저자 */
let PUBS = [];

/* ===== Publications: 렌더링 ===== */
function hl(authors){
  let s = esc(authors);
  s = s.replace(/(김두현|Du[- ]Hyun Kim|D\.H\. Kim)\*?/g, m => '<mark>'+m+'</mark>');
  return s;
}

let topic = 'all';
const tf = document.getElementById('topicFilters');
tf.innerHTML = Object.entries(TOPIC_LABEL).map(([k,v]) => `<button class="fbtn${k==='all'?' on':''}" data-k="${k}">${v}</button>`).join('');
tf.addEventListener('click', e => {
  const b = e.target.closest('.fbtn'); if(!b) return;
  topic = b.dataset.k;
  tf.querySelectorAll('.fbtn').forEach(x => x.classList.toggle('on', x===b));
  renderPubs();
});
document.getElementById('q').addEventListener('input', ()=>renderCurrent());
let tab='papers';
function renderCurrent(){
  document.getElementById('pubTools').hidden = tab==='patents';
  document.getElementById('pubCount').hidden = tab==='patents';
  if(tab==='papers') renderPubs();
}
document.getElementById('pubTabs').addEventListener('click', e=>{
  const b=e.target.closest('.tab'); if(!b) return;
  tab=b.dataset.t;
  document.querySelectorAll('#pubTabs .tab').forEach(x=>x.classList.toggle('on',x===b));
  ['papers','patents'].forEach(t=>document.getElementById('pane-'+t).hidden = t!==tab);
  renderCurrent();
});


function renderPubs(){
  const q = document.getElementById('q').value.trim().toLowerCase();
  const list = PUBS.filter(p => (topic==='all'||p.topic===topic) &&
    (!q || (p.t+' '+p.a+' '+p.j+' '+p.y).toLowerCase().includes(q)));
  document.getElementById('pubCount').textContent = `${list.length}편 / 전체 ${PUBS.length}편`;
  if(!list.length){ document.getElementById('pubList').innerHTML = '<div class="empty">검색 결과가 없습니다.</div>'; return; }
  const years = [...new Set(list.map(p=>p.y))].sort((a,b)=>b-a);
  document.getElementById('pubList').innerHTML = years.map(y => `
    <div class="year-group"><h3>${y}</h3>
    ${list.filter(p=>p.y===y).map(p => `
      <div class="pub"><div>
        <a class="t" href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.t)}</a>
        <div class="a">${hl(p.a)}</div>
        <div class="j"><i>${esc(p.j)}</i> · ${p.y}<span class="idx">${esc(p.idx)}</span></div>
      </div><div class="side">
        <span class="chip ${p.topic==='seed'?'gold':''}">${TOPIC_LABEL[p.topic]}</span>
      </div></div>`).join('')}
    </div>`).join('');
}

loadData('publications').then(D => {
  PUBS = D.papers || [];
  const patents = D.patents || [];
  document.getElementById('cntPapers').textContent = PUBS.length;
  document.getElementById('cntPatents').textContent = patents.length;
  document.getElementById('patentList').innerHTML = patents.map(x => `
      <div class="achi"><span class="chip gold">${esc(x.kind)}</span><div><b>${x.url?`<a href="${esc(x.url)}">${esc(x.title)}</a>`:esc(x.title)}</b><p>${esc(x.info)}</p></div></div>`).join('');
  renderPubs();
});
