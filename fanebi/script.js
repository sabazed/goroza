const handleUpdate = (event) => {
    document.getElementById("range-val").innerText = document.getElementById("range").value;
}

const confirmPassword = (event) => {
    let pswd = document.getElementById("password");
    let conf = document.getElementById("confirm-password");
    if (pswd.value !== conf.value) {
        conf.setCustomValidity('Entered passwords should match');
        conf.reportValidity();
        event.preventDefault();
    }
    else {
        conf.setCustomValidity('');
        conf.reportValidity();
    }
}

document.getElementById("range").addEventListener('change', handleUpdate);
document.getElementById("survey-form").addEventListener('submit', confirmPassword);