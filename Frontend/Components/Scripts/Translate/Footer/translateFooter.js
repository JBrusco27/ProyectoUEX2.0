const footerTranslateFunc = (columnNumber) => {
  return fetch('/Frontend/Components/Scripts/Translate/Footer/languageFooter.csv')
  .then((response) => response.text())
  .then((csvData) => {
    const result = Papa.parse(csvData, {
      header: false,
      skipEmptyLines: true,
      encoding: 'UTF-8',
      delimiter: ';'
    });
    footer_mostrar_data(result.data, columnNumber);
  })
  .catch((error) => {
    console.error('Error al cargar el archivo CSV:', error);
  });
};

const footer_mostrar_data = (array_resultado, columnNumber) => {
  let position = 0;
  array_resultado.forEach((e) => {
    position += 1;
    if (document.querySelector(`.footerTrad${position}`).tagName.toLowerCase() === "input") {
      document.querySelector(`.footerTrad${position}`).value += e[columnNumber];
    } else {
      document.querySelector(`.footerTrad${position}`).innerHTML += e[columnNumber];
    }
  });
};

columnNumber = localStorage.getItem('columnNumber');
footerTranslateFunc(columnNumber).then(() => {
});