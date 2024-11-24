function calculateMortgage() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);
    const errorElement = document.getElementById('error');
    const resultsElement = document.getElementById('results');
  
    // Clear previous results and errors
    errorElement.textContent = '';
    resultsElement.innerHTML = '';
  
    // Input validation
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
      errorElement.textContent = 'Please enter valid positive numbers for all fields.';
      return;
    }
  
    // Calculations
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
    const totalPayment = monthlyPayment * totalPayments;
    const totalInterest = totalPayment - loanAmount;
  
    // Display results
    resultsElement.innerHTML = `
      <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
      <p>Total Payment: $${totalPayment.toFixed(2)}</p>
      <p>Total Interest: $${totalInterest.toFixed(2)}</p>
    `;
  }
  