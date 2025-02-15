document.addEventListener("DOMContentLoaded", function () {
    // Adding event listener to the 'userRole' dropdown
    document.getElementById("userRole").addEventListener("change", function () {
        var role = this.value;

        // Clear previous error message if any
        document.getElementById("errorMessage").style.display = "none";
    });

    // Adding click event to the login button to open a new page or redirect based on selected role
    document.getElementById("loginButton").addEventListener("click", function () {
        var role = document.getElementById("userRole").value;

        // Redirect based on selected role
        if (role === "admin") {
            window.location.href = "adminDashboard.html";  // Redirect to admin page
        } else if (role === "believer") {
            window.location.href = "believerDashboard.html";  // Redirect to believer page
        } else if (role === "pastor") {
            window.location.href = "pastorDashboard.html";  // Redirect to pastor page
        } else if (role === "youth_leader") {
            window.location.href = "youthLeaderDashboard.html";  // Redirect to youth leader page
        } else {
            document.getElementById("errorMessage").style.display = "block";  // Show error message if no role is selected
        }
    });
});
