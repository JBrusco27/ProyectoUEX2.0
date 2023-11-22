const footerTranslateFunc = (columnNumberFoot) => {
  return fetch(raiz+'/Frontend/Components/Scripts/Translate/Footer/languageFooter.csv')
  .then((response) => response.text())
  .then((csvData) => {
    const result = Papa.parse(csvData, {
      header: false,
      skipEmptyLines: true,
      encoding: 'UTF-8',
      delimiter: ';'
    });
    footer_mostrar_data(result.data, columnNumberFoot);
  })
  .catch((error) => {
    console.error('Error al cargar el archivo CSV:', error);
  });
};

const footer_mostrar_data = (array_resultado, columnNumberFoot) => {
  let position = 0;
  array_resultado.forEach((e) => {
    position += 1;
    if (document.querySelector(`.footerTrad${position}`).tagName.toLowerCase() === "input") {
      document.querySelector(`.footerTrad${position}`).value += e[columnNumberFoot];
    } else {
      document.querySelector(`.footerTrad${position}`).innerHTML += e[columnNumberFoot];
    }
  });
};


let columnNumberFoot

if(localStorage.getItem('columnNumber') == null){
  localStorage.setItem('columnNumber', 1);
  columnNumberFoot = localStorage.getItem('columnNumber')
}else{
  columnNumberFoot = localStorage.getItem('columnNumber');
}

footerTranslateFunc(columnNumberFoot)