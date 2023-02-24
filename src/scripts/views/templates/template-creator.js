import CONFIG from '../../globals/config';

const homeTemplate = ({ city, description, id, name, pictureId, rating }) => /* html */ `
    <div class="card">
        <div class="img-container">
            <img class="card-image lazyload" alt="${name}" data-src="${CONFIG.BASE_IMAGE_URL + pictureId}"/>
            <span class="card-rating">
                <span>${rating}</span>
            </span>
        </div>

        <div class="card-content">
            <h2 class="card-content__place-name"><a class="card-content__link" href="/#/detail/${id}">${name}</a></h2>
            <p class="card-content-title">${city}</p>
            <p class="truncate">${description}</p>
        </div>
    </div>
    `;

const restoDetail = ({
    address,
    city,
    customerReviews,
    description,
    menus: { foods, drinks },
    name,
    pictureId,
    rating,
}) => /* html */ `
    <h2 class="detail-resto__title">${name}</h2>
    <img class="detail-resto__poster" src="${CONFIG.BASE_IMAGE_URL + pictureId}" alt="${name}" />

    <div class="detail-resto__info">
        <h3 class="detail-resto__title">Informasi Lengkap</h3>
        <h4 class="detail-resto__subtitle">Rating : ${rating}</h4>
        <h4 class="detail-resto__subtitle">Alamat - Kota</h4>
        <p class="detail-resto__text">${address} - ${city}</p>
        <h4 class="detail-resto__subtitle">Deskripsi</h4>
        <p class="detail-resto__text">${description}</p>
    </div>
    
    <div class="detail-resto__overview">
        <h3 class="detail-resto__title">Menu Makanan</h3>
        <div>
            ${foods.map((value) => `<p class="detail-resto__text">${value.name}</p>`).join('')}
        </div>
        <h3 class="detail-resto__title">Menu Minuman</h3>
        <div>${drinks.map((value) => `<p class="detail-resto__text">${value.name}</p>`).join('')}</div>
    </div>

    <div class="detail-resto__review">
        <h3 class="detail-resto__title">Review</h3>
        
        ${customerReviews
            .filter((_, index) => index < 3)
            .map(
                (cusReview) => /* html */ `
                <div>
                    <h4 class="detail-resto__subtitle">${cusReview.name}</h4>
                    <p class="detail-resto__text">${cusReview.review}</p>
                </div>`
            )
            .join('')}
        
        
    </div>
`;

const createLikeButtonTemplate = () => /* html */ `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => /* html */ `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { homeTemplate, restoDetail, createLikeButtonTemplate, createLikedButtonTemplate };
