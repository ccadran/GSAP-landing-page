import React from "react";
import styles from "./style.module.css";
import { useState } from "react";
import Image from "next/image";

export default function index() {
  const [selectedProject, setSelectedProject] = useState(0);
  const projects = [
    {
      title: "Salar de Atacama",
      src: "salar_de_atacama.jpg",
    },
    {
      title: "Valle de la luna",
      src: "valle_de_la_muerte.jpeg",
    },
    {
      title: "Miscanti Lake",
      src: "miscani_lake.jpeg",
    },
    {
      title: "Miniques Lagoons",
      src: "miniques_lagoon.jpg",
    },
  ];
  return (
    <div className={styles.projects}>
      <div className={styles.projectDescription}>
        <div className={styles.imageContainer}>
          <Image
            src={`/images/${projects[selectedProject].src}`}
            fill={true}
            alt="project image"
            priority={true}
          />
        </div>
        <div className={styles.column}>
          <p>
            The flora is characterized by the presence of high elevation
            wetland, as well as yellow straw, broom sedge, tola de agua and tola
            amaia.
          </p>
        </div>
        <div className={styles.column}>
          <p>
            Some, like the southern viscacha, vicuña and Darwins rhea, are
            classified as endangered species. Others, such as Andean goose,
            horned coot, Andean gull, puna tinamou and the three flamingo
            species inhabiting in Chile (Andean flamingo, Chilean flamingo, and
            Jamess flamingo) are considered vulnerable.
          </p>
        </div>
      </div>
    </div>
  );
}
