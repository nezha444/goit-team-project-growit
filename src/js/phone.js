// Инициализируем поле ввода телефона
var input = document.querySelector("#phone");
var iti = window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function(callback) {
    fetch("https://ipinfo.io/json?token=<your_token>")
      .then(function(response) {
        return response.json();
      })
      .then(function(ipdata) {
        callback(ipdata.country);
      });
  },
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.min.js",
});

// Обрабатываем изменения в поле ввода телефона
input.addEventListener("input", function() {
  var isValid = iti.isValidNumber();
  if (isValid) {
    var countryCode = iti.getSelectedCountryData().iso2;
    document.querySelector("#country-code").value = countryCode;
  }
});
