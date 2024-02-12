const ul = document.querySelector('#data-container');

function createElementPhoto(url, text) {
    const li = document.createElement('li');
    li.className = "photo-item";

    const img = document.createElement('img');
    img.className = 'photo-item__image';
    img.src = url;

    const h3 = document.createElement('h3');
    h3.className = 'photo-item__title';
    h3.innerHTML = text;
    li.append(img, h3)
    return li;
}

function toggleLoader () {
    const loaderHtml = document.querySelector('#loader');
    const isHiden = loaderHtml.getAttribute('hidden') !== null;
    if (isHiden) {
        loaderHtml.removeAttribute('hidden');
    } else {
        loaderHtml.setAttribute('hidden', '');
    }
}

function getFastestLoadedPhoto(ids) {
    toggleLoader();
    Promise.race(ids.map(id => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response => response.json())
        .then(photo => {
         const photoHtml = createElementPhoto(photo.url, photo.title);
            ul.append(photoHtml)
        })
        .catch(error => {console.error(error)})
        .finally(() => {
            toggleLoader();
        })
    }))

}



getFastestLoadedPhoto([60, 12, 55])