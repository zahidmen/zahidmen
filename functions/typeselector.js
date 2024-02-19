const actualizar = () =>{
  const codigo_html = document.querySelector('#editor_html');
  const codigo_css = document.querySelector('#editor_css');
  const textView = document.querySelector('#vista');
  
  textView.srcdoc = codigo_css.value +"<style>" + codigo_html.value + "</style>";

}

/*var section = document.querySelector("section");
var editable = document.querySelector(".editable");
var textareaHTML = document.querySelector(".vista-html");
var textareaCSS = document.querySelector(".vista-css");
var reset = document.getElementById("reset");
var htmlCode = textareaHTML.value;
var cssCode = textareaCSS.value;

let editorHeading = document.createElement("h2");
editorHeading.innerHTML = "interactive";
document.querySelector("body").insertBefore(editorHeading, textareaCSS);

function fillCode() {
  editable.innerHTML = textareaCSS.value;
  section.innerHTML = textareaHTML.value;
}

reset.addEventListener("click", function () {
  textareaHTML.value = htmlCode;
  textareaCSS.value = cssCode;
  fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);*/
