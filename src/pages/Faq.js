import React from "react";
import { Container } from "react-bootstrap";
import faq from "../data/faq";
const Faq = () => {
  return (
    <Container className="mt-3">
      <h2 className="text-center" style={{ margin: "30px" }}>
        Frequently Asked Questions
      </h2>
      {faq.map((questions) => {
        return (
          <>
            <h4 className="mt-2" key={questions.id}>
              {questions.question}
            </h4>
            {questions.answer}
          </>
        );
      })}
    </Container>
  );
};

export default Faq;
