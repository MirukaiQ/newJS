/**
 * Создает HTML элемент
 * @param {string} tagName имя элемента
 * @param {object} options обьект настроек
 * @param {string[]} options.classNamesArray массив строк с именами CSS классов 
 * @param {object} options.attrs обьект с аттрибутами
 * @param {Function} options.onClick функция обработки события клика
 * @param  {Node[]} children дочерние DOM узлы
 * @returns {HTMLElement} созданный элемент 
 */
 function createElement(tagName, options, ...children) {
  const { classNamesArray = [''], attrs = {}, onClick = () => {} } = options;

  const element = document.createElement(tagName);
  
  element.classList.add(...classNamesArray);

  const attributesTuples = Object.entries(attrs);

  for (const attribute of attributesTuples) {
    const [key, value] = attribute;
    element.setAttribute( key , value);
  }

  element.onclick = onClick;

  element.append(...children);

  return element;
}
