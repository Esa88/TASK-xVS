document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtns = document.querySelectorAll(".dropbtn");

    dropdownBtns.forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation();
            let dropdownContent = this.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
        document.querySelectorAll(".dropdown-content").forEach(menu => {
            menu.style.display = "none";
        });
    });

    // Dropdown functionality for Features, Pricing, and Resources
    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", function (event) {
            event.stopPropagation();
            let dropdown = this.querySelector(".dropdown-content");
            document.querySelectorAll(".dropdown-content").forEach(menu => {
                if (menu !== dropdown) {
                    menu.style.display = "none";
                }
            });
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        });
    });
});
