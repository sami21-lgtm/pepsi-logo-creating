document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("interactiveCard");

    // Click/Touch event listener 
    card.addEventListener("click", (e) => {
        // Jodi user shop button e press na kore card panel e press kore tabhi toggle hobe
        if (!e.target.classList.contains('shop-btn')) {
            card.classList.toggle("expanded");
        }
    });
});
