import scaleEngine from "../../public/enterpriseGenAI.webp";
import rlhf from "../../public/rlhf.webp";
import foundation from "../../public/foundation-models.webp";
import dataEngine from "../../public/data-engine.webp";

export const foundationData = [
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

export const foundationImages: { [key: number]: any } = {
  10: scaleEngine,
  0: rlhf,
  1: foundation,
  2: dataEngine,
};
