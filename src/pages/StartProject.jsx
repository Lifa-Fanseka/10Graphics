import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./StartProject.css";

function StartProject() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    deadline: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSending(true);
    setError("");

    try {
      await emailjs.send(
        "service_dxjfenf",
        "template_1lga8yd",
        {
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          budget: formData.budget || "Not specified",
          deadline: formData.deadline || "Not specified",
          description: formData.description,
        },
        {
          publicKey: "z9Qp_EkHb2vrcYWeh",
        }
      );

      setSubmitted(true);
    } catch (err) {
  console.error("EmailJS error:", err);

  setError(
    `Email failed: ${err?.text || err?.message || "Unknown error"}`
  );
  } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <main className="start-project start-project--success">
        <div className="container">
          <p className="label">10 GRAPHICS / PROJECT BRIEF</p>

          <div className="start-project__success">
            <span>10G</span>

            <h1>
              BRIEF
              <br />
              RECEIVED.
            </h1>

            <p>
              THANK YOU FOR TRUSTING 10 GRAPHICS.
              WE'LL REVIEW YOUR PROJECT AND GET
              BACK TO YOU SOON.
            </p>

            <Link to="/" className="start-project__back">
              ← BACK HOME
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="start-project">
      <div className="container">
        <header className="start-project__header">
          <div>
            <p className="label">
              10 GRAPHICS / PROJECT BRIEF
            </p>

            <h1>
              LET'S
              <br />
              START
              <br />
              SOMETHING.
            </h1>
          </div>

          <div className="start-project__intro">
            <p>
              HAVE A PROJECT IN MIND?
              <br />
              TELL US ABOUT IT.
            </p>

            <span>
              THIS SHOULD ONLY TAKE
              <br />
              A FEW MINUTES.
            </span>
          </div>
        </header>

        <form
          className="project-form"
          onSubmit={handleSubmit}
        >
          <section className="project-form__section">
            <div className="project-form__number">
              01
            </div>

            <div className="project-form__content">
              <p className="label">YOUR DETAILS</p>

              <div className="project-form__grid">
                <label>
                  <span>NAME *</span>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="YOUR NAME"
                    required
                    disabled={sending}
                  />
                </label>

                <label>
                  <span>EMAIL *</span>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="YOU@EMAIL.COM"
                    required
                    disabled={sending}
                  />
                </label>
              </div>
            </div>
          </section>

          <section className="project-form__section">
            <div className="project-form__number">
              02
            </div>

            <div className="project-form__content">
              <p className="label">THE PROJECT</p>

              <label>
                <span>WHAT DO YOU NEED? *</span>

                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  disabled={sending}
                >
                  <option value="">
                    SELECT A PROJECT TYPE
                  </option>

                  <option value="Poster Design">
                    POSTER DESIGN
                  </option>

                  <option value="Social Media">
                    SOCIAL MEDIA DESIGN
                  </option>

                  <option value="Event Graphics">
                    EVENT GRAPHICS
                  </option>

                  <option value="Brand Identity">
                    BRAND IDENTITY
                  </option>

                  <option value="Campaign Design">
                    CAMPAIGN DESIGN
                  </option>

                  <option value="Other">
                    SOMETHING ELSE
                  </option>
                </select>
              </label>
            </div>
          </section>

          <section className="project-form__section">
            <div className="project-form__number">
              03
            </div>

            <div className="project-form__content">
              <p className="label">PROJECT DETAILS</p>

              <label>
                <span>
                  TELL US ABOUT THE PROJECT *
                </span>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="WHAT ARE YOU WORKING ON? WHAT DO YOU NEED DESIGNED? GIVE US AS MUCH CONTEXT AS YOU CAN."
                  rows="7"
                  required
                  disabled={sending}
                />
              </label>
            </div>
          </section>

          <section className="project-form__section">
            <div className="project-form__number">
              04
            </div>

            <div className="project-form__content">
              <p className="label">
                TIMELINE & BUDGET
              </p>

              <div className="project-form__grid">
                <label>
                  <span>DEADLINE</span>

                  <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    disabled={sending}
                  />
                </label>

                <label>
                  <span>ESTIMATED BUDGET</span>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    disabled={sending}
                  >
                    <option value="">
                      SELECT A RANGE
                    </option>

                    <option value="Under R500">
                      UNDER R500
                    </option>

                    <option value="R500 - R1000">
                      R500 – R1,000
                    </option>

                    <option value="R1000 - R2500">
                      R1,000 – R2,500
                    </option>

                    <option value="R2500 - R5000">
                      R2,500 – R5,000
                    </option>

                    <option value="R5000+">
                      R5,000+
                    </option>
                  </select>
                </label>
              </div>
            </div>
          </section>

          <section className="project-form__submit">
            <div>
              <p className="label">READY?</p>

              <p>
                SEND YOUR BRIEF AND LET'S
                <br />
                MAKE SOMETHING GREAT.
              </p>

              {error && (
                <p
                  role="alert"
                  style={{
                    marginTop: "15px",
                    color: "var(--color-coral)",
                  }}
                >
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
            >
              {sending
                ? "SENDING..."
                : "SEND PROJECT BRIEF"}

              <span>
                {sending ? "..." : "→"}
              </span>
            </button>
          </section>
        </form>
      </div>
    </main>
  );
}

export default StartProject;