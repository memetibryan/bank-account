//business logic
function Transact(name, initialdeposit, withdraw, deposit, balance) {
  this.clientname = name;
  this.initialdeposit = initialdeposit;
  this.withdraw = withdraw;
  this.deposit = deposit;
}

// user interface logic
$(document).ready(function() {
      $("form#register-account").submit(function(event) {
        event.preventDefault();

          var inputtedclientname = document.getElementById('user-name').value;
          var inputtedinitialdeposit = document.getElementById('initial-deposit').value;
          var inputteddeposit = document.getElementById('deposit-amount').value;
          var inputtedwithdraw = document.getElementById('withdraw-amount').value;

          var deposit = parseInt(inputtedinitialdeposit);
          var newDeposit =parseInt(inputtedinitialdeposit) + parseInt(inputteddeposit);
          var accountBalance =parseInt(inputtedinitialdeposit) + parseInt(inputteddeposit) - parseInt(inputtedwithdraw);

          $("ul#output").append("<li><span class='output'>" + "Balance is:" + "-" + accountBalance + "</span></li>");

          $(".output").last().click(function() {
            $("input#user-name").val("");
            $("input#initial-deposit").val("");
            $("input#deposit-amount").val("");
            $("input#withdraw-amount").val("");
          });
      });
    });
