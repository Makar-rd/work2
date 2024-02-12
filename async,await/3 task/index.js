
function toggleLoader () {
    const loaderHtml = document.querySelector('#loader');
    const isHidden = loaderHtml.getAttribute('hidden') !== null;
    if (isHidden) {
        loaderHtml.removeAttribute('hidden');
    } else {
        loaderHtml.setAttribute('hidden', '');
    }
}


async function renderAlbums() {
    toggleLoader()
    const ul = document.querySelector('.data-container')
    try {
        const requests = await fetch(`https://jsonplaceholder.typicode.com/albums`)
        const albums = await requests.json();
        console.log(albums)
        ul.innerHTML = '';
        albums.forEach(album => {
            const li = document.createElement('li');
            li.innerHTML = album.title;
            ul.append(li)
        })
        
    } catch(error) {
     
            ul.innerHTML = 'Произошла ошибка в получении данных об альбомах...'
        
    } finally {
        toggleLoader();
    }
   
}
renderAlbums()