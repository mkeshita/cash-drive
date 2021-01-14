import React, {useState} from "react";
import ContactInfo from "./ContactInfo";
import Api from "../../utils/api";

function ContactContent() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});
  const data = [
    {
      icon: "./images/map-pin.svg",
      content: "Plot 14, Ladipo Omotesho Cole Street, Lekki Phase 1 Lagos.",
      id: "01",
    },
    {
      icon: "./images/smartphone.svg",
      content: "+234 817 555 6789, +234 802 857 2566, +234 703 491 2176 ",
      id: "02",
    },
    {
      icon: "./images/mail.svg",
      content: " info@cashdrive.com",
      id: "03",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {full_name: fullName, email: email, message: msg};
    const response = await Api.post(`${Api.ENDPOINTS.url}/contact-us`, data);
    const {status} = response;
    setEmail("");
    setMsg("");
    setFullName("");
    setLoading(false);
    if (status) {
      setResult({...response});
    }
    console.log(result.message);
  };
  return (
    <section className="section">
      <div className="container">
        <h3 className="title mb-4">Get in touch</h3>
        <div className="row justify-content-between">
          <div className="col-md-5 order-2 order-md-0">
            <div className="border-bottom pb-3">
              <p className="mb-5">
                Vix utinam aliquando ullamcorper ex. In aeque animal reformidans
                ius, id fugit legendos deterruisset sit, ad duo docendi
                consectetuer.
              </p>
              {data.map((data) => (
                <ContactInfo key={data.id} data={data} />
              ))}
            </div>

            <div className="d-flex mt-4">
              <div className="mr-4">
                <a href="#!">
                  <img src="./images/socials/facebook.svg" alt="facebook" />
                </a>
              </div>
              <div className="mr-4">
                <a href="#!">
                  <img src="./images/socials/instagram.svg" alt="facebook" />
                </a>
              </div>
              <div className="mr-4">
                <a href="#!">
                  <img src="./images/socials/linkedin.svg" alt="facebook" />
                </a>
              </div>
            </div>
            <br />
          </div>
          {result?.message ? (
            <div className="col-md-6 order-0 order-md-2 mb-5 mb-md-0">
              <p>{result?.message}</p>
              <br />
              <button
                className="btn px-5 mt-3 btn-orange"
                onClick={() => {
                  setResult({});
                }}
              >
                ok
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="col-md-6 order-0 order-md-2 mb-5 mb-md-0"
            >
              <div className="input__container">
                <input
                  className="input"
                  required
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  readOnly={loading}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="input__container">
                <input
                  className="input"
                  required
                  type="email"
                  placeholder="Email"
                  value={email}
                  readOnly={loading}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input__container">
                <textarea
                  className="textarea"
                  name=""
                  id=""
                  type="text"
                  required
                  cols="10"
                  placeholder="Message"
                  rows="6"
                  value={msg}
                  readOnly={loading}
                  onChange={(e) => setMsg(e.target.value)}
                ></textarea>
              </div>
              <button className="btn px-5 mt-3 btn-orange" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactContent;
