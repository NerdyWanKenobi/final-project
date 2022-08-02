function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  document.getElementsByTagName('button')[0].addEventListener('click', e => {
    e.target.classList.toggle('on');
  });
}

function rickRoll() {
  alert("You have been Rickroll'd")
}

(function () {
  document.getElementsByTagName('button')[0].addEventListener('click', e => {
    e.target.classList.toggle('on');
  });
})();

function computerVirus() {
  alert("HeLlO yOuR cOmPuTeR hAs ViRuS")
}