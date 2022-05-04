fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(menu => renderMenu(menu));


const ramenList = document.querySelector('#ramen-menu');
const details = document.querySelector('#ramen-detail');
const img = details.querySelector('.detail-image');
const h2 = details.querySelector('.name');
const h3 = details.querySelector('.restaurant');
const rating = document.querySelector('#rating-display');
const comment = document.querySelector('#comment-display');
const form = document.querySelector('#new-ramen');


const renderMenu = menu => {

    menu.forEach(dish => {
        const img = document.createElement('img');
        img.src = dish.image;
        ramenList.appendChild(img);
        img.addEventListener('click', () =>getInfo(dish))
    })
}

const getInfo = dish => {

    h2.textContent = dish.name;
    img.src = dish.image;
    h3.textContent = dish.restaurant;
    rating.textContent = dish.rating;
    comment.textContent = dish.comment;
}

const newRamenCreator = e => {
    e.preventDefault();
    const newRamen = {
        name: e.target.name.value,
        image: e.target.image.value,
        restaurant: e.target.restaurant.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value
    }
    renderMenu([newRamen]);
    form.reset();
}


form.addEventListener('submit', newRamenCreator);