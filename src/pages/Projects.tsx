type Project = {
  id: string;
  title: string;
  description: string;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    id: "starter",
    title: "Starter Template",
    description: "This repo itself: Webpack + TS + Docker + CI + tests.",
  },
];

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <ul>
        {PROJECTS.map((p) => (
          <li key={p.id} style={{ marginBottom: 12 }}>
            <strong>{p.title}</strong>
            <div>{p.description}</div>
            {p.href ? (
              <div>
                <a href={p.href} target="_blank" rel="noreferrer">
                  Link
                </a>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
