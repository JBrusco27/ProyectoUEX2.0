  const verifyWasSendTranslateFunc = (columnNumberWas) => {
    return fetch(raiz+'Frontend/Components/Scripts/Translate/VerifyWasSend/languageVerifyWasSend.csv')
    .then((response) => response.text())
    .then((csvData) => {
      const result = Papa.parse(csvData, {
        header: false,
        skipEmptyLines: true,
        encoding: 'UTF-8',
        delimiter: ';'
      });
      verifyWasSend_mostrar_data(result.data, columnNumberWas);
    })
    .catch((error) => {
      console.error('Error al cargar el archivo CSV:', error);
    });
  };
  
  const verifyWasSend_mostrar_data = (array_resultado, columnNumberWas) => {
    let position = 0;
    array_resultado.forEach((e) => {
      position += 1;
      if (document.querySelector(`.VerifyWasSend-Trad${position}`).tagName.toLowerCase() === "input") {
        document.querySelector(`.VerifyWasSend-Trad${position}`).value += e[columnNumberWas];
      } else {
        document.querySelector(`.VerifyWasSend-Trad${position}`).innerHTML += e[columnNumberWas];
      }
    });
  };

  let columnNumberWas

  if(localStorage.getItem('columnNumber') == null){
    localStorage.setItem('columnNumber', 1);
    columnNumberWas = localStorage.getItem('columnNumber')
  }else{
    columnNumberWas = localStorage.getItem('columnNumber');
  }
  
  verifyWasSendTranslateFunc(columnNumberWas)