$(document).ready(function() {
  $("#sendButton").click(event => {
    event.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const subject = $("#subject").val();
    const message = $("#message").val();

    //rEGeX for email verification
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    name === "" || subject === "" || message === "" ? (res = false) : null;
    res
      ? $.post(
          "/contact",
          {
            name: name,
            email: email,
            subject: subject,
            message: message
          },
          (data, status) => {
            if (status === "success") {
              $("#name").val("");
              $("#email").val("");
              $("#subject").val("");
              $("#message").val("");
            }
            swal(
              "Sent !",
              "Your Message has been Successfully Sent",
              "success"
            );
          }
        )
      : swal(
          "All fields are required!! \nPlease verify the information on the form"
        );
  });
});
