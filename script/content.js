
var abstact      = "abstractdate";
var submission   = "submissiondate";
var notification = "notificationdate";
var cameraready  = "finalversiondate";
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
