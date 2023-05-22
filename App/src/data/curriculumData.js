const CURRICULUM_DATA = {
  total_credits: 165,

  training_areas: {
    basicSciences: {
      name: "Ciencias básicas",
      credits: 35,
      color: "#bdd7ee",
      colorDM: "#bdd7ee"
    },
    basicEngineeringSciences: {
      name: "Ciencias básicas de ingeniería",
      credits: 9,
      color: "#c4d79b",
      colorDM: "#c4d79b",
    },
    appliedEngineering: {
      name: "Ingeniería aplicada",
      credits: 82,
      color: "#f4b084",
      colorDM: "#f4b084"
    },
    economicAdministrative: {
      name: "Económico administrativa",
      credits: 6,
      color: "#a9d08e",
      colorDM: "#a9d08e"
    },
    socioHumanistic: {
      name: "Socio humanística y temas complejos",
      credits: 53,
      color: "#ffe699",
      colorDM: "#ffe699"
    }
  },
  components: {
    basis: {
      name: "Básico o de fundamentación",
      credits: 51,
      symbol: "B",
      color: "#e2efda",
      colorDM: "#e2efda"
    },
    discipline: {
      name: "Disciplinar o profesional",
      credits: 81,
      symbol: "C",
      color: "#ededed",
      colorDM: "#ededed"
    },
    free: {
      name: "Libre elección",
      credits: 33,
      symbol: "L",
      color: "#ddebf7",
      colorDM: "#ddebf7"
    },
    leveling: {
      name: "Nivelación - Mate. Bás., Lecto-Escrit. e Inglés",
      credits: 20,
      symbol: "P",
      color: "#b1a0c7",
      colorDM: "#b1a0c7"
    }
  },
  groups: {
    basis: {
      math: {
        name: "Matemáticas",
        credits: 16,
        color: "#ccffff",
        colorDM: "#ccffff"
      },
      probability: {
        name: "Probabilidad y estadística",
        credits: 3,
        color: "#95b3d7",
        colorDM: "#95b3d7"
      },
      computerScience: {
        name: "Ciencias de la computación",
        credits: 18,
        color: "#cc0",
        colorDM: "#cc0"
      },
      physics: {
        name: "Física",
        credits: 8,
        color: "#ff8686",
        colorDM: "#ff8686"
      },
      economicSciences: {
        name: "Ciencias económicas y administrativas",
        credits: 6,
        color: "#a9d08e",
        colorDM: "#a9d08e"
      },
    },
    discipline: {
      softwareMethods: {
        name: "Métodos y tecnologías de software",
        credits: 21,
        color: "#e4dfec",
        colorDM: "#e4dfec"
      },
      computerInfrastructure: {
        name: "Infraestructura informática de comunicaciones y de información",
        credits: 30,
        color: "#ff6",
        colorDM: "#ff6"
      },
      visualComputing: {
        name: "Computación visual",
        credits: 3,
        color: "#9ca",
        colorDM: "#9ca"
      },
      smartSystems: {
        name: "Sistemas inteligentes",
        credits: 3,
        color: "#b7dee8",
        colorDM: "#b7dee8"
      },
      modelSystems: {
        name: "Sistemas Modelos, Opt. y simul.",
        credits: 12,
        color: "#99cc00",
        colorDM: "#99cc00"
      },
      professionalContext: {
        name: "Contexto Prof. y proyectos de ingeniería",
        credits: 6,
        color: "#99ccff",
        colorDM: "#99ccff"
      },
      degreeWork: {
        name: "Trabajo de grado",
        credits: 6,
        color: "#d9e1f2",
        colorDM: "#d9e1f2"
      }
    },
    free: {
      free: {
        name: "Libre elección",
        credits: 33,
        color: "#daeef3",
        colorDM: "#daeef3"
      }
    }
  } 
}

export default CURRICULUM_DATA;