const url = new URL(window.location);
const searchParams = new URLSearchParams(url.search);
const ingredientsId = searchParams.get("id");

fetch("./Front/JSON/inventory.json")
.then(response => response.json())
.then(data => {
    console.log(data);
})