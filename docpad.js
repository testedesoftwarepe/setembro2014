module.exports = {

  prompts: false,

  templateData: {

    conf: {
      name: "QA Night",
      description: "Encontro do grupo Teste de Software-PE",
      date: "19 de fevereiro de 2014",
      venue: "na ThoughtWorks",
      address: "Av. Governador Agamenon Magalhães, 4779",
      city: "Recife",
      state: "PE"
    },

    callToAction: {
        text: "Inscreva-se",
        link: "https://docs.google.com/forms/d/130ODrcxuQJFCrW8dkcZETJ1m1gYgG9RosekAeSUrhQ4/viewform"
    },

    site: {
      theme: "yellow-swan",
      url: "http://testedesoftwarepe.github.io/fevereiro2014/",
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
      partners: "Parceiros"
      //contact: "Contact"
    },

    schedule: [
      {
        name: "Check-in",
        time: "19h00"
      },
      {
        name: "Taíse Dias",
        photo: "themes/yellow-swan/img/taise.png",
        bio: "Taíse é formada em Ciência da Computação pela UFPE, e trabalha com criação de software desde 2006, focando em qualidade e automação de testes. Atualmente, é consultora em Qualidade de Software na ThoughtWorks.",
        company: "ThoughtWorks",
        link: {
          href: "http://twitter.com/taisedias",
          text: "@taisedias"
        },
        presentation: {
          title: "Cucumber",
          description: "Introdução sobre Cucumber, uma ferramenta baseada em Behavior Driven Development (BDD).",
          time: "19h15"
        }
      },
      {
        name: "Leandro dos Anjos",
        photo: "themes/yellow-swan/img/leandro.jpg",
        bio: "Leandro possui formação em Análise e Desenvolvimento de Software e trabalha com testes de software desde 2005. Atualmente, trabalha como Analista de Testes na Pitang.",
        company: "Pitang Consultoria e Sistemas",
        link: {
          text: "leoanjossantos@gmail.com"
        },
        presentation: {
          title: "Testes Funcionais com Selenium e Java",
          description: "Automação de testes funcionais utilizando o Selenium como framework de automação e Java como liguagem de programação.",
          time: "19h45"
        }
      },
      {
        name: "Rafael Lima",
        photo: "themes/yellow-swan/img/rafael.JPG",
        bio: "Rafael é Bacharel em Ciências da Computação, trabalha na área de TI desde 2003: programou em Delphi e PHP e nos últimos 5 anos tem focado em automação de testes. Atualmente é consultor em Qualidade de Software na ThoughtWorks.",
        company: "ThoughtWorks",
        link: {
          text: "rafalima07@gmail.com"
        },
        presentation: {
          title: "Testes Funcionais com Watir e Ruby",
          description: "Automação de testes funcionais utilizando o Watir como framework de automação e Ruby como liguagem de programação.",
          time: "20h30"
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
