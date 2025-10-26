import React, { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { useSpring, a } from "@react-spring/web";
import { ThreeDots } from "react-loader-spinner";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import {
  isEmptyString,
  isTooShort,
  isValidEmail,
} from "../../utils/formHelper";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [processing, setProcessing] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<"error" | "success" | null>(
    null
  );

  const clearErrors = () => {
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
  };

  const raiseFeedback = (msg: string, type: "error" | "success") => {
    setFeedback(msg);
    setFeedbackType(type);
    setTimeout(() => {
      setFeedback(null);
      setFeedbackType(null);
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    clearErrors();

    // Basic field validations
    if (isEmptyString(name)) {
      setNameError(true);
      raiseFeedback("Name cannot be blank", "error");
      setProcessing(false);
      return;
    }

    if (isEmptyString(email)) {
      setEmailError(true);
      raiseFeedback("Email cannot be blank", "error");
      setProcessing(false);
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError(true);
      raiseFeedback("Please enter a valid email address", "error");
      setProcessing(false);
      return;
    }

    if (isEmptyString(message)) {
      setMessageError(true);
      raiseFeedback("Message cannot be blank", "error");
      setProcessing(false);
      return;
    }

    if (isTooShort(message, 10)) {
      setMessageError(true);
      raiseFeedback("The message is too short", "error");
      setProcessing(false);
      return;
    }

    // Send via EmailJS
    const serviceID = "service_z2xrwno";
    const templateID = "template_889pq44";
    const publicKey = "WgwgRWATV947VvpY0";

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: name,
          from_email: email,
          subject: "Portfolio contact",
          message: message,
        },
        publicKey
      );

      raiseFeedback("✅ Message sent successfully!", "success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      raiseFeedback("❌ Failed to send message. Please try again.", "error");
    } finally {
      setProcessing(false);
    }
  };

  // Animations
  const feedbackSprings = useSpring({
    y: feedback ? -40 : 0,
    opacity: feedback ? 1 : 0,
    config: { friction: 20, tension: 200 },
  });

  const [spring, api] = useSpring(() => ({
    from: { y: 50, opacity: 0 },
    config: { tension: 200, friction: 50 },
  }));

  useIntersectionObserver(formRef, () => {
    api.start({ y: 0, opacity: 1 });
  });

  return (
    <a.div className="contactForm__container" ref={formRef} style={spring}>
      <form className="contactForm" onSubmit={handleSubmit}>
        {feedback && (
          <a.div
            className={`feedback ${feedbackType}`}
            style={{
              top: "0",
              transform: "translateX(-50%)",
              ...feedbackSprings,
            }}
          >
            {feedback}
          </a.div>
        )}

        <div>
          <label htmlFor="contactForm__name">
            Name{" "}
            <span aria-hidden className={nameError ? "error" : ""}>
              *
            </span>
          </label>
          <input
            type="text"
            id="contactForm__name"
            className={`contactForm__name ${nameError ? "invalid" : ""}`}
            value={name}
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="contactForm__email">
            Email{" "}
            <span aria-hidden className={emailError ? "error" : ""}>
              *
            </span>
          </label>
          <input
            type="email"
            id="contactForm__email"
            className={`contactForm__email ${emailError ? "invalid" : ""}`}
            value={email}
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="contactForm__message">
            Message{" "}
            <span aria-hidden className={messageError ? "error" : ""}>
              *
            </span>
          </label>
          <textarea
            id="contactForm__message"
            className={`contactForm__message ${messageError ? "invalid" : ""}`}
            rows={5}
            value={message}
            placeholder="Type your message here..."
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit" disabled={processing}>
          {processing ? (
            <>
              Sending
              <ThreeDots
                height="15"
                width="20"
                radius="9"
                color="var(--loading)"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            </>
          ) : (
            <>
              Send <IoSend />
            </>
          )}
        </button>
      </form>
    </a.div>
  );
};

export default ContactForm;
