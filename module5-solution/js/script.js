let generator = document.querySelector(".generator");

let colors = ["teal", "#e91e63", "#f44336", "#9c27b0", "#3F51B5", "#2196F3", "#795548", "#FFC107"];

let content = ["Hello user", "Thank you", "Good luck", "Rate me", "Dummy text"];

generator.addEventListener("click", () =>{
    generator.style.cssText = `background-color: ${colors[Math.floor(Math.random() * colors.length)]}`;
    document.body.style.cssText = `background-color: ${colors[Math.floor(Math.random() * colors.length)]}`;
    document.querySelector(".text").innerHTML = content[Math.floor(Math.random() * content.length)];
});