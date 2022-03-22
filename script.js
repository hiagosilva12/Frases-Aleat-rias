fetch(`https://api.adviceslip.com/advice`)
  .then((reposta) => {
    return reposta.json();
  })
  .then((corpo) => {
    document.getElementById("span").innerHTML = corpo.slip.advice;
  });
