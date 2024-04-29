function changeBackgroundColor(color) {
  document.querySelection(".box").style.backgroundColor = color;
}

function colorInput() {
  return document.querySelector("#color").value;
}

window.onload = function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    if (colorInput(color)) {
      changeBackgroundColor(colorInput());
    } else {
      alert("Please enter a color.");
    }
  });
};
