import { Person, WithContext } from "schema-dts";

export const siteConfig = {
  name: "Praveen Chaudhary",
  title: "Praveen | Portfolio",
  description:
    "Praveen Chaudhary is a full-stack developer with 3 years of experience.",
  url: "https://praveen-portfolio.app",
  ogImage: "https://praveen-portfolio.app/favicon.ico",
  imgAlt: "portfolio-icon",
  links: {
    github: "https://github.com/pscode22",
    linkedin: "https://www.linkedin.com/in/praveen-chaudhary-87493b23a",
    // twitter: "https://twitter.com/praveenchaudhary",
  },
};

export function getPersonSchema(): WithContext<Person> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Full-Stack Developer",
    description: siteConfig.description,
    url: siteConfig.url,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      //   siteConfig.links.twitter,
    ],
  };
}
