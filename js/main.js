const acknowledgement = document.getElementById("acknowledgement");

const openAcknowledgement = () => {
  acknowledgement.classList.remove("invisible");
  acknowledgement.classList.add("visible");
}

const closeAcknowledgement = () => {
  acknowledgement.classList.remove("visible");
  acknowledgement.classList.add("invisible");
}