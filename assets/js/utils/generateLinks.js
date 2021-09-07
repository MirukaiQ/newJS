/**
 * Генерирует массив ссылок на соц сетки на основании контактов
 * @param {string[]} contacts ссылки на соц сети
 * @returns {HTMLAnchorElement[]} массив с элементами ссылок
 */
 function generateLinks(contacts) {
  // пройтись мапом выернуть уже готовые элементы ссылок
  // воспользоватся мапой для определния какую картинку делать
  const linksArray = contacts.map((contact) => {
    const url = new URL(contact);
    const hostname = url.hostname;

    if (SUPPORTED_SOCIAL_NETWORKS.has(hostname)) {
      const link = createElement('a', {
        classNamesArray: SUPPORTED_SOCIAL_NETWORKS.get(hostname),
        attrs : {href:(contacts)}
      });

      return link;
    }
  }).filter(Boolean);
  console.log(linksArray)
  return linksArray;
}