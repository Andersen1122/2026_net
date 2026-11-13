const scene = document.getElementById("scene");
const button = document.getElementById("transformButton");
const description = document.getElementById("description");

let isIndustrial = false;

button.addEventListener("click", function(event) {
    event.stopPropagation();

    isIndustrial = !isIndustrial;

    if (isIndustrial) {
        document.body.classList.add("industrial");

        description.textContent =
            "Nature has disappeared. Industry has taken over.";

        button.textContent = "RESTORE NATURE";

    } else {
        document.body.classList.remove("industrial");

        description.textContent =
            "A peaceful world of nature.";

        button.textContent = "CLICK TO TRANSFORM";
    }
});