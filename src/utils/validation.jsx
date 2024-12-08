export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePassword = (password) => {
    // Minimum eight characters, at least one letter, one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };
  
  export const validateCardNumber = (cardNumber) => {
    const cardRegex = /^\d{16}$/;
    return cardRegex.test(cardNumber);
  };
  
  export const validateCVV = (cvv) => {
    const cvvRegex = /^\d{3}$/;
    return cvvRegex.test(cvv);
  };
  