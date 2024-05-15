interface AccordionProps {
  heading: string;
  content: string;
}

function Accordion({ heading, content }: AccordionProps) {
  // Display information based on the algorithm

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            {heading}
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
