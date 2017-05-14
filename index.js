code.onkeypress = function (e) {
  var charCode = e.charCode;

  if (charCode >= 48 && charCode <= 57) {
    return true;
  } else {
    return false;
  }
}
code.oninput = function() {
  var value = this.value;

  if (value.length == 12) {
    saveCode(value);
    clearInput();
  }
}

function saveCode(value) {
  result.innerHTML += "<li>" + value + "</li>";
}

function clearInput() {
  code.value = ''
}
