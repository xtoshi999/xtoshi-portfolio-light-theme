import { useEffect, useState } from "react";
import { send } from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  // Questions, Work Opportunities, Connecting, Other
  const [subject, setSubject] = useState("Questions");
  // LOADING, ERROR, SUCCESS
  const [status, setStatus] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubject = (selectedButton) => {
    setSubject(selectedButton);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitBtn = document.querySelector(".contact-submit-btn");
    submitBtn.innerHTML = "Sending...";
    submitBtn.disabled = true;
    setTimeout(() => {
      send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: `${firstName} ${surname}`,
          to_name: "David",
          subject,
          message,
          reply_to: email,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
        .then(() => {
          submitBtn.innerHTML = "Sent!";
        })
        .catch(() => {
          submitBtn.innerHTML = "Something went wrong!";
        });
    }, 2000);
  };

  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });

  return (
    <div className="contact-container">
      {/* <h1>
        I would love to hear from you!<br></br>Get in touch 👋
      </h1> */}
      <h1>Contact</h1>
      <div className="contact-form">
        <form
          className="contact-form-container"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="contact-info">
            <div className="contact-name">
              <div className="contact-form-input">
                <label htmlFor="fname">First Name</label>
                <input
                  id="fname"
                  type="text"
                  placeholder="Enter your first name"
                  name="name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="contact-form-input">
                <label htmlFor="lname">Last Name</label>
                <input
                  id="lname"
                  type="text"
                  placeholder="Enter your last name"
                  name="surname"
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="contact-form-input">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Enter your email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="contact-form-subject">
              <p>I&apos;m contacting you for...</p>
              <div className="subject-btns">
                <button
                  type="button"
                  onClick={(e) => handleSubject(e.target.innerHTML)}
                  className={`${subject === "Questions" ? "active-btn" : ""}`}
                >
                  Questions
                </button>
                <button
                  type="button"
                  onClick={(e) => handleSubject(e.target.innerHTML)}
                  className={`${
                    subject === "Work Opportunities" ? "active-btn" : ""
                  }`}
                >
                  Work Opportunities
                </button>
                <button
                  type="button"
                  onClick={(e) => handleSubject(e.target.innerHTML)}
                  className={`${subject === "Connecting" ? "active-btn" : ""}`}
                >
                  Connecting
                </button>
                <button
                  type="button"
                  onClick={(e) => handleSubject(e.target.innerHTML)}
                  className={`${subject === "Other" ? "active-btn" : ""}`}
                >
                  Other
                </button>
              </div>
            </div>
          </div>
          <div className="contact-msg">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              cols="50"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="contact-submit-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
      <div className="right-links">
        <div className="contact-links">
        <a
            href="https://t.me/xtoshi999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="40px"
              height="40px"
            >
              <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445 c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758 c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125 c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077 C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"/>
            </svg>
          </a>

          <a
            href="https://github.com/xtoshi999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="40px"
              height="40px"
            >
              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
            </svg>
          </a>
          
          <a
            href="https://discord.com/users/546828755419660297"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="40px"
              height="40px"
            >
              <path d="M41.625,10.769c-3.18-1.455-6.595-2.527-10.186-3.153c-0.446,0.793-0.94,1.864-1.287,2.707 c-3.804-0.569-7.567-0.569-11.288,0c-0.347-0.843-0.852-1.914-1.308-2.707c-3.593,0.626-7.016,1.699-10.197,3.153 C2.01,22.227,0.681,33.397,1.752,44.386c4.285,3.148,8.436,5.058,12.514,6.323c1.007-1.364,1.904-2.807,2.67-4.323 c-1.466-0.556-2.863-1.238-4.175-2.027c0.349-0.254,0.691-0.519,1.023-0.786c8.055,3.706,16.796,3.706,24.747,0 c0.334,0.267,0.676,0.532,1.025,0.786c-1.313,0.789-2.711,1.471-4.178,2.027c0.766,1.516,1.663,2.959,2.67,4.323 c4.08-1.265,8.232-3.175,12.517-6.323C43.794,31.516,40.923,20.439,41.625,10.769z M17.374,37.475 c-2.666,0-4.856-2.448-4.856-5.454c0-3.006,2.146-5.454,4.856-5.454c2.72,0,4.901,2.459,4.856,5.454 C22.23,35.027,20.084,37.475,17.374,37.475z M32.626,37.475c-2.666,0-4.855-2.448-4.855-5.454c0-3.006,2.145-5.454,4.855-5.454 c2.721,0,4.901,2.459,4.857,5.454C37.483,35.027,35.337,37.475,32.626,37.475z"/>
            </svg>
          </a>

          <a
            href="https://x.com/David9451084684"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="40px"
              height="40px"
            >
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"/>
            </svg>
          </a>
        </div>
        <div className="vertical-line"></div>
      </div>
    </div>
  );
};

export default Contact;
