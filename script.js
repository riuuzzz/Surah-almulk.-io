document.addEventListener("scroll", function() {
    const box = document.querySelector(".box");
    const boxPosition = box.getBoundingClientRect();
    
    if (boxPosition.top < window.innerHeight && boxPosition.bottom >= 0) {
        // Jika elemen terlihat di viewport
        box.classList.add("visible");
    }
});