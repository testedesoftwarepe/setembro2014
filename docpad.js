module.exports = {

  prompts: false,

  templateData: {

    conf: {
      name: "QA Night",
      description: "Encontro do grupo Teste de Software-PE",     
      topics: "Specflow + Coypu = BDD em .NET e Testers Técnicos", 
      date: "16 de abril de 2014",
      venue: "na Qualiti",
      address: "Av. Marquês de Olinda, 126 - 4º andar - Bairro do Recife",
      city: "Recife",
      state: "PE"
    },

    callToAction: {
        text: "Inscrição",
        link: "https://docs.google.com/forms/d/1fI3mGSFs0phtxbq8ePX7yp0nsPelHjncuIqGEpU0-rY/viewform"
    },

    site: {
      theme: "yellow-swan",
      url: "http://testedesoftwarepe.github.io/abril2014/",
      googleanalytics: "UA-33656081-1"
    },

    sections: [
      'about',
      'location',
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
      partners: "Parceiros",
      //contact: "Contact"
    },

   schedule: [
      {
        name: "Check-in",
        time: "19h15"
      }, 

      {
        name: "Diego Asfora",
        photo: "themes/yellow-swan/img/asfora.jpg",
        bio: "Trabalha a mais de 7 anos com Agile em diversos projetos e em várias empresas tendo inclusive durante esse período feito mestrado na área de priorização de Requisitos Ágeis. Trabalha a 10 anos com testes de software. Palestrante no Scrum Gathering Brazil em São Paulo 2009.",
        company: "ThoughWorks",
        link: {
          text: "@diegoasfora"
        },
        presentation: {
          title: "Testers Técnicos",
          description: "Introdução qual o papel de um QA Ágil",
          time: "19:30"
        }
      },

      {
        name: "Coffee Break",
        time: "20h"
      },

      {
        name: "Henrique Borges",
        photo: "themes/yellow-swan/img/hbas.jpg",
        bio: "Henrique é mestre em Ciência da Computação e MBA em Gestão de Pessoas. Foi sócio fundador da FAST Soluções, onde também trabalhou como desenvolvedor, tester, front-end e gerente de projetos. Atualmente, é Eng. de Sistemas no CESAR.",
        company: "CESAR",
        link: {
          href: "",
          text: "@henriqueHbas"
        },
        presentation: {
          title: "Specflow + Coypu = BDD em .NET",
          description: " Uma apresentação no estilo \"live coding\", utilizando Specflow, Gherkin, Coypu, Selenium e NUnit em um problema simples.",
          time: "20h10"
        }
      }    
    ],

    partners: [
      {
        name: "ThoughWorks Recife",
        logo: "themes/yellow-swan/img/tw-logo.png",
        url: "http://www.thoughtworks.com/pt/"
      },
      {
        name: "UNINASSAU",
        logo:"themes/yellow-swan/img/uninassau-logo.jpeg",
        url: "http://www.mauriciodenassau.edu.br/"
      },
      {
        name: "Qualiti",
        logo:"themes/yellow-swan/img/qualiti-logo.jpeg",
        url: "http://www.qualiti.com.br/"
      }
    ],

    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
