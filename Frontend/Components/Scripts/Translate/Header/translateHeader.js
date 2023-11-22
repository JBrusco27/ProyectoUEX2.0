const headTranslateFunc = (columnNumberHead) => {
  return fetch(raiz+'/Frontend/Components/Scripts/Translate/Header/languageHeader.csv')
  .then((response) => response.text())
  .then((csvData) => {
    const result = Papa.parse(csvData, {
      header: false,
      skipEmptyLines: true,
      encoding: 'UTF-8',
      delimiter: ';'
    });
    head_mostrar_data(result.data, columnNumberHead);
  })
  .catch((error) => {
    console.error('Error al cargar el archivo CSV:', error);
  });
};
  
  const head_mostrar_data = (array_resultado, columnNumberHead) => {
    let position = 0;
    array_resultado.forEach((e) => {
      position += 1;
      if (document.querySelector(`.HeadTrad${position}`).tagName.toLowerCase() === "input") {
        document.querySelector(`.HeadTrad${position}`).value += e[columnNumberHead];
      } else {
        document.querySelector(`.HeadTrad${position}`).innerHTML += e[columnNumberHead];
    }
  });
};

let columnNumberHead

if(localStorage.getItem('columnNumber') == null){
  localStorage.setItem('columnNumber', 1);
  columnNumberHead = localStorage.getItem('columnNumber')
}else{
  columnNumberHead = localStorage.getItem('columnNumber');
}

headTranslateFunc(columnNumberHead)
