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
      el.innerHTML = items.map((item, i) => {
        // Trim + multiple spaces ko single space me convert
        const clean = item.trim().replace(/\s+/g, " ");
        const filename = clean.replace(/\s+/g, "-");
        const link = `/${map[cls]}/${filename}.html`;
        // Last item ke baad comma na lagao
        const comma = (i < items.length - 1) ? "," : "";
        return `<a href="${link}" style="color:#007BFF;text-decoration:none">${clean}</a>${comma}`;
      }).join(" ");
    });
  });
});
