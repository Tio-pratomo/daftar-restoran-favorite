import UrlParser from '../../routes/url-parser';
import RestoDB from '../../data/restodb';
import { restoDetail } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
    render: async () => /* html */ `
        <h2 class="main-content__title">Detail resto</h2>
        <section id="detail-resto" class="detail__resto"></section>
        <div id="likeButtonContainer"></div>
        `,

    afterRender: async () => {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurants = await RestoDB.DetailRestaurant(url.id);

        document.querySelector('.detail__resto').innerHTML = restoDetail(restaurants);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurants: {
                id: restaurants.id,
                name: restaurants.name,
                rating: restaurants.rating,
                city: restaurants.city,
                pictureId: restaurants.pictureId,
                description: restaurants.description,
            },
        });
    },
};

export default Detail;
