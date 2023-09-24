document.addEventListener('DOMContentLoaded', ()=>{

    const bookingTranslateFunc = (columnNumber) => {
        return fetch('/Frontend/Components/Scripts/Translate/Booking/languageBooking.csv')
        .then((response) => response.text())
        .then((csvData) => {
            const result = Papa.parse(csvData, {
                bookinger: false,
                skipEmptyLines: true,
                encoding: 'UTF-8',
                delimiter: ';'
            });
            booking_mostrar_data(result.data, columnNumber);
        })
        .catch((error) => {
            console.error('Error al cargar el archivo CSV:', error);
        });
    };
    
    const booking_mostrar_data = (array_resultado, columnNumber) => {
      let position = 0;
      array_resultado.forEach((e) => {
        position += 1;
        if (document.querySelector(`.bookingTrad${position}`).tagName.toLowerCase() === "input") {
            document.querySelector(`.bookingTrad${position}`).value += e[columnNumber];
        } else {
            document.querySelector(`.bookingTrad${position}`).innerHTML += e[columnNumber];
        }
    });
};

columnNumber = localStorage.getItem('columnNumber');
bookingTranslateFunc(columnNumber).then(() => {
});

});