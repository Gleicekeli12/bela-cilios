// Menu mobile
const hamb = document.getElementById("hamb");
const menu = document.getElementById("menu");
hamb.addEventListener("click", () => menu.classList.toggle("open"));
menu
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => menu.classList.remove("open"))
  );

// Ano do rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp com mensagem pré-preenchida (edite a msg se quiser)
const zapLinks = [
  document.getElementById("zap"),
  document.getElementById("ctaHero"),
  document.getElementById("ctaMid"),
  document.getElementById("ctaContato"),
].filter(Boolean);
const phone = "5599999999999"; // <-- troque pelo seu número (com DDI + DDD)
const msg = encodeURIComponent(
  "Olá! Gostaria de agendar um horário no Studio Bela Cílios. 🙂"
);
zapLinks.forEach((el) => {
  if (!el) return;
  el.href = `https://wa.me/${phone}?text=${msg}`;
});

// Lightbox simples para a galeria (sem dependências)
const figs = document.querySelectorAll(".galeria figure");
const overlay = document.createElement("div");
overlay.style.cssText = `
      position:fixed; inset:0; background:rgba(0,0,0,.75); display:none;
      align-items:center; justify-content:center; z-index:70; padding:20px
    `;
const big = document.createElement("img");
big.style.cssText =
  "max-width:92vw; max-height:86vh; border-radius:14px; box-shadow:0 10px 30px rgba(0,0,0,.4); background:#fff";
overlay.appendChild(big);
overlay.addEventListener("click", () => (overlay.style.display = "none"));
document.body.appendChild(overlay);

figs.forEach((f) => {
  f.addEventListener("click", () => {
    big.src = f.querySelector("img").src;
    big.alt = f.querySelector("img").alt || "";
    overlay.style.display = "flex";
  });
});
