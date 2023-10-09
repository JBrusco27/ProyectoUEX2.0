const menuTranslateFunc = (columnNumber) => {
  return fetch(raiz+'/Frontend/Components/Scripts/Translate/Menu/languageMenu.csv')
  .then((response) => response.text())
  .then((csvData) => {
    const result = Papa.parse(csvData, {
      header: false,
      skipEmptyLines: true,
      encoding: 'UTF-8',
      delimiter: ';'
    });
    menu_mostrar_data(result.data, columnNumber);
  })
  .catch((error) => {
    console.error('Error al cargar el archivo CSV:', error);
  });
};
  
const menu_mostrar_data = (array_resultado, columnNumber) => {
let position = 0;
array_resultado.forEach((e) => {
  position += 1;
  if (document.querySelector(`.menuTrad${position}`).tagName.toLowerCase() === "input") {
    document.querySelector(`.menuTrad${position}`).value += e[columnNumber];
  } else {
    document.querySelector(`.menuTrad${position}`).textContent += e[columnNumber];
  }
});
};

let columnNumber = localStorage.getItem('columnNumber');

menuTranslateFunc(columnNumber);