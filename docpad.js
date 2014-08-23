module.exports = {

  prompts: false,

  templateData: {

    conf: {
      name: "QA Night",
      description: "Encontro do grupo Teste de Software-PE",
      date: "27 de Agosto de 2014",
      venue: "ThoughtWorks e Hangout on Air",
      address: "Av. Gov. Agamenon Magalhães, 4779 - Ilha do Leite",
      city: "Recife",
      state: "PE"
    },

    callToAction: {
        text: "Inscrições abertas"
        //Comente esse link para que o botão aponte para o próprio site.
        ,link: "https://docs.google.com/forms/d/1YB_comM_6X7x6lZVVMUncA7KJEK8kR9UufEcWA57y_Y/viewform"
    },

    hangout:{
      hangoutSet: false,
      link:"https://plus.google.com/u/1/events/cm2q6g8adljfr0j7k0sihrk3pcg",
      hangoutNotSetMessage: "link para hangout em breve."
    },

    site: {
      theme: "yellow-swan",
      url: "http://testedesoftwarepe.github.io/agosto2014/",
      googleanalytics: "UA-53198502-2"
    },

    sections: [
      'about',
     'location',
      'speakers',
      'schedule',
      'events',
      'partners'
      // 'contact',
    ],

    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      partners: "Parceiros",
      events: "Próximos Eventos"
      //sponsors: "Sponsors",
      //contact: "Contact"
    },

   schedule: [
      {
        name: "Check-in",
        time: "19h00"
      },

      {
        name: "Rafael Lima",
        photo: "themes/yellow-swan/img/rafael.JPG",
        bio: "Rafael é Bacharel em Ciências da Computação, trabalha na área de TI desde 2003: programou em Delphi, em PHP, tem experiência com front-end e nos últimos 5 anos tem focado em automação de testes. Atualmente é consultor em Qualidade de Software na ThoughtWorks.",
        company: "ThoughtWorks",
        link: {
          href: "rafalima07@gmail.com",
          text: "rafalima07@gmail.com"
        },
        presentation: {
          title: "Por que usar o padrão Page Object?",
          description: "Nesta palestra, vamos falar sobre princípios, processos e gerenciamento de Teste de Software",
          time: "19h15"
        }
        /*
        Activity é alguma dinâmica extra que poderá ocorrer. Como é uma atividade em grupo, não será mostrada nenhuma imagem. Caso queira remover, basta comentar a activity toda.
        */
        ,activity: {
          title: "Discussão sobre testes",
          description: "Discussão aberta sobre testes. Essa discussão não será feita pelo hangout.",
          time: "20h00"
        }
     },

      {
        name: "Encerramento",
        time: "21h00"
      }

    ],

    events: {
      form: "https://docs.google.com/forms/d/1ZmixuluQYqfWF06FG6YC82LDDz53N4-EjNXJrBFXyes/viewform"

    },

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
