// Conseguir datos del archivo csv
const menuTranslateFunc = async (columnNumber) => {
  try {
    const response = await fetch('../Components/Scripts/Translate/Menu/languageMenu.csv');
    const csvData = await response.text();
    const result = Papa.parse(csvData, {
      header: false,
      skipEmptyLines: true,
      encoding: 'UTF-8',
      delimiter: ';'
    });
    
    menu_mostrar_data(result.data, columnNumber);
  } catch (error) {
    console.error('Error al cargar el archivo CSV:', error);
  }
};

// Traducir pagina
const menu_mostrar_data = (array_resultado, columnNumber) => {
  let position = 0;
  array_resultado.forEach(e => {
    position += 1;
    if (document.querySelector(`.menuTrad${position}`).tagName.toLowerCase() === "input") {
      document.querySelector(`.menuTrad${position}`).value += e[columnNumber];
    } else {
      document.querySelector(`.menuTrad${position}`).textContent += e[columnNumber];
    }
  });
};

// No se redeclara la variable debido a que ya se declara en la respectiva pagina donde se ejecuta este codigo
columnNumber = localStorage.getItem('columnNumber');  
menuTranslateFunc(columnNumber);