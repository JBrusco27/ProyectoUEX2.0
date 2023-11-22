const profileTranslateFunc = (columnNumberProf) => {
    return fetch(raiz+'/Frontend/Components/Scripts/Translate/Profile/languageProfile.csv')
    .then((response) => response.text())
    .then((csvData) => {
      const result = Papa.parse(csvData, {
        header: false,
        skipEmptyLines: true,
        encoding: 'UTF-8',
        delimiter: ';'
      });
      profile_mostrar_data(result.data, columnNumberProf);
    })
    .catch((error) => {
      console.error('Error al cargar el archivo CSV:', error);
    });
  };
  
  const profile_mostrar_data = (array_resultado, columnNumberProf) => {
    let position = 0;
    array_resultado.forEach((e) => {
      position += 1;
      if (document.querySelector(`.profileTrad${position}`).tagName.toLowerCase() === "input") {
      document.querySelector(`.profileTrad${position}`).value += e[columnNumberProf];
    } else {
      document.querySelector(`.profileTrad${position}`).innerHTML += e[columnNumberProf];
    }
  });
  };

  let columnNumberProf

  if(localStorage.getItem('columnNumber') == null){
    localStorage.setItem('columnNumber', 1);
    columnNumberProf = localStorage.getItem('columnNumber')
  }else{
    columnNumberProf = localStorage.getItem('columnNumber');
  }

  profileTranslateFunc(columnNumberProf);