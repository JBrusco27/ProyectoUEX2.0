//Traducir configer
const configTranslateFunc = async (columnNumber) => {
    try {
      const response = await fetch('../Components/Scripts/Translate/Config/languageConfig.csv');
      const csvData = await response.text();
      const result = Papa.parse(csvData, {
        configer: false,
        skipEmptyLines: true,
        encoding: 'UTF-8',
        delimiter: ';'
      });
      
      config_mostrar_data(result.data, columnNumber);
    } catch (error) {
      console.error('Error al cargar el archivo CSV:', error);
    }
  };
  
  const config_mostrar_data = (array_resultado, columnNumber) => {
    let position = 0;
    array_resultado.forEach(e => {
      position += 1;
      console.log(e);
      if (document.querySelector(`.configTrad${position}`).tagName.toLowerCase() === "input") {
        document.querySelector(`.configTrad${position}`).value += e[columnNumber];
      } else {
        document.querySelector(`.configTrad${position}`).innerHTML += e[columnNumber];
      }
    });
  };
  
  //no se redeclara la variable debido a que ya se declara en la respectiva pagina donde se ejecuta este codigo
  columnNumber = localStorage.getItem('columnNumber');  
  configTranslateFunc(columnNumber);
  
  
  //Cambiar icono de seleccion de idioma segun la columna de idioma
  const configDefaultTranslate = async ()=>{
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
      
    }      
    configDefaultTranslate()