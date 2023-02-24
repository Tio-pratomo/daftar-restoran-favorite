const skipToContent = () => {
    const skipLinkElement = document.querySelector('.skip-link');
    skipLinkElement.addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
        skipLinkElement.blur();
    });
};

export default skipToContent;
