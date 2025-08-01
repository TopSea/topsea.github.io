// const { t } = useI18n();
// import {  } from "./i18n/locales";

export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Alive',
      description: 'Bring your favorite character to Alive.',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'Alive Docs',
      showTitle: true,
      darkModeToggle: true,
      languageSwitcher: {
        enable: true,
        triggerType: 'icon',
        dropdownType: 'select',
      },
      logo: {
        light: '/alive/app-icon-rounded.png',
        dark: '/alive/app-icon-rounded.png',
      },
      nav: [],
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/TopSea/Alive",
          target: "_blank",
        },
        {
          icon: "ant-design:bilibili-outlined",
          to: "https://space.bilibili.com/307219768",
          target: "_blank",
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
      folderStyle: "tree",
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'FOOTER_CREDIT',
      links: [
        {
          icon: 'lucide:heart',
          title: 'Sponsor Me',
          to: 'https://afdian.com/',
          target: '_blank',
        },
        {
          icon: 'lucide:github',
          to: 'https://github.com/TopSea/Alive',
          target: '_blank',
        }
      ],
    },
    toc: {
      enable: true,
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/TopSea/Alive',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/TopSea/Alive/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});