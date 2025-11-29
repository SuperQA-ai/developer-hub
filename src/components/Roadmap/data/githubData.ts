import { Horizon } from "./roadmapData";

export const githubData: Horizon = {
    Now: {
        description: "🚧 Q3 2025, Aug 2025 - Oct 2025",
        feature: [
            {
                title: "Matrix Strategy Support",
                description:
                    "Run tests across multiple configurations using GitHub Actions matrix strategy.",
                tag: [{ value: "Workflows" }],
            },
        ],
    },
    Next: {
        description: "🪄 Q4 2025, Nov 2025 - Jan 2026",
        feature: [
            {
                title: "Advanced Result Reporting",
                description:
                    "Enhanced test result reporting with automatic PR comments and status checks.",
                tag: [{ value: "Reporting" }],
            },
        ],
    },
    Later: {
        description: "🔭 Q1 2026+, Feb 2026 & beyond",
        feature: [
            {
                title: "Workflow Templates",
                description:
                    "Pre-built workflow templates for common testing scenarios and integrations.",
                tag: [{ value: "Templates" }],
            },
        ],
    },
    Released: {
        description: "✅ What has been released",
        feature: [
            {
                title: "SuperQA GitHub Action v1.0",
                description:
                    "Initial release with seamless GitHub Actions integration and workflow support.",
                tag: [{ value: "Action" }],
            },
        ],
    },
};
