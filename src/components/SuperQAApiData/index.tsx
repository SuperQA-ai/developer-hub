import React, { useEffect, useState } from "react";
import { getXChatbotKeyCookie } from "../Chatbot/helpers";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface ISuperQAApiData {
  query: string;
  accountIdentifier?: boolean;
  token?: boolean | string;
  fallback: string;
  parse: string;
}

const SuperQAApiData: React.FC<ISuperQAApiData> = ({
  query,
  fallback,
  accountIdentifier,
  token,
  parse,
}) => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const {
          siteConfig: { customFields },
        } = useDocusaurusContext();
        const cookie = getXChatbotKeyCookie();
        const [response, setResponse] = useState("");
        useEffect(() => {
          async function FetchData() {
            try {
              const bodyData: { [key: string]: string } = { query, parse };
              if (query.includes("app.superqa.ai") && accountIdentifier) {
                bodyData.query += `?accountIdentifier=${cookie?.id}`;
              }

              if (
                typeof token === "string" &&
                token.startsWith("process.env.")
              ) {
                token = token.replace("process.env.", "");
              }
              bodyData.token =
                typeof token === "string"
                  ? (customFields[token] as string)
                  : token
                  ? cookie?.token
                  : null;
              const fetchResponse = await fetch(
                // "http://localhost:8888/api/api_proxy",
                "https://developer.superqa.ai/api/api_proxy",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(bodyData),
                }
              );
              if (!fetchResponse.ok) {
                throw new Error(`HTTP error! status: ${fetchResponse.status}`);
              }

              const data = await fetchResponse.json();

              setResponse(data);

            } catch (error) {
              console.log(error);
              setResponse(fallback);
            }
          }

          FetchData();
        }, [query, fallback, accountIdentifier, token, parse]);

        return <>{response}</>;
      }}
    </BrowserOnly>
  );
};

export default SuperQAApiData;