/* ===== 모든 페이지 공통 ===== */
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* Pages CMS에서 수정하는 내용(data/*.json) 읽기 */
/* 파일이 비어 있거나 깨져 있어도 페이지가 멈추지 않도록 빈 데이터({})로 처리 */
const loadData = name => fetch('data/'+name+'.json', {cache:'no-cache'})
  .then(r => r.text()).then(t => { try { return JSON.parse(t); } catch(e) { return {}; } });
/* CMS 서식 글(rich-text)의 문단(<p>)들을 하나씩 꺼냄 */
const paras = html => {
  const d = document.createElement('div'); d.innerHTML = html || '';
  const ps = [...d.children].filter(e => e.tagName === 'P');
  return ps.length ? ps.map(p => p.innerHTML) : [d.innerHTML];
};

document.getElementById('yr').textContent = new Date().getFullYear();

/* 예전 주소(index.html#professor 등)로 들어오면 해당 메뉴 페이지로 이동 */
const OLD_VIEW = location.hash.slice(1);
if(['professor','research','publications','members','news','contact'].includes(OLD_VIEW)) location.replace(OLD_VIEW+'.html');
