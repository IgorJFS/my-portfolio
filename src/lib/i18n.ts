import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Hero Section
      hero: {
        greeting: "Hi, I'm",
        name: 'Igor',
        surname: 'Moraes',
        description:
          'A motivated Software developer that creates beautiful and functional websites. Specializing in full-stack web development, I build responsive and performant web applications.',
        cta: 'View My Work',
        scroll: 'Scroll',
      },
      // Navigation (for future use if needed)
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
      },
      // About Section
      about: {
        title: 'About',
        titleHighlight: 'Me',
        subtitle: 'Driven Software Developer',
        description1:
          'I am a committed Software developer with experience in building modern web applications. My journey in web development started with a curiosity to understand how games and websites work, and it has evolved into a full-fledged career.',
        description2:
          'I specialize in full-stack development, working with technologies like React, Typescript, Node.js, and various databases. I enjoy creating responsive, user-friendly, and performant web applications that solve real-world problems. And I also love to contribute to open-source projects and collaborate with other developers.',
        cta1: 'Get In Touch',
        cta2: 'Download Resume',
        cards: {
          webDev: {
            title: 'Web Development',
            description:
              'Creating responsive websites and web applications using modern frameworks',
          },
          openSource: {
            title: 'Open Source',
            description:
              'Contributing to open-source projects and collaborating with other developers',
          },
          projectMgmt: {
            title: 'UI/UX Design',
            description:
              'Creating intuitive and responsive digital experiences.',
          },
        },
      },
      // Skills Section
      skills: {
        title: 'My',
        titleHighlight: 'Skills',
        description:
          "I've developed a diverse skill set across programming languages, frameworks, databases, and creative tools. Here's a snapshot of my technical capabilities.",
        categories: {
          languages: 'Languages',
          frameworks: 'Frameworks',
          databases: 'Databases',
          tools: 'Tools & Others',
        },
      },
      // Projects Section
      projects: {
        title: 'Featured',
        titleHighlight: 'Work',
        description:
          'Here are some of my recent projects and Open-Source contributions. Each project was carefully crafted with attention to detail, performance, and user experience.',
        categories: {
          all: 'All',
          webDevelopment: 'Web Development',
          dataAnalysis: 'Data Analysis',
          openSource: 'Open Source',
        },
        cta: 'Check My GitHub',
        items: {
          pomodoro: {
            title: 'Chronos Pomodoro React',
            description:
              'A modern Pomodoro timer built with React + TypeScript + Vite. Focus cycles, short/long breaks, task history, theming and mobile responsive design.',
          },
          discordBot: {
            title: 'Discord-DevPosting bot Typescript',
            description:
              'A robust, modular Discord bot for fetching and posting IT/developer job listings from remoteOk API, with features for error reporting, message cleanup, scheduling, and slash command management.',
          },
          devHouse: {
            title: 'Tailwind Responsive DevHouse',
            description:
              'An embedded system project that integrates IoT devices with a focus on security. Its main purpose is to allow users to control lights remotely',
          },
          uberLayout: {
            title: 'Uber Website Layout Tailwind',
            description:
              'An Uber-like layout using Tailwind CSS and Javascript. The layout includes a header, a blog section, main content area, CTA section, and a footer. All with responsive design in mind. (Mobile-first approach)',
          },
          grokkingAlgorithms: {
            title: 'Typescript examples to Grokking Algorithms',
            description:
              'Contributed TypeScript examples for various algorithms and data structures to the famous Grokking Algorithms book repository.',
          },
          dataDashboard: {
            title: 'Data Analysis Dashboard',
            description:
              'Interactive dashboard analyzing global salaries across multiple roles in the data industry from 2020 to 2025. Built with Python, Streamlit, and Plotly for dynamic filtering and visualization.',
          },
          tindog: {
            title: 'Bootstrap-Tindog-Layout',
            description:
              "A small project simulating a Tinder-style app for dogs, built with Bootstrap 5.0. Fully mobile-responsive, it uses Bootstrap's grid system and components to display dog profiles in a playful and clean interface.",
          },
          yelpcamp: {
            title: 'Full-Stack YelpCamp Project (Project still under dev)',
            description:
              'A comprehensive full-stack web application that allows users to create, view, and review campgrounds. Built with Node.js, Express, TypeScript, EJS templating, Bootstrap for styling, and MongoDB for data storage. Features user authentication, CRUD operations for campgrounds and reviews, and a responsive design.',
          },
          heyputer: {
            title: 'Portuguese and Spanish Translation for HeyPuter',
            description:
              'Translated the README files for the HeyPuter project into Portuguese and Spanish, ensuring clear communication for a broader audience.',
          },
          seraui: {
            title: 'Bug Fixes for Sera UI React Library',
            description:
              'Identified and resolved various bugs within the Sera UI React library, improving overall usability.',
          },
          heroUI: {
            title: 'Refactoring for HeroUI React Library',
            description:
              'Contributed to HeroUI, a React UI library used by 73,000+ developers, by refactoring a piece of the React logic to fix a visual bug and improve interface consistency.',
          },
        },
      },
      // Contact Section
      contact: {
        title: 'Get In',
        titleHighlight: 'Touch',
        description:
          "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.",
        info: {
          title: 'Contact Information',
          email: 'Email',
          phone: 'Phone',
          location: 'Location',
          connect: 'Connect With Me',
        },
        form: {
          title: 'Send a Message',
          fields: {
            name: 'Your Name',
            email: 'Your Email',
            message: 'Your Message',
          },
          placeholders: {
            name: 'John Silverland',
            email: 'john@gmail.com',
            message: "Hello, I'd like to talk about...",
          },
          submit: 'Send Message',
          sending: 'Sending...',
        },
        messages: {
          success: 'Message sent successfully!',
          error: 'Failed to send message. Try again.',
        },
      },
      // Footer Section
      footer: {
        name: 'Igor Moraes Pereira',
        description:
          'A passionate Web developer building innovative digital solutions with a focus on performance and security.',
        copyright: 'All rights reserved.',
        scrollToTop: 'Scroll to top',
      },
      // 404 Page
      notFound: {
        title: '404',
        message: 'Ops... Page Not Found D:',
        description: 'No worries, you can always go back to the homepage.',
        cta: 'Back to Home',
      },
    },
  },
  pt: {
    translation: {
      // Hero Section
      hero: {
        greeting: 'Olá, eu sou o',
        name: 'Igor',
        surname: 'Moraes',
        description:
          'Um desenvolvedor de software motivado que cria sites elegantes e funcionais. Especializado em desenvolvimento full-stack, construo aplicações web responsivas e performáticas.',
        cta: 'Ver Meu Trabalho',
        scroll: 'Rolar',
      },
      // Navigation (for future use if needed)
      nav: {
        home: 'Início',
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Projetos',
        contact: 'Contato',
      },
      // About Section
      about: {
        title: 'Sobre',
        titleHighlight: 'Mim',
        subtitle: 'Desenvolvedor de Software Dedicado',
        description1:
          'Sou um desenvolvedor de software comprometido com experiência na construção de aplicações web modernas. Minha jornada no desenvolvimento web começou com a curiosidade de entender como jogos e sites funcionam, e evoluiu para uma carreira completa.',
        description2:
          'Sou especializado em desenvolvimento full-stack, trabalhando com tecnologias como React, Typescript, Node.js e vários bancos de dados. Gosto de criar aplicações web responsivas, amigáveis ao usuário e performáticas que resolvem problemas do mundo real. E também amo contribuir para projetos open-source e colaborar com outros desenvolvedores.',
        cta1: 'Entre em Contato',
        cta2: 'Baixar Currículo',
        cards: {
          webDev: {
            title: 'Desenvolvimento Web',
            description:
              'Criando sites responsivos e aplicações web usando frameworks modernos',
          },
          openSource: {
            title: 'Código Aberto',
            description:
              'Contribuindo para projetos open-source e colaborando com outros desenvolvedores',
          },
          projectMgmt: {
            title: 'UI/UX Design',
            description:
              'Criando experiências digitais intuitivas e responsivas.',
          },
        },
      },
      // Skills Section
      skills: {
        title: 'Minhas',
        titleHighlight: 'Habilidades',
        description:
          'Desenvolvi um conjunto diversificado de habilidades em linguagens de programação, frameworks, bancos de dados e ferramentas criativas. Aqui está um resumo das minhas capacidades técnicas.',
        categories: {
          languages: 'Linguagens',
          frameworks: 'Frameworks',
          databases: 'Bancos de Dados',
          tools: 'Ferramentas e Outros',
        },
      },
      // Projects Section
      projects: {
        title: 'Trabalhos',
        titleHighlight: 'Destacados',
        description:
          'Aqui estão alguns dos meus projetos recentes e contribuições Open-Source. Cada projeto foi cuidadosamente elaborado com atenção aos detalhes, performance e experiência do usuário.',
        categories: {
          all: 'Todos',
          webDevelopment: 'Desenvolvimento Web',
          dataAnalysis: 'Análise de Dados',
          openSource: 'Código Aberto',
        },
        cta: 'Ver Meu GitHub',
        items: {
          pomodoro: {
            title: 'Chronos Pomodoro React',
            description:
              'Um timer Pomodoro moderno construído com React + TypeScript + Vite. Ciclos de foco, pausas curtas/longas, histórico de tarefas, temas e design responsivo para mobile.',
          },
          discordBot: {
            title: 'Discord-DevPosting bot Typescript',
            description:
              'Um bot Discord robusto e modular para buscar e postar vagas de trabalho de TI/desenvolvedor da API remoteOk, com recursos para relatório de erros, limpeza de mensagens, agendamento e gerenciamento de comandos slash.',
          },
          devHouse: {
            title: 'Tailwind Responsive DevHouse',
            description:
              'Um projeto de sistema embarcado que integra dispositivos IoT com foco em segurança. Seu principal objetivo é permitir que os usuários controlem luzes remotamente',
          },
          uberLayout: {
            title: 'Layout Tailwind do Site Uber',
            description:
              'Um layout similar ao Uber usando Tailwind CSS e Javascript. O layout inclui um cabeçalho, seção de blog, área de conteúdo principal, seção CTA e um rodapé. Tudo com design responsivo em mente. (Abordagem mobile-first)',
          },
          grokkingAlgorithms: {
            title: 'Exemplos em Typescript pro Entendendo Algoritmos',
            description:
              'Contribuí com exemplos em TypeScript para vários algoritmos e estruturas de dados para o repositório do famoso livro Entendendo Algoritmos.',
          },
          dataDashboard: {
            title: 'Dashboard de Análise de Salários',
            description:
              'Dashboard interativo analisando salários globais em múltiplas funções na indústria de dados de 2020 a 2025. Construído com Python, Streamlit e Plotly para filtragem dinâmica e visualização.',
          },
          tindog: {
            title: 'Bootstrap-Tindog-Layout',
            description:
              'Um pequeno projeto simulando um app estilo Tinder para cães, construído com Bootstrap 5.0. Totalmente responsivo para mobile, usa o sistema de grid e componentes do Bootstrap para exibir perfis de cães em uma interface divertida e limpa.',
          },
          yelpcamp: {
            title: 'Projeto Full-Stack YelpCamp (Em desenvolvimento)',
            description:
              'Uma aplicação web full-stack abrangente que permite aos usuários criar, visualizar e avaliar campings. Construída com Node.js, Express, TypeScript, templating EJS, Bootstrap para estilização e MongoDB para armazenamento de dados. Recursos incluem autenticação de usuário, operações CRUD para campings e avaliações, e design responsivo.',
          },
          heyputer: {
            title: 'Tradução Português e Espanhol para o HeyPuter',
            description:
              'Traduzi os arquivos README do projeto HeyPuter para português e espanhol, garantindo comunicação clara para um público mais amplo.',
          },
          seraui: {
            title: 'Correções de Bugs para Biblioteca React Sera UI',
            description:
              'Identifiquei e resolvi vários bugs na biblioteca React Sera UI, melhorando a usabilidade geral.',
          },
          heroUI: {
            title: 'Refatoração para Biblioteca React HeroUI',
            description:
              'Contribuí para o HeroUI, uma biblioteca UI React usada por mais de 73.000 desenvolvedores, refatorando uma parte da lógica React para corrigir um bug visual e melhorar a consistência da interface.',
          },
        },
      },
      // Contact Section
      contact: {
        title: 'Entre em',
        titleHighlight: 'Contato',
        description:
          'Tem um projeto em mente ou quer colaborar? Fique à vontade para entrar em contato. Sempre estou aberto para discutir novas oportunidades.',
        info: {
          title: 'Informações de Contato',
          email: 'Email',
          phone: 'Telefone',
          location: 'Localização',
          connect: 'Conecte-se Comigo',
        },
        form: {
          title: 'Enviar uma Mensagem',
          fields: {
            name: 'Seu Nome',
            email: 'Seu Email',
            message: 'Sua Mensagem',
          },
          placeholders: {
            name: 'João Silva',
            email: 'joao@gmail.com',
            message: 'Olá, gostaria de conversar sobre...',
          },
          submit: 'Enviar Mensagem',
          sending: 'Enviando...',
        },
        messages: {
          success: 'Mensagem enviada com sucesso!',
          error: 'Falha ao enviar mensagem. Tente novamente.',
        },
      },
      // Footer Section
      footer: {
        name: 'Igor Moraes Pereira',
        description:
          'Um desenvolvedor Web apaixonado construindo soluções digitais inovadoras com foco em performance e segurança.',
        copyright: 'Todos os direitos reservados.',
        scrollToTop: 'Voltar ao topo',
      },
      // 404 Page
      notFound: {
        title: '404',
        message: 'Ops... Página Não Encontrada D:',
        description:
          'Não se preocupe, você sempre pode voltar para a página inicial.',
        cta: 'Voltar ao Início',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
    },
  });

export default i18n;
