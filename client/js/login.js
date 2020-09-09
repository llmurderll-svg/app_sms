/*Login*/
var form = document.getElementById("login_form");
function onSubmit(event) {
    if (event) {
        event.preventDefault();
    }
    //console.log("hola");
}
form.addEventListener('submit', onSubmit, false);
form.submit = onSubmit;