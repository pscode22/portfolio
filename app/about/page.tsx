import { siteConfig } from "@/lib/site";

export default function AboutPage() {
  return (
    <section className="prose dark:prose-invert max-w-2xl mx-auto py-10">
      <h1>About Me</h1>
      <p>
        Hi, I'm <strong>{siteConfig.name}</strong>, a passionate {siteConfig.role}.
        I specialize in building modern, scalable, and user-friendly web
        applications using TypeScript, React, Next.js, and Node.js.
      </p>
      <p>
        I enjoy solving complex problems, designing efficient systems, and
        continuously learning new technologies. My goal is to create impactful
        software that improves people’s lives and businesses.
      </p>
    </section>
  );
}
