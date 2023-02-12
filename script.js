const form = document.getElementById("subscribe");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const fullValue = parseFloat(document.getElementById("fullValue").value);
  const valuePaid = parseFloat(document.getElementById("valuePaid").value);


  const clientPerCent = (valuePaid * 100) / fullValue;

  console.log(clientPerCent);

  const companyPerCent = (100 - clientPerCent) / 2;

  console.log(companyPerCent);

  document.getElementById("clientResult").innerHTML= (clientPerCent.toFixed(2) + "%");
  document.getElementById("companyResult1").innerHTML= (companyPerCent.toFixed(2) + "%");
  document.getElementById("companyResult2").innerHTML= (companyPerCent.toFixed(2) + "%");
  // console.log(fullValue);
  // console.log(valuePaid);
  // console.log(clientName)
});
