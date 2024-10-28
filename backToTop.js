window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  const btn = document.getElementById("btnTopo");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.classList.remove("hide");
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
    btn.classList.add("hide");
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
