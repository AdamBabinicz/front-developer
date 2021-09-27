import emailjs from "emailjs-com";
import React from "react";
// import { init } from "emailjs-com";
// init("user_0vIHHoNaMVOtM9nPAelrY");

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bs3flpf",
        "template_1tecqap",
        e.target,
        "user_0vIHHoNaMVOtM9nPAelrY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="container">
        <form
          onSubmit={sendEmail}
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input type="hidden" name="form-name" value="contact-form" />
              <input
                type="text"
                className="form-control"
                placeholder="Imię i Nazwisko lub Nick"
                name="name"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Temat"
                name="subject"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Twoja wiadomość"
                name="message"
                required
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Wyślij"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
