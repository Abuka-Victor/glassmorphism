const cards = document.querySelectorAll(".card");

cards.forEach((card) => card.addEventListener("click", viewDeets));

function viewDeets(e) {
    const parent = e.target.parentElement;
    const card = parent.parentElement.parentElement;
    if (parent.id.trim() === "dots") {
        const details = card.querySelector(".card_details");
        details.classList.toggle("appear");
    }
}

const dropdownBtns = document.querySelectorAll(".dropdown__btn");
dropdownBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
        const list = btn.querySelector(".dropdown__list");
        if (list) {
            list.classList.toggle("active");
        }
    })
);
