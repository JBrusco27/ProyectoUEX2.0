const ticketsTranslateFunc = (columnNumbertickets) => {
    return fetch(raiz+'/Frontend/Components/Scripts/Translate/MyTickets/languageMyTickets.csv')
    .then((response) => response.text())
    .then((csvData) => {
      const result = Papa.parse(csvData, {
        header: false,
        skipEmptyLines: true,
        encoding: 'UTF-8',
        delimiter: ';'
      });
      tickets_mostrar_data(result.data, columnNumbertickets);
    })
    .catch((error) => {
      console.error('Error al cargar el archivo CSV:', error);
    });
  };
    
  const tickets_mostrar_data = (array_resultado, columnNumbertickets) => {
  let position = 0;
  array_resultado.forEach((e) => {
    position += 1;
    if (document.querySelector(`.ticketTrad${position}`).tagName.toLowerCase() === "input") {
      document.querySelector(`.ticketTrad${position}`).value += e[columnNumbertickets];
    } else {
      document.querySelector(`.ticketTrad${position}`).textContent += e[columnNumbertickets];
    }
  });
  };
  
  
  let columnNumbertickets
  
  if(localStorage.getItem('columnNumber') == null){
    localStorage.setItem('columnNumber', 1);
    columnNumbertickets = localStorage.getItem('columnNumber')
  }else{
    columnNumbertickets = localStorage.getItem('columnNumber');
  }
  
  
  ticketsTranslateFunc(columnNumbertickets);