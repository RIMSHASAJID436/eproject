

function sendMessage() {
    var email = document.forms["form"]["email"].value;
    var pass = document.forms["form"]["password"].value;
    var num = document.forms["form"]["num"].value;
    if (email == "" || pass == "" || num == "") {
        alert("Please Fill The Form")
    }
    else {
        alert("Thanks For Your Feedback")
      
    }
}


