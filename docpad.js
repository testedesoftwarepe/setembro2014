module.exports = {

  prompts: false,

  templateData: {

    conf: {
      name: "QA Night",
      description: "Encontro do grupo Teste de Software-PE",
      topics: "Cucumber",
      date: "16 de Junho de 2014",
      venue: "Thoughtworks e Hangout on Air",
      address: "Av. Governador Agamenon Magalhães, 4779. Recife, PE ",
      city: "Recife",
      state: "PE"
    },

    callToAction: {
        text: "Inscrições abertas",
        link: ""
    },

    site: {
      theme: "yellow-swan",
      url: "http://testedesoftwarepe.github.io/junho2014/",
      googleanalytics: "UA-33656081-1"
    },

    sections: [
      'about',
      // 'location',
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
        name: "Rafael Lima e Taise Silva",
        photo: "themes/yellow-swan/img/Rafael.jpg", "themes/yellow-swan/img/taise.png"
        bio: "Taíse é formada em Ciência da Computação pela UFPE, e trabalha com criação de software desde 2006, focando em qualidade e automação de testes. Atualmente, é consultora em Qualidade de Software na ThoughtWorks.",
        company: "ThoughtWorks",
        link: {
          href: "http://twitter.com/taisedias",
          text: "rafalima07@gmail.com"
        },
        presentation: {
          title: "Heartbleed e Insegurança da Informação",
          description: "Nesta palestra, vamos falar sobre o Heartbleed e demonstrar falhas de segurança em aplicações web",
          time: "19h15"
        }
      },

      {
        name: "Encerramento",
        time: "21h00"
      }

    ],

    partners: [
      {
        name: "ThoughWorks Recife",
        logo: "themes/yellow-swan/img/tw-logo.png",
        url: "http://www.thoughtworks.com/pt/"
      },
      /*{
        name: "UNINASSAU",
        logo:"themes/yellow-swan/img/uninassau-logo.jpeg",
        url: "http://www.mauriciodenassau.edu.br/"
      },*/
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
