function checkBlanks() {
  if (document.forms["form1"]["fname"].value.trim() == "") {
    alert("Please enter your first name");
    return false;
  }
  if (document.forms["form1"]["lname"].value.trim() == "") {
    alert("Please enter your last name");
    return false;
  }
  if (document.forms["form1"]["rollno"].value.trim() == "") {
    alert("Please enter your roll number");
    return false;
  }
  if (document.forms["form1"]["Address"].value.trim() == "") {
    alert("Please enter your Address");
    return false;
  }
  return true;
}

function valueCheck() {
  const rollnore = new RegExp("^[0-9]{2}[a-zA-Z]{3}[0-9]{4}$", "g");
  let rollnoValue = document.forms["form1"]["rollno"].value.trim();

  if (!rollnore.test(rollnoValue)) {
    alert("Invalid roll number format");
    return false;
  }

  const emailre = new RegExp(
    "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
    "g"
  );
  let email = document.forms["form1"]["email"].value.trim();

  if (!emailre.test(email)) {
    alert("Invalid email format");
    return false;
  }

  let age = document.forms["form1"]["age"].value;
  if (age > 22 || age < 16) {
    alert("Invalid age");
    return false;
  }

  const photoregex = new RegExp("(.jpg|.jpeg|.png)$", "g");
  let photo = document.getElementById("photo").value;
  if (!photoregex.exec(photo)) {
    alert("File extension not supported! (jpg/jpeg/png) supported");
    return false;
  }
}

function validate() {
  checkBlanks();
  valueCheck();
}
