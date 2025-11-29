// src/pages/Home/components/categories.data.ts
export type ModuleLink = {
  name: string;
  href: string;
  /** Optional explicit icon path (relative to site static dir, e.g. "img/icon-ci.svg") */
  icon?: string;
  /** Module slug used for fallback icon: img/icon-{module}.svg */
  module: string;
  description?: string;
  badge?: 'NEW' | 'EA' | 'GA';
};

export type Category = {
  title: string;
  blurb?: string;
  items: ModuleLink[];
};

export const categories: Category[] = [
  {
    title: "SuperQA Platform",
    blurb: "The AI-powered test automation platform.",
    items: [
      {
        name: "Platform Overview",
        href: "/docs/platform/overview",
        module: "platform",
        description: "Learn about the SuperQA platform architecture."
      },
    ],
  },
  {
    title: "Integrations & Advanced Features",
    blurb: "Extend and optimize your testing workflows.",
    items: [
      {
        name: "Jenkins Integration",
        href: "/docs/integrations/jenkins",
        module: "jenkins",
        description: "Integrate SuperQA with Jenkins pipelines."
      },
      {
        name: "GitHub Action",
        href: "/docs/integrations/github-action",
        module: "github",
        icon: "img/icon_code.svg",
        description: "Run SuperQA tests in GitHub Actions."
      },
    ],
  },
];