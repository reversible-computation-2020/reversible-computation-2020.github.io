
var abstact      = "January 31, 2020";
var submission   = "February 7, 2020";
var notification = "March 20, 2020";
var cameraready  = "April 10, 2020";
var conference   = "July 9 - July 10, 2020";
var place        = "Oslo, Norway";

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
