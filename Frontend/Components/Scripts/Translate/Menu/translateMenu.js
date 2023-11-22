const menuTranslateFunc = (columnNumberMenu) => {
  return fetch(raiz+'/Frontend/Components/Scripts/Translate/Menu/languageMenu.csv')
  .then((response) => response.text())
  .then((csvData) => {
    const result = Papa.parse(csvData, {
      header: false,
      skipEmptyLines: true,
      encoding: 'UTF-8',
      delimiter: ';'
    });
    menu_mostrar_data(result.data, columnNumberMenu);
  })
  .catch((error) => {
    console.error('Error al cargar el archivo CSV:', error);
  });
};
  
const menu_mostrar_data = (array_resultado, columnNumberMenu) => {
let position = 0;
array_resultado.forEach((e) => {
  position += 1;
  if (document.querySelector(`.menuTrad${position}`).tagName.toLowerCase() === "input") {
    document.querySelector(`.menuTrad${position}`).value += e[columnNumberMenu];
  } else {
    document.querySelector(`.menuTrad${position}`).textContent += e[columnNumberMenu];
  }
});
};


let columnNumberMenu

if(localStorage.getItem('columnNumber') == null){
  localStorage.setItem('columnNumber', 1);
  columnNumberMenu = localStorage.getItem('columnNumber')
}else{
  columnNumberMenu = localStorage.getItem('columnNumber');
}


menuTranslateFunc(columnNumberMenu);