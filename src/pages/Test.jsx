import "./Test.css";

const Test = () => {
  return (
    <div className="text-container">
      <div className="text-content">
        <h1 className="title">INIT'25</h1>
        <h2 className="subtitle">Team OSS</h2>

        <p className="description">
          This is the official link for the{" "}
          <span className="highlight">Team OSS Recruitment Test</span>.
          Click below to give your test.
        </p>

        <a
          href="https://unstop.com/o/koiQJT4?lb=y8E7GLp6" 
          target="_blank"
          rel="noopener noreferrer"
          className="test-link"
        >
          Give Test
        </a>
      </div>
    </div>
  );
};

export default Test;
