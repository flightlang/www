
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  function setTheme(next){
    if (next === 'light') root.setAttribute('data-theme','light');
    else root.setAttribute('data-theme','dark');
    localStorage.setItem('theme', root.getAttribute('data-theme'));
  }

  document.addEventListener('DOMContentLoaded', () => {
    const tgl = document.querySelector('#theme-toggle');
    if (tgl) tgl.addEventListener('click', () => {
      const cur = root.getAttribute('data-theme');
      setTheme(cur === 'light' ? 'dark' : 'light');
    });

    const menuBtn = document.querySelector('#menu-btn');
    const mobile = document.querySelector('#mobile');
    if (menuBtn && mobile) {
      menuBtn.addEventListener('click', () => {
        mobile.style.display = mobile.style.display === 'block' ? 'none' : 'block';
      });
    }
  });
})();
