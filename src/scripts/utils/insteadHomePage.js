import UrlParser from '../routes/url-parser';

const insteadHomePage = () => {
    const { resource } = UrlParser.parseActiveUrlWithoutCombiner();

    if (resource !== null && resource !== 'home') {
        document.querySelector('.hero__text').style.display = 'none';
        document.querySelector('.hero').style.minHeight = '200px';
        document.querySelector('.footer').style.backgroundColor = 'transparent';
    } else {
        document.querySelector('.hero__text').style.display = 'block';
        document.querySelector('.hero').style.minHeight = '600px';
        document.querySelector('.footer').style.backgroundColor = '#E8D620';
    }
};

export default insteadHomePage;
