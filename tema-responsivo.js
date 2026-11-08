(function(){
  const btn=document.getElementById('theme-toggle');
  const root=document.documentElement;
  function render(){const dark=root.dataset.theme==='dark';btn.setAttribute('aria-pressed',String(dark));btn.setAttribute('aria-label',dark?'Ativar tema claro':'Ativar tema escuro');btn.querySelector('.theme-icon').textContent=dark?'☀':'☾';btn.querySelector('.theme-label').textContent=dark?'Claro':'Escuro';}
  btn.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('belm-theme',root.dataset.theme)}catch(e){}render()});render();
  document.querySelectorAll('video').forEach(v=>{v.setAttribute('playsinline','');v.setAttribute('webkit-playsinline','');v.setAttribute('preload','metadata');});
})();
