const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`TV Show Search API Key`, config);
    makeImages(res.data);
    form.elements.query.value = '';
})


const resultImages = document.querySelector("#resultImages");
const makeImages = (shows) => {
    resultImages.innerHTML = '';
    for (let result of shows) {
        if (result.show.image) {
            const Container = document.createElement("div");
            Container.classList.add("first");
            // resultImages.appendChild(Container);

            Container.innerHTML = `
                    <div class="card m-3" style="width: 15rem; border-radius: 14px; background-color: #48828b; border: none; cursor: pointer;">
                        <img src="${result.show.image.medium}" class="card-img-top" style="border-radius: 14px 14px 0 0;" alt="...">
                            <div class="card-body">
                                <h5 class="card-title" style="color: #04172e">${result.show.name}</h5>
                                <a href="#" class="btn px-2" style="border-radius: 50%; color: #fff; background-color: #04172e;"> ${result.show.rating.average}</a>
                            </div>
                </div>`

            resultImages.appendChild(Container);

        }
    }
}
