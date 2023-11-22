 
const bannerTranslateFunc = (columnNumberBan) => {
    return fetch(raiz+'/Frontend/Components/Scripts/Translate/Banner/languageBanner.csv')
    .then((response) => response.text())
    .then((csvData) => {
      const result = Papa.parse(csvData, {
        header: false,
        skipEmptyLines: true,
        encoding: 'UTF-8',
        delimiter: ';'
      });
      banner_mostrar_data(result.data, columnNumberBan);
    })
    .catch((error) => {
      console.error('Error al cargar el archivo CSV:', error);
    });
  };
  
  const banner_mostrar_data = (array_resultado, columnNumberBan) => {
    let position = 0;
    array_resultado.forEach((e) => {
      position += 1;
      if (document.querySelector(`.bannerTrad${position}`).tagName.toLowerCase() === "input") {
        document.querySelector(`.bannerTrad${position}`).value += e[columnNumberBan];
      } else {
        document.querySelector(`.bannerTrad${position}`).innerHTML += e[columnNumberBan];
      }
    });
  };

    let columnNumberBan

    if(localStorage.getItem('columnNumber') == null){
      localStorage.setItem('columnNumber', 1);
      columnNumberBan = localStorage.getItem('columnNumber')
    }else{
      columnNumberBan = localStorage.getItem('columnNumber');
    }

  bannerTranslateFunc(columnNumberBan)