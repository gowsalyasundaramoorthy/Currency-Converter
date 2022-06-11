const convertCurrency = async() => {
    const config = { headers: { Accept: 'application/json' } }

    var fromCurrency = document.getElementById("fromcurr").value;
    console.log(fromCurrency);
    var from = document.getElementById("from").value;

    var toCurrency = document.getElementById("tocurr").value;
    console.log(toCurrency);

    var url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/' + fromCurrency + '/' + toCurrency + '.json';
    console.log(url);
    const res = await axios.get(url, config)
    var output = res.data[toCurrency];

    document.getElementById("to").value = output * from;

}





























// const currconvert = document.querySelector('#currconvert');


// function convertCurrency() {
// const currconvert = document.querySelector('#currconvert');
// const res = fetch("https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=AUD&to=CAD&amount=1", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "currency-converter5.p.rapidapi.com",
// 		"x-rapidapi-key": "6e0b123d27mshc0c782a2851b3ffp141e19jsn067b858fe9a6"
// 	}
// })
// .then(res => {
// 	console.log(res);
// })
// .catch(err => {
// 	console.error(err);
// });





// function convertCurrency(){
//     var from = document.getElementById("from").value;
//     var to = document.getElementById("to").value;
//     var xmlhttp = new XMLHttpRequest();
//     var url = "https://api.fixer.io/latest?symbols=" + from + "," + to;
//     xmlhttp.open("GET", url, true);
//     xmlhttp.send();
//     xmlhttp.onreadystatechange = function(){
//         if(xmlhttp.readyState == 4 && xmlhttp.readyState == 200){
//             var result = xmlhttp.responseText;
//             alert(result);
//             var jsResult = JSON.parse(result);
//         }
//     }



// }