document.addEventListener("DOMContentLoaded", function () {
  const map = {
    genre: "page-genre",
    country: "page-country",
    director: "page-director",
    starcast: "page-cast",
    language: "page-language",
    type: "page-type"
  };

  Object.keys(map).forEach(cls => {
    document.querySelectorAll(`.${cls}`).forEach(el => {
      const items = el.innerText.split(",");
      el.innerHTML = items.map(item => {
        const clean = item.trim();
        const filename = clean.replace(/\s+/g, "-");
        const link = `/${map[cls]}/${filename}.html`;
        // har naam ke baad comma lagao
        return `<a href="${link}" style="color:#007BFF;text-decoration:none">${clean}</a>,`;
      }).join(" ");
    });
  });
});
