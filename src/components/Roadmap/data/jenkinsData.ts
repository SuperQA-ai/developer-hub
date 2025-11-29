import { Horizon } from "./roadmapData";

export const jenkinsData: Horizon = {
    Now: {
        description: "🚧 Q3 2025, Aug 2025 - Oct 2025",
        feature: [
            {
                title: "Enhanced Allure Report Integration",
                description:
                    "Improved Allure report generation with better attachment handling and real-time updates.",
                tag: [{ value: "Reporting" }],
            },
        ],
    },
    Next: {
        description: "🪄 Q4 2025, Nov 2025 - Jan 2026",
        feature: [
            {
                title: "Multi-Environment Test Execution",
                description:
                    "Support for running tests across multiple environments simultaneously with consolidated reporting.",
                tag: [{ value: "Testing" }],
            },
        ],
    },
    Later: {
        description: "🔭 Q1 2026+, Feb 2026 & beyond",
        feature: [
            {
                title: "Advanced Pipeline Analytics",
                description:
                    "Detailed analytics and insights for test execution patterns and performance metrics.",
                tag: [{ value: "Analytics" }],
            },
        ],
    },
    Released: {
        description: "✅ What has been released",
        feature: [
            {
                title: "SuperQA Jenkins Plugin v1.0",
                description:
                    "Initial release with parameterized builds, dynamic dropdowns, and Allure report integration.",
                tag: [{ value: "Plugin" }],
            },
        ],
    },
};
