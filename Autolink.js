document.addEventListener("DOMContentLoaded", function () {
  const fields = ["genre","country","director","starcast","language","type"];
  fields.forEach(cls => {
    document.querySelectorAll(`.${cls}`).forEach(el => {
      const items = el.innerText.split(",");
      el.innerHTML = items.map(item => {
        const clean = item.trim();
        const link = encodeURIComponent(clean.toLowerCase().replace(/\s+/g, "-"));
        return `<a href="/search/${link}" style="color:#007BFF;text-decoration:none">${clean}</a>`;
      }).join(", ");
    });
  });
});
