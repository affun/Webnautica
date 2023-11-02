const trailer = document.querySelector("#trailer");

window.onmousemove = (e) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  trailer.style.transform = `translate(${x}px, ${y}px)`;

  const keyframes = {
    transform: `translate(${x}px, ${y}px)`,
  };

  trailer.animate(keyframes, {
    duration: 800,
  });
};
