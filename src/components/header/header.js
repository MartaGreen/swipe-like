import "./header.scss";
import "./header.hover.scss";

import "../../../assets/images/header/search.svg";

window.onload = () => {
  const header = document.querySelector(".header");
  const searchBtn = header.querySelector(".search__btn");

  const showSearchDropdown = (e) => {
    if (window.innerWidth <= 520) {
      console.log("test");
      const searchDropdown = header.querySelector(".header__search-dropdown");
      searchDropdown.classList.toggle("header__search-dropdown_hidden");
    }
  };

  searchBtn.addEventListener("click", showSearchDropdown);
};
