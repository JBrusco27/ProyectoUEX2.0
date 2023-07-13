const translateFunc = async (columnNumber) => {
  try {
    const response = await fetch('../Components/Scripts/Translate/Contact/languageContact.csv');
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

const mostrar_data = (array_resultado, columnNumber) => {
  let position = 0;
  array_resultado.forEach(e => {
    position += 1;
    console.log(e);
    if (document.querySelector(`.Trad${position}`).tagName.toLowerCase() === "input") {
      document.querySelector(`.Trad${position}`).value = e[columnNumber];
    } else {
      document.querySelector(`.Trad${position}`).textContent = e[columnNumber];
    }
  });
};


let columnNumber = localStorage.getItem('columnNumber');

const defaultTranslate = async ()=>{
  if(columnNumber == undefined){
    localStorage.setItem('columnNumber', 1);
    console.log(columnNumber);
    await translateFunc(columnNumber);
  }
  await translateFunc(columnNumber);
}      
document.addEventListener('DOMContentLoaded', defaultTranslate);



document.querySelector('#spanishTranslateAction').addEventListener('click', async () => {
  if (columnNumber == 1){
    console.log('Language already setted');
  }else{
    localStorage.setItem('columnNumber', 1);
    location.reload();
    await translateFunc(columnNumber);
  }
});

document.querySelector('#englishTranslateAction').addEventListener('click', async () => {
  if (columnNumber == 0){
    console.log('Language already setted');
  }else{
    localStorage.setItem('columnNumber', 0);
    location.reload();
    await translateFunc(columnNumber);
  }
});

document.querySelector('#portugueseTranslateAction').addEventListener('click', async () => {
  if (columnNumber == 2){
    console.log('Language already setted');
  }else{
    localStorage.setItem('columnNumber', 2);
    location.reload();
    await translateFunc(columnNumber);
  }
});