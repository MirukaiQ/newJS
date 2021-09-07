
function createImageWrapper (userObj) {
  const {id, profilePicture, firstName, lastName } = userObj;
  const img = createElement('img', {
    classNamesArray: ['img'],
    attrs: { src: profilePicture, alt: firstName, 'data-id': id },
  });
  img.addEventListener('error', deleteHandler);
  img.addEventListener('load', imageLoadHandler);

  const initails = createElement(
    'div',
    { classNamesArray: ['initials'] },
    document.createTextNode(
      firstName
        .trim()
        .split(' ')
        .map((word) => word[0])
        .join(' ')
    )
  );
  initails.style.backgroundColor = stringToColour(firstName);

  const imgWrapper = createElement(
    'div',
    { classNamesArray: ['imgWrapper'], attrs: { id: `wrapper${id}` } },
    initails
  );

  return imgWrapper;
}