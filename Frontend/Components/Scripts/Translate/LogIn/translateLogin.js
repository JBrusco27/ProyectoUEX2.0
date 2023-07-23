const translateFunc = (columnNumber) => {
  return fetch('../../Components/Scripts/Translate/LogIn/languageLogin.csv')
    .then((response) => response.text())
    .then((csvData) => {
      const result = Papa.parse(csvData, {
        header: false,
        skipEmptyLines: true,
        encoding: 'UTF-8',
        delimiter: ';'
      });
      mostrar_data(result.data, columnNumber);
    })
    .catch((error) => {
      console.error('Error al cargar el archivo CSV:', error);
    });
};

const mostrar_data = (array_resultado, columnNumber) => {
  let position = 0;
  array_resultado.forEach((e) => {
    position += 1;
    if (document.querySelector(`.Trad${position}`).tagName.toLowerCase() === "input") {
      document.querySelector(`.Trad${position}`).value = e[columnNumber];
    } else {
      document.querySelector(`.Trad${position}`).innerHTML += e[columnNumber];
    }
  });
};

let columnNumber = localStorage.getItem('columnNumber');

const defaultTranslate = () => {
  if (columnNumber == undefined) {
    localStorage.setItem('columnNumber', 1);
    translateFunc(columnNumber).then(() => {
      // Do something after the translation is done (if needed)
    });
  } else {
    translateFunc(columnNumber).then(() => {
      // Do something after the translation is done (if needed)
    });
  }
};
document.addEventListener('DOMContentLoaded', defaultTranslate);