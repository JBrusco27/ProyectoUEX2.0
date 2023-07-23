const translateFunc = (columnNumber) => {
  return fetch('../Components/Scripts/Translate/Home/languagesHome.csv')
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

document.getElementById('spanishTranslateAction').addEventListener('click', () => {
  if (columnNumber == 1) {
    console.log('Language already set');
  } else {
    localStorage.setItem('columnNumber', 1);
    location.reload();
    translateFunc(columnNumber).then(() => {
      // Do something after the translation is done (if needed)
    });
  }
});

document.getElementById('englishTranslateAction').addEventListener('click', () => {
  if (columnNumber == 0) {
    console.log('Language already set');
  } else {
    localStorage.setItem('columnNumber', 0);
    location.reload();
    translateFunc(columnNumber).then(() => {
      // Do something after the translation is done (if needed)
    });
  }
});

document.getElementById('portugueseTranslateAction').addEventListener('click', () => {
  if (columnNumber == 2) {
    console.log('Language already set');
  } else {
    localStorage.setItem('columnNumber', 2);
    location.reload();
    translateFunc(columnNumber).then(() => {
      // Do something after the translation is done (if needed)
    });
  }
});