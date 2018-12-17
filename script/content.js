
var abstact      = "February 04, 2019";
var submission   = "February 11, 2019";
var notification = "April 01, 2019";
var cameraready  = "April 15, 2019";
var conference   = "June 24 - June 25, 2019";
var place        = "Lausanne, Switzerland";

function update(id, value) {
  var element = document.getElementById(id);
  if (element) {
    element.innerHTML = value
  }
}

function load() {
  update("date-abstract", abstact);
  update("date-submission", submission);
  update("date-notification", notification);
  update("date-cameraready", cameraready);
  update("date-conference", conference);
  update("date-place", conference + ", " + place);

  update("cfp-abstract", abstact);
  update("cfp-submission", submission);
  update("cfp-notification", notification);
  update("cfp-cameraready", cameraready);
  update("cfp-conference", conference);
}

window.onload = load;
