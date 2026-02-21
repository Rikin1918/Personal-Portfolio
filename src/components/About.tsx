

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg mb-4">
              I am an enthusiastic software developer who recently completed a
              diploma in Mobile Application Design and Development at Algonquin
              College (Sep 2023 – Apr 2025). Concentrating on creating robust
              and scalable software solutions, I combine creativity with
              technical skills to address complex challenges.
            </p>
            <p className="text-lg mb-4">
              I have experience in full-stack development, object-oriented
              programming, cloud applications, distributed systems, and secure
              API integration. I excel in collaborative settings, applying my
              technical skills and problem-solving abilities to develop
              impactful applications.
            </p>
            <p className="text-lg">
              In order to provide innovative solutions that satisfy contemporary
              development standards, I'm continuously honing my craft and
              keeping up with emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
