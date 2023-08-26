const profileTranslateFunc = (columnNumber) => {
    return fetch('/Frontend/Components/Scripts/Translate/Profile/languageProfile.csv')
    .then((response) => response.text())
    .then((csvData) => {
      const result = Papa.parse(csvData, {
        header: false,
        skipEmptyLines: true,
        encoding: 'UTF-8',
        delimiter: ';'
      });
      profile_mostrar_data(result.data, columnNumber);
    })
    .catch((error) => {
      console.error('Error al cargar el archivo CSV:', error);
    });
  };
  
  const profile_mostrar_data = (array_resultado, columnNumber) => {
    let position = 0;
    array_resultado.forEach((e) => {
      position += 1;
      if (document.querySelector(`.profileTrad${position}`).tagName.toLowerCase() === "input") {
      document.querySelector(`.profileTrad${position}`).value += e[columnNumber];
    } else {
      document.querySelector(`.profileTrad${position}`).innerHTML += e[columnNumber];
    }
  });
  };
  
  columnNumber = localStorage.getItem('columnNumber');
  profileTranslateFunc(columnNumber);
  
  const profileDefaultTranslate = () => {
  let columnNumber = localStorage.getItem('columnNumber');
  switch (parseInt(columnNumber)) {
    case 0:
      document.querySelector('#englishIcon').style.display='inline-block';
      document.querySelector('#spanishIcon').style.display='none';
      document.querySelector('#portugueseIcon').style.display='none';
      break;
      case 1:
      document.querySelector('#spanishIcon').style.display='inline-block';
      document.querySelector('#englishIcon').style.display='none';
      document.querySelector('#portugueseIcon').style.display='none';
      break;
      case 2:
      document.querySelector('#portugueseIcon').style.display='inline-block';
      document.querySelector('#englishIcon').style.display='none';
      document.querySelector('#spanishIcon').style.display='none';
      break;
      default:
        break;
      }
    };
    
  profileDefaultTranslate();
  