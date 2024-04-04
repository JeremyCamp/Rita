const btnMenu = document.querySelectorAll("button");

btnMenu.forEach(btn => {
    btn.addEventListener("click", () => {
        const page = btn.getAttribute("data-page");
        if (page) {
            window.location.href = page;
        }
    });
});
