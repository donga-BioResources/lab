/* 열 때의 화면 폭으로 레이아웃 결정.
   넓은 화면: 본문 폭 고정(확대/축소해도 문단 유지) · 좁은 창/옆 패널: 화면 폭에 맞춰 반응형 */
(function(){
  var rules=[];
  [].forEach.call(document.styleSheets,function(sh){ var cr; try{ cr=sh.cssRules; }catch(e){ return; } [].forEach.call(cr||[],function(r){ if(r.media) rules.push({r:r,t:r.media.mediaText}); }); });
  function fluid(on){
    rules.forEach(function(o){
      var t=o.t;
      if(on){
        if(/^\(pointer: ?fine\)$/.test(t.trim())) t='(max-width:0px)';          /* 고정폭 블록 끄기 */
        else t=t.replace(/,\s*\(pointer: ?fine\)/g,'').replace(/\s*and\s*\(pointer: ?coarse\)/g,'');
      }
      if(o.r.media.mediaText!==t) o.r.media.mediaText=t;
    });
  }
  var dpr=window.devicePixelRatio||1;
  function set(){
    var vw=window.innerWidth||document.documentElement.clientWidth||1280;
    if(vw<1088){ fluid(true); }
    else{ fluid(false); document.documentElement.style.setProperty('--W',Math.round(Math.min(1520,Math.max(1040,vw*0.82)))+'px'); }
  }
  set();
  addEventListener('resize',function(){ var d=window.devicePixelRatio||1; if(Math.abs(d-dpr)>0.001){ dpr=d; return; } set(); });
})();
