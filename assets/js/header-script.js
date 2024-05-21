
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove .active and .text-white classes from all buttons
            buttons.forEach(btn => btn.classList.remove("active",
                "text-cyan-400",
                "border-cyan-400",
                "bg-cyan-400",
                "bg-opacity-10"));

            this.classList.add("active",
                "text-cyan-400",
                "border-cyan-400",
                "bg-cyan-400",
                "bg-opacity-10");
        });
    });
});
