let url = 'https://api.sheety.co/2cb3b4e06ae64af40d9e60b2e69e5b3b/baseExemploSiteCnh/planilha1';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log(json.planilha1); 
});
