module.exports = {

  prompts: false,

  templateData: {

    conf: {
      name: "QA Night",
      description: "Encontro do grupo Teste de Software-PE",
      topics: "Heartbleed e Insegurança da Informação",
      date: "21 de maio de 2014",
      venue: "ThoughtWorks",
      address: "Avenida Governador Agamenon Magalhães, 4779 - Ilha do Leite",
      city: "Recife",
      state: "PE"
    },

    callToAction: {
        text: "Inscrições abertas",
        link: "https://docs.google.com/forms/d/1IikWrWm7sJq7RfwtirrYQJymVyAT4E9y0MIzpdLbtCI/viewform"
    },

    site: {
      theme: "yellow-swan",
      url: "http://testedesoftwarepe.github.io/maio2014/",
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
        name: "Guilherme Motta",
        photo: "themes/yellow-swan/img/motta.jpg",
        bio: "Guilherme Motta foi pentester, atualmente aposentado no ramo da segurança da informação, eterno aprendiz de segurança da informação. Hoje trabalha na Klarna AB como Agile Coach.",
        company: "Klarna AB",
        link: {
          href: "https://twitter.com/gfcmotta",
          text: "@gfcmotta"
        },
        presentation: {
          title: "Heartbleed e Insegurança da Informação pt. 1",
          description: "Nesta palestra, vamos falar sobre o Heartbleed e demonstrar falhas de segurança em aplicações web",
          time: "19h30"
        }
      },

      {
        name: "Intervalo",
        time: "20h10"
      },

      {
        name: "Guilherme Motta",
        photo: "themes/yellow-swan/img/motta.jpg",
        bio: "Guilherme Motta foi pentester, atualmente aposentado no ramo da segurança da informação, eterno aprendiz de segurança da informação. Hoje trabalha na Klarna AB como Agile Coach.",
        company: "Klarna AB",
        link: {
          href: "https://twitter.com/gfcmotta",
          text: "@gfcmotta"
        },
        presentation: {
          title: "Heartbleed e Insegurança da Informação pt. 2",
          description: "Nesta palestra, vamos falar sobre o Heartbleed e demonstrar falhas de segurança em aplicações web",
          time: "19h30"
        }
      },

      {
        name: "Encerramento",
        time: "21h10"
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
      // {
      //   name: "Qualiti",
      //   logo:"themes/yellow-swan/img/qualiti-logo.jpeg",
      //   url: "http://www.qualiti.com.br/"
      // }
    ],

    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
