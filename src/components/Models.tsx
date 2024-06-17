import React from "react";
import scaleEngine from "../../public/enterpriseGenAI.webp";
import rlhf from "../../public/rlhf.webp";
import foundation from "../../public/foundation-models.webp";
import dataEngine from "../../public/data-engine.webp";

function Models() {
  const [page, setPage] = React.useState<number>(10);
  const images: { [key: number]: any } = {
    10: scaleEngine,
    0: rlhf,
    1: foundation,
    2: dataEngine,
  };
  const data = [
    {
      heading: "Fine-Tuning and RLHF",
      content:
        "Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.",
    },
    {
      heading: "Foundation Models",
      content:
        "Scale partners or integrates with all of the leading AI models, from open-source to closed-source, including OpenAI, Anthropic, Google PaLM, Cohere, and more.",
    },
    {
      heading: "Enterprise Data",
      content:
        "Scale's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.",
    },
  ];
  function handleMouseEnter(index: number) {
    setPage(index);
  }
  return (
    <section className="flex flex-row items-center my-20 gap-20">
      <div className="flex flex-col items-start">
        {data.map((item, index) => (
          <div
            key={item.heading}
            style={{ opacity: page === index ? 1 : page === 10 ? 1 : 0.5 }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => setPage(10)}
            className="flex flex-col leading-none transition-all cursor-pointer transform duration-300 ease-in-out"
          >
            <p className="text-[1.5rem] leading-[1]">{item.heading}</p>
            <p className="text-[1.1rem] text-neutral-400 pb-10">
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <img src={images[page].src} height={400} width={400} alt="overall" />
    </section>
  );
}

export default Models;
