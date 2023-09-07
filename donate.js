document.addEventListener("DOMContentLoaded", function () {
  const donationForm = document.querySelector(".donation-page form");

  donationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const customAmountInput = document.getElementById("other-amount");
    const customAmount = customAmountInput.value;

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const mobilePhone = document.getElementById("mobile-phone").value;
    const country = document.getElementById("country").value;
    const address = document.getElementById("address").value;
    const streetAddress = document.getElementById("street-address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const postalCode = document.getElementById("postal-code").value;

    const selectedAmount = document.querySelector("input[name='amount']:checked").value;
    const selectedMonth = document.getElementById("expiration-month").value;
    const selectedYear = document.getElementById("expiration-year").value;

    const emailConsent = document.getElementById("email-consent").checked;
    const smsConsent = document.getElementById("sms-consent").checked;

    const creditCardNumber = document.getElementById("credit-card-number").value;
    const cvv = document.getElementById("cvv").value;

    if (!customAmount || !firstName || !lastName || !email || !country || !state || !selectedMonth || !selectedYear || !creditCardNumber || !cvv || !emailConsent || !smsConsent) {
      alert("Please fill out all required fields.");
      return;
    }

    alert("Form submitted successfully!");
  });
});
