function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get card type and card number
    const cardType = document.getElementById("cardType").value;
    const cardNumber = document.querySelector("input[name='card number']").value.trim();

    // Define patterns for different card types
    const patterns = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,        // Visa cards start with 4 and are 13 or 16 digits long
        MasterCard: /^5[1-5][0-9]{14}$/,          // MasterCard cards start with 51-55 and are 16 digits long
        UnionPay: /^62[0-9]{14,17}$/,             // UnionPay cards start with 62 and are 16-19 digits long
    };

    // Check if the card number matches the selected card type's pattern
    if (!patterns[cardType].test(cardNumber)) {
        alert(`Invalid card number for the selected card type: ${cardType}`);
        return false;
    }

    // Validate the expiration date
    const month = document.querySelector("select[name='MONTH']").value;
    const date = parseInt(document.querySelector("select[name='DATE']").value, 10);
    const year = parseInt(document.querySelector("select[name='YEAR']").value, 10);

    // Get today's date
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); 
    const currentDate = today.getDate();

    // Construct the selected expiration date
    const selectedDate = new Date(year, new Date(Date.parse(month + " 1")).getMonth(), date);

    // Check if the selected expiration date is in the future
    if (selectedDate <= today) {
        alert("The card expiration date must be in the future. Please select a valid date.");
        return false;
    }

    alert("Payment successfully submitted!");
    return true; // Submit the form if all validations pass
}
