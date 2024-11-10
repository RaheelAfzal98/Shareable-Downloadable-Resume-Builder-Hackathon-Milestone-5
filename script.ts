// Function to handle the form submission
document.getElementById("ResumeForm")?.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Get form values
  const fullname = (document.getElementById("fullname") as HTMLInputElement).value;
  const fathername = (document.getElementById("fathername") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const gender = (document.getElementById("selectgender") as HTMLSelectElement).value;
  const city = (document.getElementById("selectcity") as HTMLInputElement).value;
  const maritalStatus = (document.getElementById("maritalstatus") as HTMLSelectElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const dateOfBirth = (document.getElementById("dateofbirth") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const institute = (document.getElementById("institude") as HTMLTextAreaElement).value;
  const passingYear = (document.getElementById("passingyear") as HTMLTextAreaElement).value;
  const grade = (document.getElementById("grade") as HTMLSelectElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
  const institute2 = (document.getElementById("institude2") as HTMLTextAreaElement).value;
  const passingYear2 = (document.getElementById("passingyear2") as HTMLTextAreaElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const companyName = (document.getElementById("companyname") as HTMLTextAreaElement).value;

  // Handling the image upload
  const imageFile = (document.getElementById("img") as HTMLInputElement).files;
  const imageSrc = imageFile && imageFile.length > 0 ? URL.createObjectURL(imageFile[0]) : "";

  // Create resume HTML
  const resumeHTML = `
  <div style="max-width: 800px; margin: 50px auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); font-family: 'Arial', sans-serif; color: #333;">
    <!-- Profile Section -->
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 30px;">
     
      <div style="max-width: 600px;">
        <h2 style="font-size: 2em; margin: 0 0 10px; color: #2980b9;">${fullname}</h2>
        <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>Father's Name:</strong> ${fathername}</p>
        <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>Email:</strong> ${email}</p>
        <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>Gender:</strong> ${gender}</p>
        <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>Phone:</strong> ${phone}</p>
        <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>City:</strong> ${city}</p>
        <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>Marital Status:</strong> ${maritalStatus}</p>
      </div>
       ${imageSrc ? `<img src="${imageSrc}" alt="Profile Picture" style="width: 160px; height: 160px; border-radius: 50%; margin-left: 30px; border: 3px solid #3498db; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);" />` : ''}
    </div>

    <hr style="border-top: 2px solid #f0f0f0; margin: 30px 0;">

    <!-- Education Section -->
    <h3 style="color: #2980b9; font-size: 1.5em; margin-bottom: 10px;">Education</h3>
    <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>Degree:</strong> ${education}</p>
    <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>Institute:</strong> ${institute}</p>
    <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>Year of Passing:</strong> ${passingYear}</p>
    <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>Grade:</strong> ${grade}</p>

    <hr style="border-top: 2px solid #f0f0f0; margin: 30px 0;">

    <!-- Skills Section -->
    <h3 style="color: #2980b9; font-size: 1.5em; margin-bottom: 10px;">Skills</h3>
    <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>Skills:</strong> ${skills}</p>
    <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>Institute:</strong> ${institute2}</p>
    <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>Year of Passing:</strong> ${passingYear2}</p>

    <hr style="border-top: 2px solid #f0f0f0; margin: 30px 0;">

    <!-- Work Experience Section -->
    <h3 style="color: #2980b9; font-size: 1.5em; margin-bottom: 10px;">Work Experience</h3>
    <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>Experience:</strong> ${experience}</p>
    <p style="font-size: 1.1em; margin: 0 0 5px;"><strong>Company Name:</strong> ${companyName}</p>
  </div>
`;
  // Output the resume in the #resumeOutput div
  const resumeOutput = document.getElementById("resumeOutput");
  if (resumeOutput) {
    resumeOutput.innerHTML = resumeHTML;
  }
});
