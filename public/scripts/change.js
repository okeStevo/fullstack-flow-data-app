const changeText = {
  Security: `<h3>enhancing security </h3> <p> Ensuring that data related to water
    resources remains secure and confidential is paramount. We
    employ state-of-the-art security protocols to safeguard
    sensitive information.</p>`,

  Monitoring: `<h3> Effective Monitoring </h3> <p> Our project aims to provide real-time and
    comprehensive data on water resources. This information is
    crucial for decision-makers in managing water-related issues
    efficiently.</p>`,
  Hosting: ` <h3> Hosting Oke Peace Rusle Research </h3> <p> In addition to our primary
    project, we proudly host the "Oke Peace Rusle Research Project."
    This initiative explores the intersections of peace, security,
    and environmental factors, contributing to a more comprehensive
    understanding of these complex issues.</p>`,
};
const objective = document.querySelector(".objectives .list");
const buttons = document.querySelectorAll(".bcon button");

function changeByClick(event) {
    const currentText = changeText[event.currentTarget.innerText];
    console.log(event);
    console.dir(objective);
    objective.children[0].innerHTML = currentText;
}

buttons.forEach((each) => {
  return each.addEventListener("click", changeByClick);
});
