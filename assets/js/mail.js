$(document).ready(function () {

  //recupère la valeur des input
  let email = document.getElementById("email");
  let objet = document.getElementById("objet");
  let message = document.getElementById("message");
  let bouton = document.getElementById("submit")





  let req = new XMLHttpRequest();
  //let url = "http://127.0.0.1:3002/mail";
  let url = "https://nodesends.herokuapp.com/mail";
  let method, data, dataSend;



  // login action
  bouton.addEventListener('click', evt => {
    evt.preventDefault();
    method = "POST";
    data = {
      email: email.value,
      objet: objet.value,
      message: message.value

    }

    dataSend = JSON.stringify(data);
    req.open(method, url);
    req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    req.responseType = "json";
    req.send(dataSend);







    req.onreadystatechange = function () {

      if (this.readyState == 4 && this.status == 200) {
        let reponses = req.response;
        console.log(reponses)

        if (reponses.success != false) {

          //rediction vers le formulaire forecast
          //  window.location.replace("./form.html")
          $("#alert-success").show();


        } else {

          //affiche la model avec le message erreur
          $("#alert-danger").show();



        }




      }
    };






  })
})