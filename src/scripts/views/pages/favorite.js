import FavoriteRestoIdb from '../../data/resto-idb';
import { homeTemplate } from '../templates/template-creator';

const Favorite = {
    render: async () => /* html */ `
        <h2 class="main-content__title">Resto favoritemu</h2>
        <section id="explore-restaurant" class="explore__restaurant"></section>`,
    afterRender: async () => {
        const restaurants = await FavoriteRestoIdb.getAllResto();
        restaurants.forEach((restaurant) => {
            const { city, description, id, name, pictureId, rating } = restaurant;
            document
                .getElementById('explore-restaurant')
                .insertAdjacentHTML('beforeend', homeTemplate({ city, description, id, name, pictureId, rating }));
        });
    },
};

export default Favorite;
