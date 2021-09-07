'use strict';

const cardsContainer = document.querySelector('#root');

const userCards = data.map(function (userObj) {
  return generateUserCard(userObj);
});
cardsContainer.append(...userCards);

/**
 * Создает карточку на основании обьекта пользователя
 * @param {object} userObj обьект с даннывми пользователя
 * @returns {HTMLLIElement} верстка карточки
 */
function generateUserCard(userObj) {
  const { firstName, description="test", contacts } = userObj;

  const userName = createElement(
    'h2',
    { classNamesArray: ['cardName'] },
    document.createTextNode(firstName)
  );

  const cardDescription = createElement(
    'p',
    {
      classNamesArray: ['cardDescription'],
    },
    document.createTextNode(description)
  );

  const imgWrapper = createImageWrapper(userObj);
 
  const linkWrapper = createElement(
    'div',
    { classNamesArray: ['linkWrapper'] },
    ...generateLinks(contacts), 
  );

  const article = createElement(
    'article',
    { classNamesArray: ['userCard'] },
    imgWrapper,
    userName,  
    cardDescription,
    linkWrapper
  );

  const userCard = createElement(
    'li',
    { classNamesArray: ['cardWrapper'] },
    article
  );

  return userCard;
}
