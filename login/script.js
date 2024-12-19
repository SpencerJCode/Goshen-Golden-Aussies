const uns = ["Koey2024", "Haven2024"];
const pws = ["KoeyXCalgary!", "HavenXLemon!"];
let uninput = "";
let pwinput = "";

window.addEventListener("DOMContentLoaded", (event) => {
  var form = document.getElementById("knockknock");
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);
})


//addEventListener('submit', function(event){event.preventDefault();});


function submitButtonClick() {
    uninput = document.getElementById("username").value;
    pwinput = document.getElementById("password").value;
    let valid = false;
    let i=0;
    for (i=0; i<uns.length; i++){
      if(uns[i] == uninput) {
        if(pws[i] == pwinput){
          valid = true;
          break;
        }
      }
    }
    if(valid){
      if(i==0) {
        window.location.assign("http://www.goshengoldenaussies.com/internal/koey.html");
      }
      else if (i==1) {
        window.location.assign("http://www.goshengoldenaussies.com/internal/haven.html");

      }
    }
    else {
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      alert("Invalid Login");
    }
}