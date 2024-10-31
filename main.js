function validateForm() {
    const input = document.getElementById("input").value;
    const sinput = document.getElementById("sinput").value;

    let isValid = true;

    if (input.trim() === "") {
        document.getElementById("pop").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("pop").style.display = "none";
    }

    if (isNaN(sinput) || sinput.trim() === "") {
        document.getElementById("po").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("po").style.display = "none";
    }

    if (isValid) {
        window.location.href = "https://areyourealhuman.com/cl/i/voxmrg"; // Redirect to your URL
    }

    return false; // Prevent form from submitting traditionally
}
