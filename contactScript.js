// Initialize EmailJS
(function() {
    emailjs.init("bf0V5EPweIuvl9UJG");
  })();
  
  // Event listener for the form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const captcha = document.getElementById('captcha').value;
  
    // Captcha validation
    if (captcha !== '5') {
      alert('Incorrect captcha answer! Please try again.');
      return;
    }
  
    // Send the email using EmailJS
    emailjs.sendForm('service_37wk53s', 'template_28lb84i', this)
      .then(function() {
        alert('Message sent successfully!');
      }, function(error) {
        alert('Failed to send the message. Please try again.');
      });
  });
  