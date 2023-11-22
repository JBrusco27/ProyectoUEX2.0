document.addEventListener('DOMContentLoaded', ()=>{

    const bookingTranslateFunc = (columnNumberBook) => {
        return fetch('./Frontend/Components/Scripts/Translate/Booking/languageBooking.csv')
        .then((response) => response.text())
        .then((csvData) => {
            const result = Papa.parse(csvData, {
                bookinger: false,
                skipEmptyLines: true,
                encoding: 'UTF-8',
                delimiter: ';'
            });
            booking_mostrar_data(result.data, columnNumberBook);
        })
        .catch((error) => {
            console.error('Error al cargar el archivo CSV:', error);
        });
    };
    
    const booking_mostrar_data = (array_resultado, columnNumberBook) => {
      let position = 0;
      array_resultado.forEach((e) => {
        position += 1;
        if (document.querySelector(`.bookingTrad${position}`).tagName.toLowerCase() === "input") {
            document.querySelector(`.bookingTrad${position}`).value += e[columnNumberBook];
        } else {
            document.querySelector(`.bookingTrad${position}`).innerHTML += e[columnNumberBook];
        }
    });
};


let columnNumberBook

if(localStorage.getItem('columnNumber') == null){
  localStorage.setItem('columnNumber', 1);
  columnNumberBook = localStorage.getItem('columnNumber')
}else{
  columnNumberBook = localStorage.getItem('columnNumber');
}

bookingTranslateFunc(columnNumberBook)

});