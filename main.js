fetch("https://type.fit/api/quotes")
  .then(response => response.json())
  .then(data => {
    setInterval(function(){
        document.getElementById("espacio").textContent = data[Math.floor(Math.random() * data.length)].text;
    }, 5000)
    
  })