﻿document.addEventListener("DOMContentLoaded", function () {
    let categoriesBtn = document.querySelector(".section__categories-btn")
    let popup = document.querySelector(".popup")
    let closePopup = document.querySelector(".close-popup")
    let popupArea = document.querySelector(".popup__area")

    categoriesBtn.addEventListener("click", function () {
        document.body.classList.add("no-scroll")
        popup.classList.add("open")
    })

    closePopup.addEventListener("click", function () {
        document.body.classList.remove("no-scroll")
        popup.classList.remove("open")
    })

    popupArea.addEventListener("click", function () {
        document.body.classList.remove("no-scroll")
        popup.classList.remove("open")
    })


    let searchInput = document.querySelector(".search__input");
    searchInput.addEventListener("keypress", function (e) {
        if (e.key == "Enter" && this.value != "") {
            e.preventDefault();
            document.querySelector(".search__btn").click();
        }
    })
})