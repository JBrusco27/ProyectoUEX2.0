// Conseguir datos del archivo csv
const translateFunc = async (columnNumber) => {
    try {
      const response = await fetch('../../Components/Scripts/Translate/LogIn/languageLogin.csv');
      const csvData = await response.text();
      const result = Papa.parse(csvData, {
        header: false,
        skipEmptyLines: true,
        encoding: 'UTF-8',
        delimiter: ';'
      });
      
      mostrar_data(result.data, columnNumber);
    } catch (error) {
      console.error('Error al cargar el archivo CSV:', error);
    }
  };
  
  // Traducir pagina
  const mostrar_data = (array_resultado, columnNumber) => {
    let position = 0;
    array_resultado.forEach(e => {
      position += 1;
      if (document.querySelector(`.Trad${position}`).tagName.toLowerCase() === "input") {
        document.querySelector(`.Trad${position}`).value = e[columnNumber];
      } else {
        document.querySelector(`.Trad${position}`).innerHTML += e[columnNumber];
      }
    });
  };
  
  let columnNumber = localStorage.getItem('columnNumber');

  // Traduccion predeterminada ( Español )
  const defaultTranslate = async ()=>{
    if(columnNumber == undefined){
      localStorage.setItem('columnNumber', 1);
      await translateFunc(columnNumber);
    }
    await translateFunc(columnNumber);
  }      
  document.addEventListener('DOMContentLoaded', defaultTranslate);