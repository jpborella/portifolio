export const portfolioData = {
  header: {
    navLinks: [
      { name: "Home", href: "/" },
      { name: "Sobre", href: "/sobre" },
      { name: "Habilidades", href: "/habilidades" },
      { name: "Projetos", href: "/projetos" },
      { name: "Contato", href: "/contato" },
    ],
  },
  hero: {
    fullName: "João Paulo Lemes Borella",
    title: "Desenvolvedor Web Júnior",
    subtitle: "Desenvolvedor Web Frontend, futuro Fullstack em formação.",
    profileImage: "/images/perfil-png.png",
    actionButtons: [
      { text: "Projetos", href: "/projetos", primary: true },
      { text: "Contato", href: "/contato", primary: false },
    ],
  },
  about: {
    bio: "Sou um desenvolvedor web júnior apaixonado por tecnologia, aprendizado contínuo e desafios que envolvem criatividade e lógica. Focando sempre em trazer soluções eficientes, código limpo e interfaces modernas em meus projetos e estudos. Atualmente, estou em formação fullstack, com o frontend concluído e backend em andamento. Valorizo o trabalho em equipe, a troca de experiências e a oportunidade de contribuir para projetos reais enquanto evoluo tecnicamente. Busco minha primeira oportunidade profissional para crescer junto a uma equipe colaborativa, aplicando meus conhecimentos e desenvolvendo ainda mais minhas habilidades na criação de experiências positivas para o usuário.",
    personalInfo: [
      {
        label: "E-mail",
        value: "jpborella1@gmail.com",
        href: "mailto:jpborella1@gmail.com",
        icon: "FaEnvelope",
      },
      {
        label: "WhatsApp",
        value: "(43) 99177-2574",
        href: "https://wa.me/5543991772574",
        icon: "FaWhatsapp",
      },
      {
        label: "LinkedIn",
        value: "João Paulo L. Borella",
        href: "https://www.linkedin.com/in/jo%C3%A3o-paulo-l-borella-738a56139/",
        icon: "FaLinkedin",
      },
      {
        label: "GitHub",
        value: "jpborella",
        href: "https://github.com/jpborella",
        icon: "FaGithub",
      },
    ],
  },
  skills: {
    categories: [
      {
        name: "Frontend",
        items: [
          { name: "HTML5", icon: "FaHtml5" },
          { name: "CSS3", icon: "FaCss3Alt" },
          { name: "JavaScript", icon: "FaJs" },
          { name: "React.js", icon: "FaReact" },
          { name: "TypeScript", icon: "SiTypescript" },
          { name: "Tailwind CSS", icon: "SiTailwindcss" },
        ],
      },
      {
        name: "Ferramentas",
        items: [
          { name: "Jest", icon: "SiJest" },
          { name: "Git/GitHub", icon: "FaGitAlt" },
          { name: "Figma (básico)", icon: "FaFigma" },
        ],
      },
      {
        name: "Metodologias",
        items: [
          { name: "Responsive Design", icon: "FaMobileAlt" },
          { name: "Component Architecture", icon: "FaCubes" },
          { name: "Clean Code", icon: "FaCode" },
          { name: "APIs", icon: "FaServer" },
        ],
      },
    ],
  },
  projects: [
    {
      title: "Landing Page para Apresentação Pessoal",
      summary:
        "Página de apresentação desenvolvida com foco em clareza, modernidade e alto potencial de conversão. O layout responsivo garante ótima experiência em qualquer dispositivo, enquanto o design minimalista valoriza informações pessoais e profissionais essenciais. Ideal para destacar projetos pessoais, com chamadas para ação estratégicas para impulsionar resultados.",
      link: "https://vendedores.teknorte.com.br/ana-paula/",
      image: "/images/project-landing-page.png",
    },
    {
      title: "Aplicativo To-Do Simplificado",
      summary:
        "Um aplicativo de lista de tarefas simples e funcional, desenvolvido para organizar atividades diárias de forma ágil e prática. Com uma interface intuitiva, o app permite adicionar, completar e gerenciar tarefas facilmente, ideal para aumentar a produtividade pessoal ou em pequenos times.",
      link: "https://todo-xi-liart.vercel.app/",
      image: "/images/project-todo-app.png",
    },
  ],
  contact: {
    buttons: [
      { text: "Currículo", 
        href: "/assets/curriculo.pdf", 
        icon: "FaFileAlt" 
      },
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/jpborella/",
        icon: "FaLinkedin",
      },
      {
        text: "WhatsApp",
        href: "https://wa.me/5543991772574",
        icon: "FaWhatsapp",
      },
      {
        text: "E-mail",
        href: "mailto:jpborella1@gmail.com",
        icon: "FaEnvelope",
      },
      {
        text: "GitHub",
        href: "https://github.com/jpborella",
        icon: "FaGithub",
      },
    ],
  },
  footer: {
    copyright: "© 2025 João Paulo Lemes Borella.",
  },
};
