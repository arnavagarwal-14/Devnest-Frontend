let block = document.getElementsByClassName("pixel");

Array.prototype.forEach.call(block, el => {
    el.addEventListener("click", () => {
        el.classList.toggle("change-color");
    });
}); 