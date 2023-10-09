  const verifyWasSendTranslateFunc = (columnNumber) => {
    return fetch('../../../Frontend/Components/Scripts/Translate/VerifyWasSend/languageVerifyWasSend.csv')
    .then((response) => response.text())
    .then((csvData) => {
      const result = Papa.parse(csvData, {
        header: false,
        skipEmptyLines: true,
        encoding: 'UTF-8',
        delimiter: ';'
      });
      verifyWasSend_mostrar_data(result.data, columnNumber);
    })
    .catch((error) => {
      console.error('Error al cargar el archivo CSV:', error);
    });
  };
  
  const verifyWasSend_mostrar_data = (array_resultado, columnNumber) => {
    let position = 0;
    array_resultado.forEach((e) => {
      position += 1;
      if (document.querySelector(`.VerifyWasSend-Trad${position}`).tagName.toLowerCase() === "input") {
        document.querySelector(`.VerifyWasSend-Trad${position}`).value += e[columnNumber];
      } else {
        document.querySelector(`.VerifyWasSend-Trad${position}`).innerHTML += e[columnNumber];
      }
    });
  };
  
  columnNumber = localStorage.getItem('columnNumber');
  verifyWasSendTranslateFunc(columnNumber).then(() => {
  });