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
    console.log(position)
    if (document.querySelector(`.Trad${position}`).tagName.toLowerCase() === "input") {
      document.querySelector(`.Trad${position}`).value = e[columnNumber];
    } else {
      document.querySelector(`.Trad${position}`).textContent = e[columnNumber];
    }
  });
};

let columnNumber

if(localStorage.getItem('columnNumber') == null){
  localStorage.setItem('columnNumber', 1);
  columnNumber = localStorage.getItem('columnNumber')
}else{
  columnNumber = localStorage.getItem('columnNumber');
}

translateFunc(columnNumber);