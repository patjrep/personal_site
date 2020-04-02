
function toggle_text() {
    var envelope = document.getElementById("envelope");
    var text = document.getElementById("email-pro");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }