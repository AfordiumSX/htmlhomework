const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");
const three = document.getElementById("three");


myButton.addEventListener("click", function() {
  myText.textContent = "UwU!";
});

three.addEventListener("dblclick", function() {
    myText.textContent = "owo";
  });

const myButton2 = document.getElementById("myButton2");
myButton2.addEventListener("mouseover", function() {
  alert("Вы навелись на кнопку");
});

const myInput = document.getElementById("myInput");
const myButton3 = document.getElementById("myButton3");

myButton3.addEventListener("click", function() {
  myInput.value = "Новый текст";
});

const myImage = document.getElementById("myImage");
const myButton5 = document.getElementById("myButton5");

myButton5.addEventListener("click", function() {
  myImage.src = "bruh.png";
});

const myText2 = document.getElementById("myText2");

myText2.addEventListener("click", function() {
  alert("Вы нажали на текст");
});

const myText3 = document.getElementById("myText3");

myText3.addEventListener("click", function() {
    myText3.innerHTML = "Новый текст";
  });

  const myIn3 = document.getElementById("myIn3");

  myIn3.addEventListener("click", function() {
    myIn3.value = "Ой, я поменял текст!";
  });

  myIn3.addEventListener("dblclick", function() {
    myIn3.value = "Ой, я поменял текст еще раз!";
  });

  myButton1337.addEventListener("click", function() {
    myButton1337.textContent = "Новый текст";
  });

  const myButton13371 = document.getElementById("myButton13371");

  myButton13371.addEventListener("click", function() {
    myButton13371.disabled = true;
});

myButton133712.addEventListener("click", function() {
  myInput1337.style.color = "red";
});

buttonfinal1.addEventListener("click", function() {
  myInput1337.style.display = "none";
});

buttonfinal2.addEventListener("click", function() {
  myInput1337.style.display = "block";
});