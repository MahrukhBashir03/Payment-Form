function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission
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

    alert("Payment successfully submitted!");
    return true; // Submit the form if validation passes
}
