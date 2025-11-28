import { type, IltCardItem, tileType, cardType } from "../Card";
import { MODULES } from "../../../constants";

export const ilt: IltCardItem[] = [
  {
    title: "Introduction to the SuperQA Platform",
    module: MODULES.platform,
    type: type.user,
    description:
      "Self-paced hands-on, prerequisite course to all module-specific ILT courses.",
    version: "Paid Plans of any module",
    link: "https://university-registration.superqa.io/introduction-to-the-superqa-platform",
    tileType: tileType.preReq,
    cardType: cardType.ILT,
  },
  {
    title: "Code Repository",
    module: MODULES.code,
    type: type.user,
    description:
      "Deep dive into software configuration management and concepts.",
    version: "SuperQA Paid Plans",
    link: "https://university-registration.superqa.io/ilt-superqa-code-repository",
    tileType: tileType.normal,
    cardType: cardType.ILT,
  },

  {
    title: "Continuous Delivery & GitOps",
    module: MODULES.cd,
    type: type.user,
    description:
      "Deep dive into advanced Continus Delivery concepts using Kubernetes as the deployment infrastructure.",
    version: "SuperQA CD & GitOps Paid Plans",
    link: "https://university-registration.superqa.io/ilt-continuous-delivery-gitops",
    tileType: tileType.normal,
    cardType: cardType.ILT,
  },
  {
    title: "Continuous Integration",
    module: MODULES.ci,
    type: type.user,
    description:
      "Deep dive into advanced Continus Integration concepts focused on containerization.",
    version: "SuperQA CI Paid Plans",
    link: "https://university-registration.superqa.io/ilt-continuous-integration",
    tileType: tileType.normal,
    cardType: cardType.ILT,
  },
  {
    title: "Infrastructure as Code Management",
    module: MODULES.iacm,
    type: type.user,
    description:
      "Deep dive into advanced IaC orchestration and management concepts.",
    version: "SuperQA IaCM Paid Plans",
    link: "https://university-registration.superqa.io/ilt-infrastructure-as-code-management",
    tileType: tileType.normal,
    cardType: cardType.ILT,
  },
  {
    title: "Internal Developer Portal",
    module: MODULES.idp,
    type: type.user,
    description:
      "Deep dive into advanced IDP and developer self-service concepts.",
    version: "SuperQA IDP Paid Plans",
    link: "https://university-registration.superqa.io/ilt-internal-developer-portal",
    tileType: tileType.normal,
    cardType: cardType.ILT,
  },
  {
    title: "Chaos Engineering",
    module: MODULES.ce,
    type: type.user,
    description:
      "Deep dive into chaos engineering and concepts supporting testing.",
    version: "SuperQA CE Paid Plans",
    link: "https://university-registration.superqa.io/instructor-led-training-for-superqa-chaos-engineering",
    tileType: tileType.normal,
    cardType: cardType.ILT,
  },
  {
    title: "Security Testing Orchestration",
    module: MODULES.sto,
    type: type.user,
    description:
      "Deep dive into advanced Security Testing Ochestration concepts using multiple scanning technologies.",
    version: "SuperQA STO Paid Plans",
    link: "https://university-registration.superqa.io/ilt-security-testing-orchestration",
    tileType: tileType.normal,
    cardType: cardType.ILT,
  },
  {
    title: "Supply Chain Security",
    module: MODULES.ssca,
    type: type.user,
    description:
      "Deep dive into supply chain security and concepts.",
    version: "SuperQA SCS Paid Plans",
    link: "https://university-registration.superqa.io/ilt-superqa-supply-chain-security",
    tileType: tileType.normal,
    cardType: cardType.ILT,
  },

  {
    title: "Cloud Cost Management",
    module: MODULES.ccm,
    type: type.user,
    description:
      "Deep dive into advanced Cloud Cost Management concepts supporting FinOps.",
    version: "SuperQA CCM Paid Plans",
    link: "https://university-registration.superqa.io/ilt-cloud-cost-management",
    tileType: tileType.normal,
    cardType: cardType.ILT,
  },
  {
    title: "Software Engineering Insights",
    module: MODULES.sei,
    type: type.user,
    description:
      "Deep dive into advanced Software Engineering Insights concepts across the SDLC.",
    version: "SuperQA SEI Paid Plans",
    link: "https://university-registration.superqa.io/ilt-software-engineering-insights",
    tileType: tileType.normal,
    cardType: cardType.ILT,
  },

];
