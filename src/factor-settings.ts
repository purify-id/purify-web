export default {
  /**
   * Add custom font to app
   */
  headTags: {
    font:
      '<link href="https://fonts.googleapis.com/css?family=Maven+Pro:400,600,700&display=swap" rel="stylesheet" />',
  },
  /**
   * Tailwind CSS Config
   */
  tailwind: {
    config: require("./tailwind.config.js"),
    directives: require("./tailwind.css"),
  },
  metatags: {
    defaultTitle: "Purify",
    titleTemplate: "%s - Utilizing Technology for Your Business",
  },

  /**
   * Global Theme Settings
   */
  site: {
    components: {
      header: (): Promise<any> => import("./header.vue"),
      footer: (): Promise<any> => import("./footer.vue"),
    },
    logo: require("./img/logo-purify.svg"),
    logoInverse: require("./img/logo-purify-inverse.svg"),
    nav: [
      {
        _item: "home",
        path: "/",
        name: "Home",
      },
      {
        _item: "solutions",
        path: "/#solutions",
        name: "Solutions",
      },
      {
        _item: "pricing",
        path: "/pricing",
        name: "Pricing",
      },
      {
        _item: "about",
        path: "/about",
        name: "About",
      },
      {
        _item: "blog",
        path: "/blog",
        name: "Blog",
      },
      {
        _item: "contact",
        path: "/contact",
        name: "Contact",
      },
      {
        _item: "dashboard",
        path: "/dashboard",
        name: "Dashboard &rarr;",
      },
    ],
    /**
     * Copy for the call to action on the home page, pricing page, and about page.
     */
    cta: {
      title: "Deliver best experience with us",
      content: `Your customer worth getting their best experience. Get your best services with our industry leading expert <i class="fas fa-rocket"></i>`,
      buttons: [
        {
          _item: "contact",
          link: "/contact",
          text: "Free Consultation",
          classes: "btn bg-gray-100 rounded text-purple-500 hover:bg-gray-300",
        },
      ],
      figure: require("./img/cloud-with-shadow.svg"),
      footerFigureAlt: "Cloud",
    },
  },
  /**
   * Copy for the home page template.
   */
  home: {
    component: (): Promise<any> => import("./home/v-home.vue"),
    intro: {
      component: (): Promise<any> => import("./home/intro.vue"),
      title: "Simplicity<br>Over Bureaucracy",
      content:
        "Together with integrity, we focus on work as an art and work with our heart to bring quality to your hand",
      buttons: [
        {
          _item: "contact",
          link: "/contact",
          text: "Learn More",
          classes: "btn mr-4 text-purple-100 bg-purple-500 hover:bg-purple-600",
        },
        {
          _item: "pricing",
          link: "/pricing",
          text: "Pricing",
          classes:
            "btn btn-ol text-green-900 border-green-700 ml-0 mt-4 md:mt-0 hover:text-green-700 hover:border-green-700",
        },
      ],
      figure: require("./img/brainstorming.svg"),
    },
    logos: {
      title: "Our Technology stack",
      list: [
        {
          _item: "netlify",
          link: "https://netlify.app",
          target: "_blank",
          image: require("./img/netlify.svg"),
          alt: "Netlify",
        },
        {
          _item: "cloudflare",
          link: "https://cloudflare.com",
          target: "_blank",
          image: require("./img/cloudflare.svg"),
          alt: "Cloudflare",
        },
        {
          _item: "gridsome",
          link: "https://gridsome.com",
          target: "_blank",
          image: require("./img/gridsome.svg"),
          alt: "Gridsome",
        },
        {
          _item: "apollo",
          link: "https://apollographql.com",
          target: "_blank",
          image: require("./img/apollo.svg"),
          alt: "Apollo GraphQL",
        },
        {
          _item: "express",
          link: "https://experssjs.com",
          target: "_blank",
          image: require("./img/express.svg"),
          alt: "Express",
        },
        {
          _item: "aws",
          link: "https://aws.amazon.com/",
          target: "_blank",
          image: require("./img/aws.svg"),
          alt: "Amazon Web Services",
        },
      ],
    },
    section3: {
      id: "dummy-solution",
      items: [
        {
          _item: "plan",
          icon: require("./img/plan.svg"),
          title: "Plan",
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: "build",
          icon: require("./img/build.svg"),
          title: "Build",
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: "manage",
          icon: require("./img/manage.svg"),
          title: "Manage",
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: "gears",
          icon: require("./img/gears.svg"),
          title: "Automation",
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: "clouds",
          icon: require("./img/clouds.svg"),
          title: "Cloud",
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
        {
          _item: "security",
          icon: require("./img/security.svg"),
          title: "Security",
          content: `Lorem ipsum dolor sit amet, labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut`,
        },
      ],
    },
    section4: {
      id: "software-as-a-service",
      pretitle: "Our Vision",
      title: "Prime Business Solution",
      content: `<p>Purify established in early January 2020. We're aiming to simplify business process, without compromising on technology. Besides any technical skills we had, our team provide digital branding solution to support our local businesses.</p>`,
      buttons: [
        {
          _item: "contact",
          link: "/contact",
          text: "Contact Us",
          classes:
            "factor-link factor-link btn bg-purple-500 rounded text-white hover:bg-purple-600",
        },
      ],
      figure: (): Promise<any> => import("./el/figure-devops.vue"),
    },
    section5: {
      id: "solutions",
      pretitle: "Solutions",
      title: "What we offer",
      titleIcon: "",
      items: [
        {
          image: require("./img/web-icon.svg"),
          title: "Web Development",
          content: `Wix or WordPress is a great tool, but you still need special marketing material to reach your conversion target. We provide end-to-end services from developing, generate marketing material, deploying, maintaining, and testing your sales conversion.`,
        },
        {
          image: require("./img/mobile-icon.svg"),
          title: "Mobile App Development",
          content: `A mobile app is a powerful tool to keep your customers in touch. We provide a full-stack solution for mobile apps that will meet your business needs.`,
        },
        {
          image: require("./img/stack-icon.svg"),
          title: "IT Solution",
          content: `We provide custom software that is tailor-made with your business process. We also provide ERP implementation using open-source ERP software like Odoo and ERPNext.`,
        },
      ],
      syntaxTitle: "mycode.ts",
      syntax: (): Promise<any> => import("./el/figure-infrastructure.vue"),
    },
    testimonials: {
      pretitle: "Pricing Plan",
      title: "Pricing that scales with your business needs",
      description:
        "We provide a starter pricing plan for you who just jump in and start doing business. You can easily start your business and have a website that align with your brand identity. We also provide custom app solution for growing SME's to track their inventory, maintain their customer retention, and sales management.",
    },
    meta: {
      title: "Purify",
      description:
        "Zeno is a minimalist theme suited for the needs of IT companies and tech startups. Styles are powered by Tailwind, a low-level CSS framework.",
      image: require("./img/logo-zeno.jpg"),
    },
  },
  /**
   * Settings for the about page template
   */
  about: {
    hero: {
      pretitle: "About Us",
      title: "We believe in people",
      content: `Purify established as a technology company that focuses on providing solutions for business problems that are faster and efficient`,
    },
    valuesImage1: require("./img/about1.jpg"),
    valuesImage2: require("./img/about2.jpg"),
    valuesTitle: "A company with core values:",
    values: [
      {
        _item: "Positivity and Optimistic Mindset",
        title: "Positivity & Optimistic Mindset",
        content:
          "With a positive and optimistic work ethic, we treat our people as humans to achieve their greater tasks.",
      },
      {
        _item: "Robust Community",
        title: "Robust Community",
        content:
          "Willingness to set aside our own self-interests to share knowledge outside our family.",
      },
      {
        _item: "Integrity",
        title: "Integrity",
        content:
          "We believe in consistency on our core value, methods, and measurement",
      },
      {
        _item: "Modern",
        title: "Modern",
        content:
          "We take advantage of the latest technology to help your business more scalable and sustainable",
      },
      {
        _item: "Eclat",
        title: "Eclat",
        content:
          "We deliver products that drive results exceeding your expectations through continuous innovation",
      },
    ],
    team: {
      /**
       * The team layout has "grid" or "list" options
       */
      layout: "list",
      pretitle: "Meet the Minds",
      title: `The Team`,
      members: [
        {
          _item: "member_1",
          photo: require("./img/fiosandi_member.jpg"),
          title: "Co-Founder",
          name: "Fiosandi Rizky Novalino",
          content:
            "Family first! after that Big dreamer and creative thinker, and always believe in possibility to make people shine in their own way. Trust.",
          links: [
            {
              _item: "link_1",
              path: "https://www.linkedin.com/",
              icon: "fab fa-linkedin",
              target: "_blank",
            },
            {
              _item: "link_2",
              path: "https://github.com/",
              icon: "fab fa-github",
              target: "_blank",
            },
            {
              _item: "link_3",
              path: "https://angel.co/",
              icon: "fab fa-angellist",
              target: "_blank",
            },
          ],
        },
        {
          _item: "member_2",
          photo: require("./img/berry_member.jpg"),
          title: "Co-Founder",
          name: "Berry Humaidi Fuad",
          content:
            "If you don't succeed today, don't worry. There are other ways to be useful.",
          links: [
            {
              _item: "link_1",
              path: "https://www.linkedin.com/in/berryfuad",
              icon: "fab fa-linkedin",
              target: "_blank",
            },
          ],
        },
        {
          _item: "member_3",
          photo: require("./img/akram_member.jpg"),
          title: "Penjaga keseimbangan alam",
          name: "Akramurridjal Rahman B",
          content:
            "Love designing things and making it usable for human. Passionate on everything from software engineering to space exploration. Jay, Ye, and Kendrick still the biggest rapper alive. ",
          links: [
            {
              _item: "link_1",
              path: "https://www.linkedin.com/in/akramurridjal",
              icon: "fab fa-linkedin",
              target: "_blank",
            },
            {
              _item: "link_2",
              path: "https://github.com/xerod",
              icon: "fab fa-github",
              target: "_blank",
            },
            {
              _item: "link_3",
              path: "https://instagram.com/akramurridjal_",
              icon: "fab fa-instagram",
              target: "_blank",
            },
            {
              _item: "link_4",
              path: "https://xerod.github.io",
              icon: "fas fa-link",
              target: "_blank",
            },
          ],
        },
        {
          _item: "member_4",
          photo: require("./img/zendika_member.jpg"),
          title: "Project Manager",
          name: "Zendika Dayongki",
          content:
            "Give and give. Don't expect anything to come back to what you wanted.",
          links: [
            {
              _item: "link_1",
              path: "https://www.linkedin.com/in/zendikads",
              icon: "fab fa-linkedin",
              target: "_blank",
            },
          ],
        },
        {
          _item: "member_5",
          photo: require("./img/rian_member.jpg"),
          title: "Hardware Guy",
          name: "Moh. Ferian Fakhrul Zain",
          content:
            "INTP, Former IT — IoT, genius without brain, 🖤 new technology, my major job is front-end but somehow working on back-end, great to see you!",
          links: [
            {
              _item: "link_1",
              path: "https://www.instagram.com/rianovski",
              icon: "fab fa-instagram",
              target: "_blank",
            },
            {
              _item: "link_2",
              path: "https://github.com/rianovski",
              icon: "fab fa-github",
              target: "_blank",
            },
            {
              _item: "link_3",
              path: "https://linkedin.com/in/rianovski",
              icon: "fab fa-linkedin",
              target: "_blank",
            },
          ],
        },
        {
          _item: "member_6",
          photo: require("./img/aufa_member.jpg"),
          title: "Fullstack Developer",
          name: "Aufa Wibowo",
          content: "Pengen bikin startup",
          links: [
            {
              _item: "link_1",
              path: "https://www.linktr.ee/aufawibowo",
              icon: "fas fa-link",
              target: "_blank",
            },
          ],
        },
        {
          _item: "member_7",
          photo: require("./img/faris_member.jpg"),
          title: "Fullstack Developer",
          name: "M. Ikram Farisi",
          content: "Penggemar game online, ngalir aja hidup kaya air",
          links: [
            {
              _item: "link_1",
              path: "https://www.instagram.com/ikram.farisi",
              icon: "fab fa-instagram",
              target: "_blank",
            },
          ],
        },
      ],
    },
    meta: {
      title: "About - Purify Business Solution",
      description:
        "Zeno is a minimalist theme suited for the needs of IT companies and tech startups. Zeno styles are powered by Tailwind, a low-level CSS framework.",
      image: require("./img/logo-zeno.jpg"),
    },
  },
  // Pricing Page
  pricing: {
    hero: {
      pretitle: "Pricing that scales with your business.",
      title: `Awesome Plans`,
      content: "Choose the plan that suits your needs.",
    },
    packages: [
      {
        classes: "md:mt-6",
        name: "Starter",
        description:
          "We take care your website needs and make sure you deliver ",
        price: `Rp 249k <span class="text-base">per month</span>`,
        list: [
          {
            content: "Visitor Analytics App",
          },
          {
            content: "Automated Order Form",
          },
          {
            content: "WhatsApp Integration",
          },
          {
            content: "SSL Certificate",
          },
          {
            content: "Lovely Documentation",
          },
        ],
        buttonLink: "/contact",
        buttonText: "Contact Us",
        buttonClasses:
          "btn btn-ol border-purple-700 hover:text-purple-500  hover:border-purple-500",
      },
      {
        name: "Pro",
        description:
          "Better insights for growing businesses that want more customers.",
        price: `$499 <span class="text-base">per month</span>`,
        list: [
          {
            content: "Voluptatem accusantium",
          },
          {
            content: "Omnis iste natus error",
          },
          {
            content: "Sed ut perspiciatis unde",
          },
          {
            content: "Lorem ipsum dolor sit",
          },
          {
            content: "Incididunt ut labore et dolore magna aliqua",
          },
        ],
        buttonLink: "/contact",
        buttonText: "Contact Us",
        buttonClasses: "btn text-purple-100 bg-purple-500 hover:bg-purple-600",
      },
      {
        classes: "md:mt-6",
        name: "Business",
        description: "Advanced features for pros who need more customization.",
        price: `$899 <span class="text-base">per month</span>`,
        list: [
          {
            content: "Nam libero tempore",
          },
          {
            content: "Soluta nobis est eligendi",
          },
          {
            content: `Optio cumque nihil`,
          },
          {
            content: "Lorem ipsum dolor sit",
          },
          {
            content: "Consectetur adipiscing elit amet",
          },
        ],
        buttonLink: "/contact",
        buttonText: "Contact Us",
        buttonClasses:
          "btn btn-ol border-purple-700 hover:text-purple-500  hover:border-purple-500",
      },
    ],
    packagesFooter: "* 10 day money back guarantee",
    faq: {
      title: "FAQs",
      questions: [
        {
          _item: "q1",
          title: "Can I buy a lower tier and upgrade later?",
          content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
        },
        {
          _item: "q2",
          title: "What if I don't like it?",
          content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
        },
        {
          _item: "q3",
          title: "Can I cancel at anytime?",
          content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
        },
        {
          _item: "q4",
          title: "What happens if I go over my plans included hours?",
          content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
        },
        {
          _item: "q5",
          title: "Who is this for?",
          content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
        },
        {
          _item: "q6",
          title: "Are there any discounts available?",
          content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.`,
        },
      ],
    },
    meta: {
      title: "Pricing - Purify Business Solution",
      description:
        "A minimal, personal or portfolio theme. Ideal for entrepreneurs or individuals of multiple creative professions.",
      image: require("./img/logo-zeno.jpg"),
    },
  },
  // Contact Page
  contact: {
    hero: {
      pretitle: "Contact Us",
      title: "Give us a shout. Let us know how we can help.",
      content:
        "We'd love to hear about your business and find a time to discuss your needs. Fill out the form and we will be in touch shortly.",
    },
    meta: {
      title: "Contact - Purify Business Solution",
      description:
        "A minimal, personal or portfolio theme. Ideal for entrepreneurs or individuals of multiple creative professions.",
      image: require("./img/logo-zeno.jpg"),
    },
  },
  // Contact form plugin settings
  contactForm: {
    submit: {
      btn: "m-0",
      size: "m-0",
      text: "Contact",
    },
    inputFormat: "vertical",
    confirm: {
      title: "Got it!",
      subTitle: "We’ll get back to you as soon as possible.",
    },
    layout: [
      {
        label: "Name",
        _id: "name",
        inputType: "text",
        placeholder: "Full Name",
        required: true,
      },
      {
        label: "Work Email",
        _id: "email",
        inputType: "email",
        placeholder: "name@example.com",
        required: true,
      },
      {
        label: "Message",
        _id: "message",
        inputType: "textarea",
        placeholder: "how can we help?",
        required: true,
      },
    ],
  },
  // Blog plugin and custom blog Settings
  blog: {
    pretitle: "Because the future comes fast",
    title: "Zeno Blog",
    content:
      "Discover the latest product updates, announcements, and articles from the Zeno team",
    indexRoute: "/blog",
    postRoute: "/entry",
    limit: 6,
    returnLinkText: "Back",
    notFound: {
      title: "No Posts",
      subTitle: "Couldn't find any blog posts.",
    },
    promo: {
      pretitle: "Built with Factor CMS",
      title: "About Theme Zeno",
      content:
        "Zeno is a minimalist theme suited for the needs of IT companies and tech startups. Zeno styles are powered by Tailwind, a low-level CSS framework.",
      button: {
        link: "/about",
        text: "Learn More",
        classes:
          "btn bg-gray-100 rounded text-purple-500 hover:text-purple-600",
      },
    },
    components: {
      blogIndex: (): Promise<any> => import("./blog/blog-index.vue"),
      blogSingle: (): Promise<any> => import("./blog/blog-single.vue"),
      featuredImage: (): Promise<any> => import("./blog/el-featured-image.vue"),
      title: (): Promise<any> => import("./blog/widget-title.vue"),
      date: (): Promise<any> => import("./blog/widget-date.vue"),
      author: (): Promise<any> => import("./blog/widget-author.vue"),
      singleHeader: (): Promise<any> => import("./blog/el-single-header.vue"),
      entry: (): Promise<any> => import("./blog/widget-entry.vue"),
      social: (): Promise<any> => import("./blog/widget-social.vue"),
      pagination: (): Promise<any> => import("./blog/widget-pagination.vue"),
    },
    layout: {
      index: ["featuredImage", "date", "title", "author"],
      single: ["singleHeader", "entry", "social"],
    },
    metatags: {
      index: {
        title: "Blog - The Latest from Zeno Theme",
        description:
          "Discover the latest product updates, announcements, and articles from the Zeno team",
        image: require("./img/logo-zeno.jpg"),
      },
    },
  },
  // Footer
  footer: {
    nav: [
      {
        _item: "home",
        path: "/",
        name: "Home",
      },
      {
        _item: "pricing",
        path: "/pricing",
        name: "Pricing",
      },
      {
        _item: "about",
        path: "/about",
        name: "About",
      },
      {
        _item: "about",
        path: "/blog",
        name: "Blog",
      },
      {
        _item: "contact",
        path: "/contact",
        name: "Contact",
      },
      {
        _item: "twitter",
        path: "https://twitter.com/",
        icon: "fab fa-twitter",
        target: "_blank",
      },
    ],
    left: `Built with <i class="fas fa-heart"></i> using <a href='https://factor.dev/' target='_blank'>Factor</a>`,
    right: `&copy 2020 <a href='https://purify.id/' target='_blank'>Purify Labs, Inc.</a>`, // Empty when blank (e.g. right: '') or Dynamically added if removed/commented.
    figure: require("./img/cloud-with-shadow.svg"),
    figureAlt: "Cloud",
  },
};
