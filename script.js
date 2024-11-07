// Display a welcome message
function welcomeMessage() {
    console.log("Welcome to My Web Journey!");
}

// Form validation function
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if (name === "" || email === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    return true;
}
