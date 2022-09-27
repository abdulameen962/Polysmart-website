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
                    href: "./index.html",
                },
                {
                    name: "About",
                    href: "./about.html",
                },
                {
                    name: "Our Team",
                    href: "./team.html",
                },
                {
                    name: "Major Distributors",
                    href: "./distributors.html",
                },
                {
                    name: "Contact Us",
                    href: "./contact-us",
                    class: "contact-responsive",
                },
            ],

            //home page data

            //home hero section
            backgroundimg: "./images/homebackground.webp",
            subtitle: "Packaging company",
            header: "Packaging is our business. We are Polysmart",
            aboutext: "Best Quality Always!  Polysmart Packaging Limited is among the top 5 in the industry with about 250 manufacturers.",
            //about section
            aboutsub: "Who We Are",
            aboutgrid: [{
                    img: "./images/abt1.svg",
                    name: "We care about the environment",
                    summary: "Our operations are 100% powered by natural gas as the primary source of energy.",
                },
                {
                    img: "./images/abt2.svg",
                    name: "We produce the best polythene bags!",
                    summary: "We have 600+ dealers across 21 states in Nigeria and neighbouring countries.",
                },
                {
                    img: "./images/abt3.svg",
                    name: "We provide the best quality always",
                    summary: "Polysmart Packaging Limited is among the top 5 in the industry with about 250 manufacturers.",
                },
                {
                    img: "./images/abt4.svg",
                    name: "Packaging is our business, we are Polysmart!",
                    summary: "We are a packaging and shopping bags production company. ",
                },


            ],
            //quotesection
            quote: ' "We are polysmart. Packaging is our business"',
            quotesummary: "Best polythene packaging bags! We have 600+ dealers across 21 states in Nigeria and neighbouring countries.",
            quoteimage: "./images/personimage.webp",
            //productsection
            productsub: "Our Products",
            products: [{
                    img: "./images/nylon1.png",
                    name: "Double Colour Shopping Bag",
                    summary: "Lorem ipsum dolor sit amet, dol si consectetur adipiscing elit. Sit odio olo erat donec sed non. Lectus eu vel.",
                },
                {
                    img: "./images/nylon2.png",
                    name: "Medium Black Shopping Bag",
                    summary: "Lorem ipsum dolor sit amet, dol si consectetur adipiscing elit. Sit odio olo erat donec sed non. Lectus eu vel.",
                },
                {
                    img: "./images/nylon3.png",
                    name: "Poly bags (100% recycled)",
                    summary: "Lorem ipsum dolor sit amet, dol si consectetur adipiscing elit. Sit odio olo erat donec sed non. Lectus eu vel.",
                },
                {
                    img: "./images/nylon4.png",
                    name: "Small Black Shopping Bag",
                    summary: "Lorem ipsum dolor sit amet, dol si consectetur adipiscing elit. Sit odio olo erat donec sed non. Lectus eu vel.",
                },
                {
                    img: "./images/nylon4.png",
                    name: "	Fashion Bags",
                    summary: "Lorem ipsum dolor sit amet, dol si consectetur adipiscing elit. Sit odio olo erat donec sed non. Lectus eu vel.",
                },
                {
                    img: "./images/nylon4.png",
                    name: "Packing Bags for Pure water",
                    summary: "Lorem ipsum dolor sit amet, dol si consectetur adipiscing elit. Sit odio olo erat donec sed non. Lectus eu vel.",
                },
            ],
            //step section
            stepsub: "Order now",
            stepheader: "Step by step on how to order from Polysmart groups",
            steps: [{
                    number: "1",
                    name: "Lorem ipsum dolor sit amet consectetur ",
                    summary: "Lorem ipsum dolor sit amet consectetur adipisci elit eque ips odio justo.",
                },
                {
                    number: "2",
                    name: "Lorem ipsum dolor sit",
                    summary: "Lorem ipsum dolor sit amet consectetur adipisci elit eque ips odio justo.",
                },
                {
                    number: "3",
                    name: "Lorem ipsum dolor sit amet consectetur ",
                    summary: "Lorem ipsum dolor sit amet consectetur adipisci elit eque ips odio justo.",
                },
                {
                    number: "4",
                    name: "Lorem ipsum dolor sit amet",
                    summary: "Lorem ipsum dolor sit amet consectetur adipisci elit eque ips odio justo.",
                },


            ],
        }
    },
    mounted() {
        const html = document.querySelector("html");
        const head = document.querySelector(".headtag");
        html.appendChild(head);
        html.insertBefore(head, html.children[0]);
        AOS.init();
        var image = document.querySelector(".homebg");
        var bigImg = document.createElement("img");
        var srcs = image.src;
        bigImg.onload = function() {
            image.src = this.src;
        }

        bigImg.src = srcs;
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
                <img :src="image" alt="Polysmart logo" width="100px" height="100px"/>
                </a>
                <div class="responsive-nav">
                    <a class="header-button contact1" href="/contact.html"> Contact us </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul v-for="nav in navbar">
                        <li class="nav-item nav-li">
                            <a :href="nav.href" :class="nav.class">{{ nav.name }}</a>
                        </li>
                    </ul>
                </div>
                <a class="header-button contact2" href="/contact.html"> Contact us </a>
            </div>
        </nav>

    `
})
app.component("about-grid", {
    props: {
        about: Array,
    },
    template: `
        <div class="containerx">
            <div class="about-grid">
                <div class="col" v-for="ab in about" data-aos="fade-up" data-aos-duration="500">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-4">
                                <img :src="ab.img" :alt="ab.name" width="100px" height="100px"/>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-8">
                                <h3> {{ ab.name }} </h3>
                                <p> {{ ab.summary }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
app.component("product-grid", {
    props: {
        products: Array,
    },
    template: `
        <div class="containerx">
            <div class="product-grid">
                <div class="col" v-for="product in products" data-aos="fade-up" data-aos-duration="500">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                                <img :src="product.img" :alt="product.name" width="100px" height="100px"/>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-12">
                                <h3> {{ product.name }} </h3>
                                <p> {{ product.summary }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
app.component("step-grid", {
    props: {
        steps: Array,
    },
    template: `
        <div class="containerx">
            <div class="step-grid">
                <div class="inner-grid" v-for="step in steps" data-aos="fade-up" data-aos-duration="500">
                    <div class="row">
                        <div class="first">
                                <div class="number">
                                    {{ step.number }}
                                </div>
                        </div>
                        <div class="second">
                                <h3> {{ step.name }} </h3>
                                <p> {{ step.summary }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
app.mount("body");