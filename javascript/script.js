document.addEventListener('DOMContentLoaded', function () {

  // Převod Fahrenheit na Celsius
  document.querySelector('#inputFahrenheit').oninput = function () {
      let fahrenheit = parseFloat(this.value);
      if (!isNaN(fahrenheit)) {
          let celsius = (fahrenheit - 32) / 1.8;
          document.querySelector('#outputCelcius').textContent = celsius.toFixed(2);
      } else {
          document.querySelector('#outputCelcius').textContent = ''; // Vymazání výstupu při prázdném vstupu
      }
  };

  // Převod Celsius na Fahrenheit
  document.querySelector('#inputCelsius').oninput = function () {
      let celsius = parseFloat(this.value);
      if (!isNaN(celsius)) {
          let fahrenheit = (celsius * 1.8) + 32;
          document.querySelector('#outputFahrenheit').textContent = fahrenheit.toFixed(2);
      } else {
          document.querySelector('#outputFahrenheit').textContent = ''; // Vymazání výstupu při prázdném vstupu
      }
  };

});



  /*

  parseFloat = převádí řetezec (string) na desetinné číslo (podobně jako float a string v pythonu)
  "n" & "x" = hodnoty, kterou zadává uživatel
  
  k vytvoření kódu jsem nepoužil žádnou ai (pouze k vysvětlení funkce "parseFloat")

  */
