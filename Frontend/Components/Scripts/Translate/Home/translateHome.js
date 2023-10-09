const translateFunc = (columnNumber) => {
  return fetch('./Frontend/Components/Scripts/Translate/Home/languagesHome.csv')
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


const defaultTranslate = () => {
  if (parseInt(columnNumber) != 0 && parseInt(columnNumber) != 1 && parseInt(columnNumber) != 2 ) {
    localStorage.setItem('columnNumber', 1);
    columnNumber = localStorage.getItem('columnNumber');
    translateFunc(columnNumber);
  } else {
    columnNumber = localStorage.getItem('columnNumber');
    translateFunc(columnNumber);
  }
};
  
document.addEventListener('DOMContentLoaded', defaultTranslate);

document.getElementById('spanishTranslateAction').addEventListener('click', () => {
  if (columnNumber == 1) {
    console.log('Language already set');
  } else {
    localStorage.setItem('columnNumber', 1);
    location.reload();
    translateFunc(columnNumber);
  }
});

document.getElementById('englishTranslateAction').addEventListener('click', () => {
  if (columnNumber == 0) {
    console.log('Language already set');
  } else {
    localStorage.setItem('columnNumber', 0);
    location.reload();
    translateFunc(columnNumber);
  }
});

document.getElementById('portugueseTranslateAction').addEventListener('click', () => {
  if (columnNumber == 2) {
    console.log('Language already set');
  } else {
    localStorage.setItem('columnNumber', 2);
    location.reload();
    translateFunc(columnNumber);
  }
});