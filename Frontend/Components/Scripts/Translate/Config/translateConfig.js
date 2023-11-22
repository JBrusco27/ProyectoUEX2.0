const configTranslateFunc = (columnNumberConf) => {
  return fetch(raiz+'/Frontend/Components/Scripts/Translate/Config/languageConfig.csv')
  .then((response) => response.text())
  .then((csvData) => {
    const result = Papa.parse(csvData, {
      header: false,
      skipEmptyLines: true,
      encoding: 'UTF-8',
      delimiter: ';'
    });
    config_mostrar_data(result.data, columnNumberConf);
  })
  .catch((error) => {
    console.error('Error al cargar el archivo CSV:', error);
  });
};

const config_mostrar_data = (array_resultado, columnNumberConf) => {
  let position = 0;
  array_resultado.forEach((e) => {
    position += 1;
    if (document.querySelector(`.configTrad${position}`).tagName.toLowerCase() === "input") {
    document.querySelector(`.configTrad${position}`).value += e[columnNumberConf];
  } else {
    document.querySelector(`.configTrad${position}`).innerHTML += e[columnNumberConf];
  }
});
};


let columnNumberConf

if(localStorage.getItem('columnNumber') == null){
  localStorage.setItem('columnNumber', 1);
  columnNumberConf = localStorage.getItem('columnNumber')
}else{
  columnNumberConf = localStorage.getItem('columnNumber');
}

configTranslateFunc(columnNumberConf);

const configDefaultTranslate = () => {
let columnNumberConf = localStorage.getItem('columnNumber');
switch (parseInt(columnNumberConf)) {
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
  
configDefaultTranslate();


document.getElementById('spanishTranslateAction').addEventListener('click', () => {
  if (columnNumber == 1) {
    console.log('Language already set');
  } else {
    localStorage.setItem('columnNumber', 1);
    location.reload();
  }
});

document.getElementById('englishTranslateAction').addEventListener('click', () => {
  if (columnNumber == 0) {
    console.log('Language already set');
  } else {
    localStorage.setItem('columnNumber', 0);
    location.reload();
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