var _a;
// Function to handle the form submission
(_a = document.getElementById("ResumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from reloading the page
    // Get form values
    var fullname = document.getElementById("fullname").value;
    var fathername = document.getElementById("fathername").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("selectgender").value;
    var city = document.getElementById("selectcity").value;
    var maritalStatus = document.getElementById("maritalstatus").value;
    var phone = document.getElementById("phone").value;
    var dateOfBirth = document.getElementById("dateofbirth").value;
    var education = document.getElementById("education").value;
    var institute = document.getElementById("institude").value;
    var passingYear = document.getElementById("passingyear").value;
    var grade = document.getElementById("grade").value;
    var skills = document.getElementById("skills").value;
    var institute2 = document.getElementById("institude2").value;
    var passingYear2 = document.getElementById("passingyear2").value;
    var experience = document.getElementById("experience").value;
    var companyName = document.getElementById("companyname").value;
    // Handling the image upload
    var imageFile = document.getElementById("img").files;
    var imageSrc = imageFile && imageFile.length > 0 ? URL.createObjectURL(imageFile[0]) : "";
    // Create resume HTML
    var resumeHTML = "\n  <div style=\"max-width: 800px; margin: 50px auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); font-family: 'Arial', sans-serif; color: #333;\">\n    <!-- Profile Section -->\n    <div style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 30px;\">\n     \n      <div style=\"max-width: 600px;\">\n        <h2 style=\"font-size: 2em; margin: 0 0 10px; color: #2980b9;\">".concat(fullname, "</h2>\n        <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>Father's Name:</strong> ").concat(fathername, "</p>\n        <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>Email:</strong> ").concat(email, "</p>\n        <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>Gender:</strong> ").concat(gender, "</p>\n        <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>Date of Birth:</strong> ").concat(dateOfBirth, "</p>\n        <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>Phone:</strong> ").concat(phone, "</p>\n        <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>City:</strong> ").concat(city, "</p>\n        <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>Marital Status:</strong> ").concat(maritalStatus, "</p>\n      </div>\n       ").concat(imageSrc ? "<img src=\"".concat(imageSrc, "\" alt=\"Profile Picture\" style=\"width: 160px; height: 160px; border-radius: 50%; margin-left: 30px; border: 3px solid #3498db; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\" />") : '', "\n    </div>\n\n    <hr style=\"border-top: 2px solid #f0f0f0; margin: 30px 0;\">\n\n    <!-- Education Section -->\n    <h3 style=\"color: #2980b9; font-size: 1.5em; margin-bottom: 10px;\">Education</h3>\n    <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>Degree:</strong> ").concat(education, "</p>\n    <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>Institute:</strong> ").concat(institute, "</p>\n    <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>Year of Passing:</strong> ").concat(passingYear, "</p>\n    <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>Grade:</strong> ").concat(grade, "</p>\n\n    <hr style=\"border-top: 2px solid #f0f0f0; margin: 30px 0;\">\n\n    <!-- Skills Section -->\n    <h3 style=\"color: #2980b9; font-size: 1.5em; margin-bottom: 10px;\">Skills</h3>\n    <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>Skills:</strong> ").concat(skills, "</p>\n    <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>Institute:</strong> ").concat(institute2, "</p>\n    <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>Year of Passing:</strong> ").concat(passingYear2, "</p>\n\n    <hr style=\"border-top: 2px solid #f0f0f0; margin: 30px 0;\">\n\n    <!-- Work Experience Section -->\n    <h3 style=\"color: #2980b9; font-size: 1.5em; margin-bottom: 10px;\">Work Experience</h3>\n    <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>Experience:</strong> ").concat(experience, "</p>\n    <p style=\"font-size: 1.1em; margin: 0 0 5px;\"><strong>Company Name:</strong> ").concat(companyName, "</p>\n  </div>\n");
    // Output the resume in the #resumeOutput div
    var resumeOutput = document.getElementById("resumeOutput");
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeHTML;
    }
});
