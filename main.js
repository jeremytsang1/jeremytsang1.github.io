function main() {
  let pageNames = [
    {title: "home",
      file: "index.html"},
    {title: "projects",
      file: "projects.html"},
    {title: "about",
      file: "about.html"},
    {title: "contact",
      file: "contact.html"},
  ];

  let initialYear = 2020;

  addHorizontalMenu(pageNames)
  addFooterTextContent(initialYear);
}

/**
 * Create the horizontal menu for a given set of pages.
 * Assumes all HTML files are in same directory as script.
 * @param {[string, string]} pageNames - array of objects consisting
 * of title and HTML filenames.
 * @param {string} classToLink="horizontal-menu" -
 * @return
 */
function addHorizontalMenu(pageNames, classToLink="horizontal-menu") {
  let menuDiv = document.querySelector(`.${classToLink}`);
  let menuList = document.createElement("ul");
  menuList.className = "nav";

  pageNames.forEach(({title, file}) => {
    // Create new elements (<a> and <li> tags).
    let anchor = document.createElement('a');
    let item = document.createElement('li');

    // Set appropriate attributes for newly created elements.
    anchor.href = `${file}`;
    anchor.textContent = title.toUpperCase();
    anchor.className = "nav-link";
    item.className = "nav-item";

    // Link new elements properly.
    item.appendChild(anchor);
    menuList.appendChild(item);
  });

  // Link the list to the div in the menu.
  menuDiv.appendChild(menuList);
}

/**
 * Fill the footer with a string about copyright information.
 * Assumes there is a unique <footer id="footer"> in the HTML document.
 * @param {number} firstYear - The first year to start the copyright.
 * @return {null}
 */
function addFooterTextContent(firstYear) {
  let footer = document.querySelector("#footer");
  let currentYear = new Date().getFullYear();
  let copyrightMsg = (currentYear !== firstYear) ?
      `Copyright ${firstYear}-${currentYear} Jeremy Tsang` :
      `Copyright ${firstYear} Jeremy Tsang`;
  footer.textContent = copyrightMsg;
}

// ----------------------------------------------------------------------------
main();
