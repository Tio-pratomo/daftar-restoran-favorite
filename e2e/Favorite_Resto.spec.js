Feature('Favorite Resto');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
    I.dontSeeElement('.card');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.dontSeeElement('.card');

    I.amOnPage('/');

    I.wait(2);

    I.seeElement('.card-content__link');
    I.click('.card-content__link');

    I.amOnPage('/#/detail');
    I.wait(2);
    I.seeElement('.detail-resto__title');

    const itemTitle = await I.grabTextFrom('.detail-resto__title');

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.wait(2);
    I.seeTextEquals(itemTitle, '.card-content__link');
});

Scenario('Unliking one favorite restaurant', async ({ I }) => {
    I.dontSeeElement('.card');

    I.amOnPage('/');

    I.wait(2);

    I.seeElement('.card-content__link');
    I.click('.card-content__link');

    I.amOnPage('/#/detail');
    I.wait(2);
    I.seeElement('.detail-resto__title');

    const itemTitle = await I.grabTextFrom('.detail-resto__title');

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.wait(2);
    I.seeTextEquals(itemTitle, '.card-content__link');

    I.click('.card-content__link');
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.wait(2);
    I.dontSeeElement('.card-content__link');
});
