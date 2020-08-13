import React from "react";
import project from "../../project.json";
import Wrapper from "../Wrapper";
import Project from "../Project";
import "../Portfolio/style.css"

function Portfolio() {
  return (
    <Wrapper>
    <Project
        title={project[0].title}
        image={project[0].image}
        deployed={project[0].deployed}
        repository={project[0].repository}
    />
    <Project
        title={project[1].title}
        image={project[1].image}
        deployed={project[1].deployed}
        repository={project[1].repository}
    />
    <Project
        title={project[2].title}
        image={project[2].image}
        deployed={project[2].deployed}
        repository={project[2].repository}
    />
    <Project
        title={project[3].title}
        image={project[3].image}
        deployed={project[3].deployed}
        repository={project[3].repository}
    />
    <Project
        title={project[4].title}
        image={project[4].image}
        deployed={project[4].deployed}
        repository={project[4].repository}
    />
    <Project
        title={project[5].title}
        image={project[5].image}
        deployed={project[5].deployed}
        repository={project[5].repository}
    />
    <Project
        title={project[6].title}
        image={project[6].image}
        deployed={project[6].deployed}
        repository={project[6].repository}
    />
    <Project
        title={project[7].title}
        image={project[7].image}
        deployed={project[7].deployed}
        repository={project[7].repository}
    />
    <Project
        title={project[8].title}
        image={project[8].image}
        deployed={project[8].deployed}
        repository={project[8].repository}
    />
    </Wrapper>
  );
}

export default Portfolio;