/* ===== Home: 연구실 소개 · 모집 (Pages CMS '연구실 소개', '대학원생 · 학부연구생 모집') ===== */
loadData('about').then(A => {
  document.getElementById('aboutTxt').innerHTML = paras(A.body).map(p => `<div class="ab-row"><p>${p}</p></div>`).join('');
  const fig = document.getElementById('aboutFig');
  fig.hidden = !A.image;
  fig.innerHTML = A.image ? `<img src="${esc(A.image)}" alt="${esc(A.image_alt)}">` : '';
});

loadData('recruit').then(R => {
  document.getElementById('recruitBox').innerHTML = `
      <ul class="want">${(R.items||[]).map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      ${paras(R.call).map(p => `<p class="want-call">${p}</p>`).join('')}`;
});
