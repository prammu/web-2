function validateForm() {
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const aadhar = document.getElementById("aadhar").value;
  const address = document.getElementById("address").value;

  // Basic validation
  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  if (dob === "") {
    alert("Please enter your Date of Birth address.");
    return false;
  }

  if (gender === "") {
    alert("Please select your gender.");
    return false;
  }
  
  if (email === "") {
    alert("Please enter your email address.");
    return false;
  }
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;

  }
  

  if (phone === "") {
    alert("Please enter your phone number.");
    return false;
  }

  if (aadhar === "") {
    alert("please enter your aadhara Number");
    return false;
  }

  if (address === "") {
    alert("Please enter your Address .");
    return false;
  }


  // Additional validation (e.g., date range, room availability) can be added here

  return true;
}

function isValidEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
