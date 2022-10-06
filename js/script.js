const app = Vue.createApp({
    data() {
        return {
            //head tag data for home page
            icon: "./images/icon.svg",
            hometitle: "Polysmart Packaging Limited - We package it all..",
            homelink: "https://polysmartgroup.com/",
            homedescription: "We package it all..",

            //head tag for about page
            abouttitle: "About Polysmart",
            aboutlink: "https://polysmartgroup.com/about-us",
            aboutdescription: "Visit the post for more.",

            //navigation bar data
            logo: "./images/polysmart.svg",
            navbar: [{
                    name: "Home",
                    href: "./index",
                },
                {
                    name: "About Us",
                    href: "./about-us",
                },
                {
                    name: "Our Product",
                    href: "./products",
                },
                {
                    name: "Major Distributors",
                    href: "./distributors",
                },
                {
                    name: "Contact Us",
                    href: "../contact-us",
                },
            ],

            //home page data

            //home hero section
            backgroundimg: "./images/homebackground.webp",
            backgroundvideo: "./images/video8.mp4",
            subtitle: "Packaging company",
            header: "Packaging is our business. We are Polysmart",
            aboutext: "Best Quality Always! <br/> Polysmart Packaging Limited is among the top 5 in the industry with about 250 manufacturers.",
            //about section
            aboutsub: "About Us",
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
                    img: "./images/nylon1.webp",
                    name: "Double Colour Shopping Bag",
                    summary: "Lorem ipsum dolor sit amet, dol si consectetur adipiscing elit. Sit odio olo erat donec sed non. Lectus eu vel.",
                },
                {
                    img: "./images/nylon2.webp",
                    name: "Medium Black Shopping Bag",
                    summary: "Lorem ipsum dolor sit amet, dol si consectetur adipiscing elit. Sit odio olo erat donec sed non. Lectus eu vel.",
                },
                {
                    img: "./images/nylon3.webp",
                    name: "Poly bags (100% recycled)",
                    summary: "Lorem ipsum dolor sit amet, dol si consectetur adipiscing elit. Sit odio olo erat donec sed non. Lectus eu vel.",
                },
                {
                    img: "./images/nylon4.webp",
                    name: "Small Black Shopping Bag",
                    summary: "Lorem ipsum dolor sit amet, dol si consectetur adipiscing elit. Sit odio olo erat donec sed non. Lectus eu vel.",
                },
                {
                    img: "./images/nylon4.webp",
                    name: "Large Shopping Bags",
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
            //summary
            summarysub: "OUR SUMMARY",
            summaryheader: "Polysmart in a few sentences",
            summarys: [{
                    number: "5",
                    shape: "",
                    summary: "Top 5  in the packaging industry of about  250 manufacturers",
                },
                {
                    number: "600",
                    shape: "+",
                    summary: "dealers across 21 states in Nigeria  and neighbouring countries",
                },
                {
                    number: "2013",
                    shape: "",
                    summary: "Been running operation for over 9 years",
                },
                {
                    number: "100",
                    shape: "%",
                    summary: "of our operations are powered by natural gas",
                },
            ],
            //get in touch section
            touchheader: "Get in touch with us, we are your trusted packaging company",
            touchheader1: "Get in touch and get the best prices",
            touchheader2: "Know about us and our products",
            //footer
            footerlogo: "./images/polysmartlogo.webp",
            footersummary: "We are a shopping bags production company. Our Products are mainly shopping bags for domestic uses .i.e: Small Black Shopping bags, Medium black shopping bags, Double color shopping bags, Fashion bags, Packing bags for pure water and poly bags (100% waste recycled).",
            footerlistheader1: "Quick Links",
            footerlistheader2: "Legal",
            footerlistheader3: "Get started",
            quicklinks: [{
                    list: "Home",
                    link: "./index",
                },
                {
                    list: "About",
                    link: "./about-us",
                },
                {
                    list: "Contact",
                    link: "#",
                },

            ],
            legals: [{
                    list: "Cookie Policy",
                    link: "#",
                },
                {
                    list: "Terms and Conditions",
                    link: "#",
                },
                {
                    list: "Privacy Policy",
                    link: "#",
                },
            ],
            getstarted: [{
                    list: "Our Team",
                    link: "#",
                },
                {
                    list: "Online Orders",
                    link: "#",
                },
            ],
            copyright: "Copyright © 2018 - 2022 All Rights Reserved | Polysmart Group Limited",
            socialinks: [{
                    link: "#",
                    img: "./images/facebook.svg",
                },
                {
                    link: "#",
                    img: "./images/twitter.svg",
                },
                {
                    link: "#",
                    img: "./images/instagram.svg",
                },
            ],


            //about page

            //about section
            aboutheader: "WE ARE THE BEST AT WHAT WE DO!",
            aboutparagraph: "Polysmart Packaging Limited has developed into one of the largest suppliers of plastic bag goods in Nigeria thanks to our unwavering dedication to quality, dependability, exceptional value for our customers, and environmental awareness.",
            aboutimg: "./images/aboutimg.webp",

            //history and mission section
            historysubtitle: "Our Vision",
            historyheader: "How Polysmart came to existence",
            history: "We produce Small Black Shopping bags, Medium black shopping bags, Double color shopping bags, Fashion bags, Packing bags for pure water and poly bags. All our poly bags are 100% waste recycled. Polysmart Packaging Limited is one of the groups of companies that form the Polysmart Group. Polysmart Packaging Limited started operations in January 2013 at Ota, Ogun State Nigeria. Currently, Polysmart Group is divided into three companies:<br/>•	Polysmart Packaging Limited <br/>•	Switch Recycling Innovations <br/>•	Crystal Packaging Limited <br/>Polysmart Packaging Limited has developed into one of the largest suppliers of plastic bag goods in Nigeria thanks to our unwavering dedication to quality, dependability, exceptional value for our customers, and environmental awareness.",
            historyimage: "./images/history1.webp",
            missionsubtitle: "Our Mission",
            missionheader: "Our mission - what we seek to achieve in Polysmart",
            mission: "Our main objective is to make all our products mainly from Post Consumer waste material starting with Polyethylene. Our vision is to to be the reference point for packaging business in Nigeria. Our mission is to be the best in the eyes of our customers, employees, and shareholders and contribute to the environment where it operates.",
            missionimage: "./images/history2.webp",
        }
    },
    mounted() {
        const html = document.querySelector("html");
        const head = document.querySelector(".headtag");
        html.appendChild(head);
        html.insertBefore(head, html.children[0]);
        AOS.init();
        document.querySelectorAll(".scrollstop").forEach(function(e) {
            e.addEventListener('keydown', preventKeyBoardScroll, false);

            function preventKeyBoardScroll(e) {
                var keys = [32, 33, 34, 35, 37, 38, 39, 40];
                if (keys.includes(e.keyCode)) {
                    e.preventDefault();
                    return false;
                }
            }
        })
        document.querySelectorAll(".img").forEach(function(e) {
            e.loading = "lazy";
        })
        const darksvg = document.querySelector(".lightpath");
        const box = document.querySelector(".links").children[1];
        box.onmouseover = () => {
            darksvg.style.stroke = "#FFD3B9";
        }
        box.onmouseout = () => {
            darksvg.style.stroke = "rgb(255, 255, 255)";
        }
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
                <a class="navbar-brand" href="./index">
                <img class="img" :src="image" alt="Polysmart logo" width="100" height="100"/>
                </a>
                <div class="responsive-nav">
                    <a class="header-button contact1" href="./contact"> Contact us </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul v-for="nav in navbar" class="nav-ul">
                        <li class="nav-item nav-li">
                            <a :href="nav.href" :class="nav.class">{{ nav.name }}</a>
                        </li>
                    </ul>
                </div>
                <a class="header-button contact2" href="./contact"> Order now </a>
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
                        <div class="col-sm-12 col-md-12 col-lg-3">
                                <img class="img" :src="ab.img" :alt="ab.name" width="100" height="100"/>
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
                                <img class="img" :src="product.img" :alt="product.name" width="100" height="100"/>
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
                    <div class="row" data-aos="fade-up" data-aos-duration="500">
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
app.component("summary-grid", {
    props: {
        summarys: Array,
    },
    template: `
        <div class="summary-grid" data-aos="fade-up" data-aos-duration="500">
            <div class="inner-grid" v-for="summary in summarys">
                <div> {{ summary.number }}  <span> {{ summary.shape }} </span></div>
                <p> {{ summary.summary }} </p>
            </div>
        </div>
    `
})
app.component("foot-er", {
    props: {
        footerlogo: String,
        footersummary: String,
        copyright: String,
        socialinks: Array,
        quicklinks: Array,
        legals: Array,
        getstarted: Array,
        header1: String,
        header2: String,
        header3: String,
    },
    template: `
        <footer>
            <div class="resize">
                <div class="row footer-top">
                    <div class="col-sm-12 col-md-12 col-lg-5 footer-left" data-aos="fade-up" data-aos-duration="500">
                        <img :src="footerlogo" alt="logo" width="100" height="100">
                        <p> {{ footersummary }} </p>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-7 footer-right" data-aos="fade-up" data-aos-duration="500">
                        <ul>
                            <li>
                                <h3> {{ header1 }} </h3>
                            </li>
                            <li v-for="quick in quicklinks"> 
                            <a :href="quick.link">  {{ quick.list }} </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                            <h3> {{ header2 }} </h3>
                            </li>
                            <li v-for="legal in legals"> 
                                <a :href="legal.link">  {{ legal.list }} </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                            <h3> {{ header3 }} </h3>
                            </li>
                            <li v-for="get in getstarted"> 
                                <a :href="get.link">  {{ get.list }} </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom row" data-aos="fade-up" data-aos-duration="500">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <p> {{ copyright }} </p>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 socials">
                        <a  v-for="link in socialinks" :href="link.link">
                            <img  :src="link.img" :alt="link.link" width="100" height="100"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    `
})
app.component("achieve-ment", {
    props: {
        summarys: Array,
    },
    template: `
        <div class="achieve-grid" data-aos="fade-up" data-aos-duration="500">
            <div class="inner-grid" v-for="summary in summarys">
                <div> {{ summary.number }}  <span> {{ summary.shape }} </span></div>
                <p> {{ summary.summary }} </p>
            </div>
        </div>
    `
})
app.mount("body");