import { useEffect, useState } from "react";
import "./Test.css";
import LoadingAnimation from './LoadingAnimation';


const Test = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }
  return (
    <div className="text-container">
      <div className="text-content">
        <h1 className="title">HOUR OF CODE 4.0</h1>
        <h2 className="subtitle">Team OSS</h2>

        <p className="description">
          This is the official link for the 
          <span className="highlight">{" "}ACM Test</span>.
          Click below to give your test.
        </p>

        <a
          href="https://www.hackerrank.com/codeplayoss" 
          target="_blank"
          rel="noopener noreferrer"
          className="test-link"
        >
          Game On
        </a>
      </div>
    </div>
  );
};

export default Test;
