let nav=document.querySelector(".main-nav__wrapper"),toggle=document.querySelector(".main-header__toggle"),header=document.querySelector(".main-header__toggle");nav.classList.remove("main-nav__wrapper--nojs"),header.classList.remove("main-header__toggle--nojs"),toggle.addEventListener("click",(function(){nav.classList.contains("main-nav__wrapper--close")?(nav.classList.remove("main-nav__wrapper--close"),nav.classList.add("main-nav__wrapper--open"),toggle.classList.remove("main-header__toggle--open"),toggle.classList.add("main-header__toggle--close")):(nav.classList.add("main-nav__wrapper--close"),nav.classList.remove("main-nav__wrapper--open"),toggle.classList.add("main-header__toggle--open"),toggle.classList.remove("main-header__toggle--close"))}));