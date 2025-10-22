// ✅ Esperamos a que el documento cargue completamente
document.addEventListener("DOMContentLoaded", () => {
  // Botones de las tarjetas
  const btnLuces = document.getElementById("btn-luces");
  const btnAutoctonos = document.getElementById("btn-autoctonos");

  // Modales (ventanas emergentes)
  const modalLuces = document.getElementById("modal-luces");
  const modalAutoctonos = document.getElementById("modal-autoctonos");

  // Botones de cerrar
  const closeButtons = document.querySelectorAll(".close");

  // 🔹 Mostrar modal de Traje de Luces
  btnLuces.addEventListener("click", () => {
    modalLuces.style.display = "flex";
  });

  // 🔹 Mostrar modal de Autóctonos
  btnAutoctonos.addEventListener("click", () => {
    modalAutoctonos.style.display = "flex";
  });

  // 🔹 Cerrar modales al hacer clic en la X
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

  // 🔹 Cerrar modal al hacer clic fuera del contenido
  window.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
});
