const bannerTranslateFunc = (columnNumber) => {
    return fetch('/Frontend/Components/Scripts/Translate/Banner/languageBanner.csv')
    .then((response) => response.text())
    .then((csvData) => {
      const result = Papa.parse(csvData, {
        header: false,
        skipEmptyLines: true,
        encoding: 'UTF-8',
        delimiter: ';'
      });
      banner_mostrar_data(result.data, columnNumber);
    })
    .catch((error) => {
      console.error('Error al cargar el archivo CSV:', error);
    });
  };
  
  const banner_mostrar_data = (array_resultado, columnNumber) => {
    let position = 0;
    array_resultado.forEach((e) => {
      position += 1;
      if (document.querySelector(`.bannerTrad${position}`).tagName.toLowerCase() === "input") {
        document.querySelector(`.bannerTrad${position}`).value += e[columnNumber];
      } else {
        document.querySelector(`.bannerTrad${position}`).innerHTML += e[columnNumber];
      }
    });
  };
  
  columnNumber = localStorage.getItem('columnNumber');
  bannerTranslateFunc(columnNumber).then(() => {
  });