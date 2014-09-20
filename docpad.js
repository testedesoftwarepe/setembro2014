module.exports = {

  prompts: false,

  templateData: {

    conf: {
      name: "QA Night",
      description: "Encontro do grupo Teste de Software-PE",
      date: "Setembro de 2014",
      venue: "ThoughtWorks",
      address: "Av. Gov. Agamenon Magalhães, 4779 - Ilha do Leite",
      city: "Recife",
      state: "PE"
    },

    callToAction: {
        text: "Aguarde!"
        //Comente esse link para que o botão aponte para o próprio site.
        //,link: ""
    },
    /* Se o hangoutSet for true, será mostrada a seguinte mensagem:
      "Acesse o hangout por esse <link>"
      Se o hangoutSet for false, será usada a mensagem do hangoutNotSetMessage    
    */
    hangout:{
      hangoutSet: false,
      link:"https://plus.google.com/u/2/events/cdn2unjap1440853obc0pgsc750",
      hangoutNotSetMessage: ""
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
        name: "Tassia Spinelli",
        photo: "themes/yellow-swan/img/tassia.jpg",
        bio: "",
        company: "ThoughtWorks",
        link: {
          href: "",
          text: ""
      },

      presentation: {
        title: "",
        description: "",
        time: "19h15"
      },

      /*
      Activity é alguma dinâmica extra que poderá ocorrer. Como é uma atividade em grupo, não será mostrada nenhuma imagem. Caso queira remover, basta comentar a activity toda.
      */

      activity: {
        title: "Discussão sobre UX e testes",
        description: "Discussão aberta sobre testes e UX",
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
