const app = Vue.createApp({
    data() {
        return {
            //head tag data
            icon: "./images/icon.svg",
            hometitle: "Polysmart Packaging Limited - We package it all..",
            homelink: "https://polysmartgroup.com/",
            homedescription: "We package it all..",

            //navigation bar data
            logo: "./images/polysmart.svg",
            navbar: [{
                    name: "Home",
                    href: "/index.html",
                },
                {
                    name: "About",
                    href: "/about.html",
                },
                {
                    name: "Our Team",
                    href: "/team.html",
                },
                {
                    name: "Major Distributors",
                    href: "/distributors.html",
                },
            ],

            //home page data
            //home her0 section
            backgroundimg: "./images/homebackground.webp",
            subtitle: "Packaging company",
            header: "Packaging is our bussiness. We are Polysmart",
            aboutext: "We are a packaging and shopping bags production company. Best Quality Always! Polysmart Packaging Limited is among the top 5 in the industry with about 250 manufacturers.",
        }
    },
    mounted() {
        const html = document.querySelector("html");
        const head = document.querySelector(".headtag");
        html.appendChild(head);
        html.insertBefore(head, html.children[0]);
        AOS.init();
    },
    methods: {

    }
})
app.component("head-content", {
    props: {
        icon: String,
        title: String,
        link: String,
        description: String,
    },
    template: `
        <head class="headtag">
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./css/style.css">
            <link rel="shortcut icon" :href="icon" type="image/x-icon">
            <title>{{ title }}</title>
            <meta property="og:type" content="website" />	
            <meta property="og:site_name" content="Polysmartgroup" />
            <meta property="article:modified_time" content="2022-08-10T05:04:02+00:00" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:label" content="Est. reading time" />
            <meta name="robots" content="index, follow">
            <meta name="twitter:data1" content="1 minute" />
            <link rel='dns-prefetch' href='//fonts.googleapis.com' />
            <link rel='dns-prefetch' href='//s.w.org' />
            <link rel="alternate" type="application/rss+xml" title="Polysmartgroup &raquo; Feed" href="https://polysmartgroup.com/feed/" />
            <link rel="alternate" type="application/rss+xml" title="Polysmartgroup &raquo; Comments Feed" href="https://polysmartgroup.com/comments/feed/" />
            <link rel="alternate" type="application/rss+xml" title="Polysmartgroup &raquo; Feed" href="https://polysmartgroup.com/feed/" />
            <link rel="canonical" :href="link" />
            <meta property="og:title" :content="title" />
            <meta property="og:description" :content="description" />
            <meta property="og:url" :content="link" />
            <link rel="apple-touch-icon" :href="icon" />
            <meta name="msapplication-TileImage" :content="icon" />
        </head>
`
})
app.component("nav-bar", {
    props: {
        image: String,
        navbar: Array,
    },
    template: `
        <nav class="navbar navbar-expand-lg nav-position">
            <div class="container-fluid resize">
                <a class="navbar-brand" href="/index.html">
                <img :src="image" alt="Polysmart logo"/>
                </a>
                <a class="header-button contact1" href="/contact.html"> Contact us </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul v-for="nav in navbar">
                        <li class="nav-item nav-li">
                            <a :href="nav.href">{{ nav.name }}</a>
                        </li>
                    </ul>
                </div>
                <a class="header-button contact2" href="/contact.html"> Contact us </a>
            </div>
        </nav>

    `
})
app.mount("body");
