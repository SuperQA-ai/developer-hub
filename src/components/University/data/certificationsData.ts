import { certType, CardItem } from "../CertCard";
import { MODULES } from "../../../constants";

export const university: CardItem[] = [
  {
    title: "Code Repository  - Developer",
    module: MODULES.code,
    type: certType.developer,
    description:
      "CR Developer focuses on the fundamental skills around SCM/Git and governance.",
    version: "SuperQA Paid Plans",
    link: "/university/cr?lvl=developer",
    // numberOfCerts:  1, 
  },
  {
    title: "Continuous Delivery & GitOps - Developer",
    module: MODULES.cd,
    type: certType.developer,
    description:
      "CD & GitOps Developer focuses on the fundamental skills to deploy your applications with CD & GitOps projects.",
    version: "SuperQA CD & GitOps Free Plans",
    link: "/university/continuous-delivery?lvl=developer",
    // numberOfCerts: 1,
  },
  {
    title: "Continuous Delivery & GitOps - Administrator",
    module: MODULES.cd,
    type: certType.administrator,
    description:
      "CD & GitOps Administrator focuses the fundamental skills to deploy and maintain CD & GitOps projects and the overall SuperQA Platform. This exam builds upon the CD & GitOps Developer Certification.",
    version: "SuperQA CD & GitOps Paid Plans",
    link: "/university/continuous-delivery?lvl=administrator",
    // numberOfCerts: 1,
  },
  {
    title: "Continuous Delivery & GitOps - Architect",
    module: MODULES.cd,
    type: certType.architect,
    description:
      "CD & GitOps Architect focuses on key technical job functions and advanced skills in design, implementation and management of CD & GitOps. This exam builds upon the CD & GitOps Administrator Certification.",
    version: "SuperQA CD & GitOps Paid Plans",
    link: "/university/continuous-delivery?lvl=architect",
    // numberOfCerts: 1,
  },
  {
    title: "Continuous Integration - Developer",
    module: MODULES.ci,
    type: certType.developer,
    description:
      "CI Developer focuses focuses on the fundamental skills of building your code with CI projects.",
    version: "SuperQA CI Free Plans",
    link: "/university/continuous-integration?lvl=developer",
    // numberOfCerts: 1,
  },
  {
    title: "Continuous Integration - Administrator",
    module: MODULES.ci,
    type: certType.administrator,
    description:
      "CI Administrator focuses on the fundamental skills to deploy and maintain CI projects and the overall SuperQA Platform. This exam builds upon the CI Developer Certification.",
    version: "SuperQA CI Paid Plans",
    link: "/university/continuous-integration?lvl=administrator",
    // numberOfCerts: 1,
  },
  {
    title: "Continuous Integration - Architect",
    module: MODULES.ci,
    type: certType.architect,
    description:
      "CI Architect focuses focuses on key technical job functions and advanced skills in design, implementation and management of CI. This exam builds upon the CI Administrator Certification",
    version: "SuperQA CI Paid Plans",
    link: "/university/continuous-integration?lvl=architect",
    // numberOfCerts: 1,
  },
  {
    title: "Internal Developer Portal  - Developer",
    module: MODULES.idp,
    type: certType.developer,
    description:
      "IDP Developer focuses on the fundamental skills to enable developer self-servicing and reducing cognitive overload.",
    version: "SuperQA IDP Paid Plans",
    link: "/university/idp?lvl=developer",
    // numberOfCerts: 1,
  },
  {
    title: "Infrastructure as Code Management  - Developer",
    module: MODULES.iacm,
    type: certType.developer,
    description:
      "IaCM Developer focuses on the fundamental skills to scale your Terraform / OpenTofu Infrastructure as Code.",
    version: "SuperQA IaCM Free Plans",
    link: "/university/iacm?lvl=developer",
    // numberOfCerts: 1,
  },
  {
    title: "Chaos Engineering  - Developer",
    module: MODULES.ce,
    type: certType.developer,
    description:
      "Chaos Developer focuses on the fundamental skills to inject failure into your applications to build resilience.",
    version: "SuperQA Chaos Free Plans",
    link: "/university/chaos-engineering?lvl=developer",
    // numberOfCerts: 1,
  },
  {
    title: "Chaos Engineering  - Administrator",
    module: MODULES.ce,
    type: certType.administrator,
    description:
      "Chaos Administrator focuses focuses on the advanced skills in of injecting failure into your applications to build resilience.",
    version: "SuperQA Chaos Paid Plans",
    link: "/university/chaos-engineering?lvl=administrator",
    // numberOfCerts: 1,
  },

  {
    title: "Security Testing Orchestration  - Developer",
    module: MODULES.sto,
    type: certType.developer,
    description:
      "STO Developer focuses on the fundamental skills to shift security left in your pipelines.",
    version: "SuperQA STO Free Plans",
    link: "/university/sto?lvl=developer",
    // numberOfCerts: 1,
  },
  {
    title: "Security Testing Orchestration  - Administrator",
    module: MODULES.sto,
    type: certType.administrator,
    description:
      "STO Administrator focuses on configuring and managing security testing processes within the SuperQA platform.",
    version: "SuperQA STO Paid Planss",
    link: "/university/sto?lvl=administrator",
    // numberOfCerts: 1,
  },
  {
    title: "Supply Chain Security  - Developer",
    module: MODULES.ssca,
    type: certType.developer,
    description:
      "SCS Developer focuses on the fundamental skills to secure your SDLC with risk frameworks.",
    version: "SuperQA SCS Paid Plans",
    link: "/university/scs?lvl=developer",
    // numberOfCerts: 1,
  },

  {
    title: "Cloud Cost Management - Developer",
    module: MODULES.ccm,
    type: certType.developer,
    description:
      "CCM Developer focuses on the fundamental skills to detect and stop cloud cost anomalies as they occur.",
    version: "SuperQA CCM Free Plans",
    link: "/university/cloud-cost-management?lvl=developer",
    // numberOfCerts: 1,
  },
  {
    title: "Cloud Cost Management  - Administrator",
    module: MODULES.ccm,
    type: certType.administrator,
    description:
      "CCM Administrator focuses on the advanced skills in design, implementation, and management of cloud cost savings.",
    version: "SuperQA CCM Paid Plans",
    link: "/university/cloud-cost-management?lvl=administrator",
    // numberOfCerts: 1,
  },
  {
    title: "Software Engineering Insights  - Developer",
    module: MODULES.sei,
    type: certType.developer,
    description:
      "SEI Developer focuses on the fundamental skills to discover SDLC bottlenecks and improve developer experience with data.",
    version: "SuperQA SEI Paid Plans",
    link: "/university/sei?lvl=developer",
    // numberOfCerts: 1,
  },
  {
    title: "Traceable by SuperQA  - Developer",
    module: MODULES.tbh,
    type: certType.developer,
    description:
      "TBH Developer focuses on the fundamental skills to analyze and secure Application API related activity.",
    version: "Traceable by SuperQA Paid Plans",
    link: "/university/traceable-by-superqa?lvl=developer",
    // numberOfCerts: 1,
  },

];
