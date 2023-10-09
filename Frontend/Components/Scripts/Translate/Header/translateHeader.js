const headTranslateFunc = (columnNumber) => {
  return fetch(raiz+'/Frontend/Components/Scripts/Translate/Header/languageHeader.csv')
  .then((response) => response.text())
  .then((csvData) => {
    const result = Papa.parse(csvData, {
      header: false,
      skipEmptyLines: true,
      encoding: 'UTF-8',
      delimiter: ';'
    });
    head_mostrar_data(result.data, columnNumber);
  })
  .catch((error) => {
    console.error('Error al cargar el archivo CSV:', error);
  });
};
  
  const head_mostrar_data = (array_resultado, columnNumber) => {
    let position = 0;
    array_resultado.forEach((e) => {
      position += 1;
      if (document.querySelector(`.HeadTrad${position}`).tagName.toLowerCase() === "input") {
        document.querySelector(`.HeadTrad${position}`).value += e[columnNumber];
      } else {
        document.querySelector(`.HeadTrad${position}`).innerHTML += e[columnNumber];
    }
  });
};


columnNumber = localStorage.getItem('columnNumber');
console.log(columnNumber)

if(parseInt(columnNumber) != 0 && parseInt(columnNumber) != 1 && parseInt(columnNumber) != 2){
  localStorage.setItem('columnNumber', 1);
  columnNumber = localStorage.getItem('columnNumber');
  console.log(columnNumber)
  headTranslateFunc(columnNumber)
}else{
  headTranslateFunc(columnNumber)
}