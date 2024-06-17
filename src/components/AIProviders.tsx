import React from "react";
import openAI from "../../public/companies/openai.webp";
import adept from "../../public/companies/adept.webp";
import meta from "../../public/companies/meta.webp";
import cohere from "../../public/companies/cohere.webp";
import anthropic from "../../public/companies/anthropic.webp";

function AIProviders() {
  const companies = [openAI, adept, meta, cohere, anthropic];
  return (
    <div className="w-full flex flex-col items-center gap-5 tracking-[4px]">
      <p>GENERATIVE AI PROVIDERS WE PARTNER WITH:</p>
      <div className="flex flex-row items-end justify-between gap-7">
        {companies.map((company, index) => (
          <div
            key={index}
            className="rounded-xl p-4 h-28 w-[230px] flex items-center justify-center border border-white"
          >
            <img
              height={5}
              width={120}
              className="h-[5px] w-[120px]"
              src={company.src}
              alt="company"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIProviders;
