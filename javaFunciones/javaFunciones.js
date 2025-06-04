function upDate(previewPic) {
    console.log("upDate Esto está funcionando");
     console.log("Alt de la imagen:", previewPic.alt);
  console.log("Src de la imagen:", previewPic.src);
  //let imageDiv = document.getElementById("image");
  let imageDiv = document.querySelector("#image");
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  imageDiv.textContent = previewPic.alt;
}

function unDo() {
     console.log("unDo Esto está funcionando");
  let imageDiv = document.querySelector("#image");
  imageDiv.style.backgroundImage = "none";
  imageDiv.textContent = "Mostrarla aquí.";
}
