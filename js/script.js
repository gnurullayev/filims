let elForm = document.querySelector(".form")
let elFormBtn = document.querySelector(".js-btn")
let elSelect = document.querySelector(".js-select");
elSelect.className = "form-select w-25";

let elList = document.querySelector(".js-list");

let elListItemTemplate = document.querySelector("#js-template").content;


// AddSelectOptionRender

let options = [];
films.forEach(element => {
    element.genres.forEach(optinValue => {
        if(!options.includes(optinValue)) {
            options.push(optinValue)
        }
    })
})

options.forEach(option => {
    let elOption =  document.createElement("option");
    elOption.textContent = option;
    elOption.value = option;

    elSelect.appendChild(elOption)
})

// AddListItemRender

function createListItem (film) {
    let elItem = elListItemTemplate.cloneNode(true);

    elItem.querySelector(".card-img").src = film.poster;
    elItem.querySelector(".card-img").alt = film.poster;

    elItem.querySelector(".card-title").textContent = film.title;
    elItem.querySelector(".card-text").textContent = film.overview.slice(0,50) + "...";

    elItem.querySelector(".card-footer-icon").innerHTML = `<i class="bi bi-stars text-warning fs-4"></i>`;

    return elItem
}

// AddRenderingItem
function addRenderingFilim(films) {
    let filimWraperItem = document.createDocumentFragment();

    films.forEach(film => filimWraperItem.appendChild(createListItem(film)))
    elList.innerHTML = null;
    elList.appendChild(filimWraperItem)
}

addRenderingFilim(films)

//Films Filter

elSelect.addEventListener("change", () => {
    let filteredFilms = films.filter(film => {
        return film.genres.includes(elSelect.value)
    })

    return  addRenderingFilim(filteredFilms);
})






