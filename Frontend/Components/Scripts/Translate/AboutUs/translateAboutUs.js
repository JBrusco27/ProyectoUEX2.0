const translateFunc = (columnNumber) => {
  return fetch('../Components/Scripts/Translate/AboutUs/languageAboutUs.csv')
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
      document.querySelector(`.Trad${position}`).textContent = e[columnNumber];
    }
  });
};

columnNumber = localStorage.getItem('columnNumber');

const defaultTranslate = () => {
  let columnNumber = localStorage.getItem('columnNumber');
  if (columnNumber == undefined) {
    localStorage.setItem('columnNumber', 1);
    translateFunc(columnNumber);
  } else {
    translateFunc(columnNumber);
  }
};
document.addEventListener('DOMContentLoaded', defaultTranslate);

document.getElementById('spanishTranslateAction').addEventListener('click', () => {
  let columnNumber = localStorage.getItem('columnNumber');
  if (columnNumber == 1) {
    console.log('Language already set');
  } else {
    localStorage.setItem('columnNumber', 1);
    location.reload();
    translateFunc(columnNumber);
  }
});

document.getElementById('englishTranslateAction').addEventListener('click', () => {
  let columnNumber = localStorage.getItem('columnNumber');
  if (columnNumber == 0) {
    console.log('Language already set');
  } else {
    localStorage.setItem('columnNumber', 0);
    location.reload();
    translateFunc(columnNumber);
  }
});

document.getElementById('portugueseTranslateAction').addEventListener('click', () => {
  let columnNumber = localStorage.getItem('columnNumber');
  if (columnNumber == 2) {
    console.log('Language already set');
  } else {
    localStorage.setItem('columnNumber', 2);
    location.reload();
    translateFunc(columnNumber);
  }
});