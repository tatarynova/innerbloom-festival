// Modal windows for lineup page open/close buttons
document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("#modal-window-button").forEach(button => {
        button.addEventListener("click", () => {
            const target = button.dataset.target;
            const modal = document.querySelector(target);
            modal.classList.add("show");
        });
    });

    document.querySelectorAll("#close-modal-button").forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".artist-modal-container").classList.remove("show");
        });
    });

    document.querySelectorAll(".artist-modal-container").forEach(container => {
        container.addEventListener("click", (e) => {
            if (e.target === container) {
                container.classList.remove("show");
            }
        });
    });
});

// Modal windows for schedule page
document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("#open-stage-info").forEach(button => {
        button.addEventListener("click", () => {
            const target = button.dataset.target;
            const modal = document.querySelector(target);
            modal.classList.add("show");
        });
    });

    document.querySelectorAll("#close-stage-info").forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".stage-modal-container").classList.remove("show");
        });
    });

    document.querySelectorAll(".stage-modal-container").forEach(container => {
        container.addEventListener("click", (e) => {
            if (e.target === container) {
                container.classList.remove("show");
            }
        });
    });
});

// Collabsible windows on schedule page
var coll = document.getElementsByClassName("collabsible-tab-button");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";}
            else {
                content.style.display = "block"
            }
        });
};

// Get certain ticket type button 
const buttons = document.querySelectorAll('.arrow-to-the-right');
const select = document.getElementById('ticket-type');
const form = document.getElementById('ticket-purchase');

buttons.forEach(btn => {
btn.addEventListener('click', () => {
    const ticketType = btn.dataset.ticket;

    // Select the matching option
    select.value = ticketType;

    // Scroll to the form smoothly
    form.scrollIntoView({ behavior: 'smooth' });
    });
});

// form validation
const ticketForm = document.getElementById("ticket-purchase");

if (ticketForm) {
  ticketForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    function setError(input, message) {
      input.classList.add("error-message");
      input.nextElementSibling.textContent = message;
      valid = false;
    }

    function clearError(input) {
      input.classList.remove("error-message");
      input.nextElementSibling.textContent = "";
    }

    const fullName = document.getElementById("user-name");
    const email = document.getElementById("email-address");
    const phone = document.getElementById("phone-number");
    const ticketQuantity = document.getElementById("amount-of-tickets");

    const nameParts = fullName.value.trim().split(" ");
    if (nameParts.length < 2 || nameParts.some((part) => part.length < 2)) {
      setError(fullName, "Please enter your full name.");
    } else {
      clearError(fullName);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      setError(email, "Please enter a valid email address.");
    } else {
      clearError(email);
    }

    const phonePattern = /^[0-9]{8,15}$/;
    if (!phonePattern.test(phone.value.trim())) {
      setError(phone, "Please enter a valid phone number (numbers only).");
    } else {
      clearError(phone);
    }

    if (ticketQuantity.value < 1 || ticketQuantity.value > 7) {
      setError(ticketQuantity, "You can select between 1 and 7 tickets.");
    } else {
      clearError(ticketQuantity);
    }

    if (valid) {
      this.submit();
    }
  });
}


// total to pay counter
const prices = {
    earlyWeekend: 89, 
    weekend: 119,
    friday: 65,
    saturday: 75,
    vipWeekend: 119,
    ultraVip: 349,
    groupBundle: 499
};

const ticketType=document.getElementById('ticket-type');
const quantity=document.getElementById("amount-of-tickets");
const summary=document.getElementById("total-to-pay");

function countTotal() {
    const type=ticketType.value;
    const qnty=Number(quantity.value);
    const price=prices[type];
    const total=qnty*price;

    summary.textContent = total.toFixed(2);
}

if (ticketType) {
    ticketType.addEventListener("change", countTotal);
}
if (quantity) {
    quantity.addEventListener("change", countTotal);
}


// Terms and conditions modals
document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".open-terms-and-conditions").forEach(button => {
    button.addEventListener("click", () => {
      const target_tc = button.dataset.target;
      const modal_tc = document.querySelector(target_tc);
      if (modal_tc) modal_tc.classList.add("show");
    });
  });

  document.querySelectorAll(".close-terms-and-conditions").forEach(button => {
    button.addEventListener("click", () => {
      const modal_tc = button.closest(".terms-and-conditions-box");
      if (modal_tc) modal_tc.classList.remove("show");
    });
  });

  document.querySelectorAll(".terms-and-conditions-box").forEach(modal_tc => {
    modal_tc.addEventListener("click", (e) => {
      if (e.target === modal_tc) {
        modal_tc.classList.remove("show");
      }
    });
  });

});

