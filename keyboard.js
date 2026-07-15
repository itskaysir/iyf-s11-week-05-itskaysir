const form =
document.getElementById("myForm");

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        alert("saved");
    }

    if (event.key === "Escape") {
        const inputs =
        document.querySelectorAll("input, textarea");
        inputs.forEach(input => input.value = "");
        alert("form cleared");
    }

    if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        form.requestSubmit();
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted");
});