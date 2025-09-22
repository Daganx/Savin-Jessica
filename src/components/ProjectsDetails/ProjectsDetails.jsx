import { useParams } from "react-router-dom";
import projects from "../../data/projects";
import './projectsDetails.css'

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <h2>Projet introuvable</h2>;
  }

  return (
    <section className="project-details">
      <h1>{project.title}</h1>
      <img src={project.images[0]} alt={project.title} />
      <p>{project.description}</p>
      <ul>
        <li>Prestation: {project.prestation}</li>
        <li>Client: {project.customer}</li>
        <li>Année: {project.year}</li>
        <li>Prix: {project.price}</li>
        <li>Durée: {project.time}</li>
      </ul>
    </section>
  );
}
