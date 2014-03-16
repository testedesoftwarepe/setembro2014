module.exports = {

  prompts: false,

  templateData: {

    conf: {
      name: "QA Night",
      description: "Encontro do grupo Teste de Software-PE",     
      topics: "aprendizagem baseada em problemas(PBL) e automação de testes de software", 
      date: "19 de março de 2014",
      venue: "Local a definir",
      address: "Av. Governador Agamenon Magalhães, 4779",
      city: "Recife",
      state: "PE"
    },

    callToAction: {
        text: "Inscrições em breve!"
        //link: "https://docs.google.com/forms/d/130ODrcxuQJFCrW8dkcZETJ1m1gYgG9RosekAeSUrhQ4/viewform"
    },

    site: {
      theme: "yellow-swan",
      url: "http://testedesoftwarepe.github.io/marco2014/",
      googleanalytics: "UA-33656081-1"
    },

    sections: [
      'about',
      //'location',
      'speakers',
      'schedule',
      'partners'
      // 'contact'
    ],

    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      //sponsors: "Sponsors",
      partners: "Parceiros"
      //contact: "Contact"
    },

   schedule: [
      {
        name: "Check-in",
        time: "19h30"
      },
      {
        name: "Ana Claudia Monte",
        photo: "themes/yellow-swan/img/ana_claudia.jpg",
        bio: "Ana Claudia possui mestrado em Ciência da Computação pela UFPE na área de Gestão de Processos, graduada em Sistema de Informação pela Faculdade Pernambucana-FAPE. Atua na área de teste desde 2007 com planejamento, projeto, execução e controle de falhas de testes. Professora universitária da Faculdade Pernambucana-FAPE.Atualmente trabalha como Analista de Teste da empresa AGFA HealthCare desde 2010.",
        company: "AGFA",
        link: {
          text: "anaclaudia.monte@gmail.com"
        },
        presentation: {
          title: "Gestão de Processos Aplicada ao Ensino de Teste de Software.",
          description: "A busca por profissionais qualificados que possuem considerável experiência prática vem crescendo dia-a-dia. Mas, no processo de aprendizagem do ensino tradicional, o aluno é em grande parte um receptor de informações, incluindo conceitos e fundamentos teóricos, onde raramente é dada a prática na resolução de problemas. Portanto, com vista a minimizar este problema, o Ensino de Aprendizagem Baseada em Problemas (PBL) é sugerida.",
          time: "19h45"
        }
      },
      {
        name: "Christiano Gonçalves Guerra",
        photo: "themes/yellow-swan/img/christiano.jpeg",
        bio: "Formado em Ciência da Computação pelo Universidade Católica de Pernambuco em 2005, trabalhando com desenvolvimento de software em C# e Python de 2006 até 2009 quando passou para a área de teste com automação. Atualmente é engenheiro de teste do C.E.S.A.R.",
        company: "C.E.S.A.R",
        link: {
          href: "https://twitter.com/chrisgguerra",
          text: "@chrisgguerra"
        },
        presentation: {
          title: "Testes Funcionais com Selenium e Java",
          description: "Automação de testes funcionais utilizando o Selenium como framework de automação e Java como liguagem de programação.",
          time: "20:20"
        }
      }      
    ],

    partners: [
      {
        name: "ThoughWorks Recife",
        logo: "themes/yellow-swan/img/tw-logo.png",
        url: "http://www.thoughtworks.com/pt/"
      }
    ],

    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
