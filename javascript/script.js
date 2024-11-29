function temperatureConverter(n) {
    n = parseFloat(n);
    document.getElementById("outputCelcius").innerHTML=(n-32)/1.8;
  }


  function temperatureConverter2(x) {
    x = parseFloat(x);
    document.getElementById("outputFahrenheit").innerHTML=(x*1.8)+32;
  }



  /*

  parseFloat = převádí řetezec (string) na desetinné číslo (podobně jako float a string v pythonu)
  "n" = hodnota, kterou zadává uživatel
  
  k vytvoření kódu jsem nepoužil žádnou ai (pouze k vysvětlení funkce "parseFloat")

  */
