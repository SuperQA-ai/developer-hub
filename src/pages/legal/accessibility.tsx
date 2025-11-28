import React from 'react';
import MDXContent from '@theme/MDXContent';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './accessibility.module.scss';


export default function AccessibilityPage() {
  // const { siteConfig: { baseUrl = "/" } = {} } = useDocusaurusContext();
  const { siteConfig } = useDocusaurusContext();

  const baseUrl = siteConfig.url;

  return (
    <div>
      <MDXContent>
        <Layout
          title="SuperQA Accessibility Conformance Report" // {`${siteConfig.title}`}
          description={`${siteConfig.tagline}`} // "Description will go into a meta tag in <head />"
        >
          <main className={`container ${styles.container}`}>
            <h1>SuperQA Accessibility</h1>
            <h2>Our Accessibility Philosophy</h2>
            <p>
              At SuperQA, we are committed to making our platform accessible to everyone, drawing
              inspiration from Universal Design. Universal Design is a philosophy that aims to
              create inclusive products and systems, regardless of abilities or disabilities,
              ensuring equal access and opportunity for all.
            </p>
            <p>
              While we are still early in our accessibility journey, we are dedicated to achieving
              this goal through the following areas:
            </p>
            <div className={styles.goals}>
              <div className={styles.modules}>
                <div>
                  <img
                    src={`/img/accessibility/accessibility_img_1.svg`}
                    alt="Making all modules & features accessible"
                  />
                  <h4>Making all modules & features accessible</h4>
                  <p>
                    We strive to make every SuperQA module and feature easy to access and use for
                    everyone.
                  </p>
                </div>
              </div>
              <div className={styles.modules}>
                <div>
                  <img
                    src={`/img/accessibility/accessibility_img_2.svg`}
                    alt="Accessibility at the core of the business"
                  />
                  <h4>Accessibility at the core of the business</h4>
                  <p>
                    We prioritize accessibility at the heart of our business, ensuring it is an
                    integral part of our values and operations.
                  </p>
                </div>
              </div>
              <div className={styles.modules}>
                <div>
                  <img
                    src={`/img/accessibility/accessibility_img_3.svg`}
                    alt="Embracing an accessibility mindset"
                  />
                  <h4>Embracing an accessibility mindset</h4>
                  <p>
                    We integrate our accessibility philosophy into the daily work of every SuperQA
                    employee, fostering a culture of inclusivity.
                  </p>
                </div>
              </div>
            </div>
            <p>
              Through these efforts, our aim is to meet the AA accessibility standard. If you
              encounter any accessibility issues or need further assistance with our platform, please
              don't hesitate to reach out to us at accessibility@superqa.ai.
            </p>
            <p>
              You can find our latest VPAT reports for each module and the platform using the links
              below:
            </p>
            <ul>
              <li>
                <a href={`/doc/superqa-platform-vpat.pdf`} className={styles.link} target="_blank">
                  Platform VPAT Report
                </a>
              </li>
              <li>
                <a href={`/doc/superqa-cd-vpat-report.pdf`} className={styles.link} target="_blank">
                  CD VPAT Report
                </a>
              </li>
              <li>
                <a href={`/doc/superqa-ci-vpat-report.pdf`} className={styles.link} target="_blank">
                  CI VPAT Report
                </a>
              </li>
              <li>
                <a
                  href={`/doc/superqa-dbdevops-vpat-report.pdf`}
                  className={styles.link}
                  target="_blank"
                >
                  DB Devops VPAT Report
                </a>
              </li>
              <li>
                <a
                  href={`/doc/superqa-sre-vpat-report.pdf`}
                  className={styles.link}
                  target="_blank"
                >
                  AI SRE VPAT Report
                </a>
              </li>
              <li>
                <a
                  href={`/doc/superqa-fme-vpat-report.pdf`}
                  className={styles.link}
                  target="_blank"
                >
                  FME VPAT Report
                </a>
              </li>
              <li>
                <a
                  href={`/doc/superqa-idp-vpat-report.pdf`}
                  className={styles.link}
                  target="_blank"
                >
                  IDP VPAT Report
                </a>
              </li>
              <li>
                <a
                  href={`/doc/superqa-ccm-vpat-report.pdf`}
                  className={styles.link}
                  target="_blank"
                >
                  CCM VPAT Report
                </a>
              </li>
              <li>
                <a
                  href={`/doc/superqa-sei-vpat-report.pdf`}
                  className={styles.link}
                  target="_blank"
                >
                  SEI VPAT Report
                </a>
              </li>
              <li>
                <a href={`/doc/superqa-ar-vpat-report.pdf`} className={styles.link} target="_blank">
                  AR VPAT Report
                </a>
              </li>
              <li>
                <a href={`/doc/superqa-ce-vpat-report.pdf`} className={styles.link} target="_blank">
                  CE VPAT Report
                </a>
              </li>
              <li>
                <a
                  href={`/doc/superqa-iacm-vpat-report.pdf`}
                  className={styles.link}
                  target="_blank"
                >
                  IaCM VPAT Report
                </a>
              </li>
              <li>
                <a
                  href={`/doc/superqa-sto-vpat-report.pdf`}
                  className={styles.link}
                  target="_blank"
                >
                  STO VPAT Report
                </a>
              </li>
              <li>
                <a
                  href={`/doc/superqa-scs-vpat-report.pdf`}
                  className={styles.link}
                  target="_blank"
                >
                  SCS VPAT Report
                </a>
              </li>
              <li>
                <a
                  href={`/doc/superqa-ata-vpat-report.pdf`}
                  className={styles.link}
                  target="_blank"
                >
                  ATA VPAT Report
                </a>
              </li>
            </ul>
          </main>
        </Layout>
      </MDXContent>
    </div>
  );
}
