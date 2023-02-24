import RestoDB from '../../data/restodb';

import { homeTemplate } from '../templates/template-creator';

const Home = {
    render: async () => /* html */ `
        <h2 class="main-content__title">jelajahi restoran kami di berbagai kota</h2>
        <section id="explore-restaurant" class="explore__restaurant"></section>`,
    afterRender: async () => {
        const restaurants = await RestoDB.HomePage();
        restaurants.forEach((restaurant) => {
            const { city, description, id, name, pictureId, rating } = restaurant;
            document
                .getElementById('explore-restaurant')
                .insertAdjacentHTML('beforeend', homeTemplate({ city, description, id, name, pictureId, rating }));
        });
    },
};

export default Home;
