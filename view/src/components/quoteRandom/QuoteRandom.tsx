import React, { useState, useEffect } from "react";
import axios from "axios";
import https from "https";
import Button from "../button/Button";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi";
import {
  BackgroundAuthor,
  Loading,
  QuoteAuthor,
  QuoteContent,
  QuoteSpanPerspec,
  QuoteText,
  QuoteWrapper,
} from "./QuoteRandomStyle";

const QuoteRandom: React.FC = () => {
  const positionsX: string[] = ["0", "20%", "40%", "60%", "80%"];
  const positionsY: string[] = ["0", "20%", "40%", "60%", "80%"];
  const rotateX: string[] = ["-30deg", "-20deg", "0deg", "20deg", "30deg"];
  const rotateY: string[] = ["30deg", "20deg", "0deg", "-20deg", "-30deg"];
  const [clicked, setClicked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [quoteRandomText, setQuoteRandomText] = useState<string>("");
  const [quoteRandomAuthor, setQuoteRandomAuthor] = useState<string>("");

  /**
   * Click on Button Generate
   */
  const handleClick = () => {
    setLoading(true);
    generateQuote();
  };

  /**
   * Generate quote randomly
   */
  const generateQuote = async () => {
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
      requestCert: false,
    });
    const response = await axios.get(
      "http://ec2-52-39-75-111.us-west-2.compute.amazonaws.com:5000/api/random",
      { httpsAgent: httpsAgent }
    );

    // const response = await axios.get("http://localhost:5000/api/random");

    setQuoteRandomText(response.data.content);
    setQuoteRandomAuthor(response.data.author);
    setLoading(false);
    setClicked((c) => !c);
  };

  useEffect(() => {
    generateQuote();
  }, []);

  return (
    <>
      {!loading && <BackgroundAuthor>{quoteRandomAuthor}</BackgroundAuthor>}
      <QuoteWrapper changeQuote={clicked ? "360deg" : "0"}>
        {positionsX.map((posY: string, indexY: number) =>
          positionsY.map((posX: string, indexX: number) => (
            <QuoteSpanPerspec
              top={posY}
              left={posX}
              rotateY={rotateY[indexX]}
              rotateX={rotateX[indexY]}
              loading={loading}
            />
          ))
        )}
        <QuoteContent loading={loading}>
          {loading ? (
            <Loading>
              <BiLoaderCircle className="icon_loading" />
              <br />
              Loading...
            </Loading>
          ) : (
            <>
              <QuoteText>
                <FaQuoteLeft /> {quoteRandomText} <FaQuoteRight />
              </QuoteText>
              <QuoteAuthor>{quoteRandomAuthor}</QuoteAuthor>
            </>
          )}
        </QuoteContent>
      </QuoteWrapper>
      <Button text="Generate" handleClick={handleClick}></Button>
    </>
  );
};

export default QuoteRandom;
