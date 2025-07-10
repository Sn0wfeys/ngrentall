(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
          event.stopPropagation();
          form.classList.add("was-validated");
          return;
        }

        // SweetAlert
        Swal.fire({
          title: "Success!",
          text: "Pesanan anda telah diterima. Check email anda untuk melanjutkan pembayaran.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#106ebe",
        }).then(() => {
          form.reset();
          form.classList.remove("was-validated");
        });
      },
      false
    );
  });
})();
