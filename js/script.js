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


            //head tag for contact page
            contacttitle: "Contact Us",
            contactlink: "https://polysmartgroup.com/contact-us",
            contactdescr: "Visit the post for more.",

            //head tag for order now page
            ordertitle: "Order now",
            orderlink: "https://polysmartgroup.com/order-now",
            orderdescr: "Visit the post for more.",

            //head tag for products page
            producttitle: "Our Products",
            productlink: "https://polysmartgroup.com/products",
            productdescr: "Visit the post for more.",

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
                    name: "Our Products",
                    href: "./products",
                },
                {
                    name: "Major Distributors",
                    href: "./distributors",
                },
                {
                    name: "Contact Us",
                    href: "./contact-us",
                },
                {
                    name: "Order now",
                    href: "./order-now",
                    class: "contact-responsive",
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
                    img3: "./images/doublewcolorwhiteblack.webp",
                    img2: "./images/double_color_blue_black.webp",
                    img: "./images/doublecoloryellowrandblack.webp",
                    // img4: "",
                    name: "Double Colour Shopping Bag",
                    class: "splide slider1",
                    thumb: "thumbnails thumbnails1",
                    summary: "The double colour shopping bags are suitable for many uses in the retail environment. <br/>•	Available in blue and black, black and white or yellow and black colours <br/>•	Available in medium size.",
                },
                {
                    img: "./images/smallblack.webp",
                    img2: "./images/medium_black.webp",
                    // img3: "./images/nylon2.webp",
                    // img4: "./images/nylon2.webp",
                    name: "Black Shopping Bags",
                    class: "splide slider2",
                    thumb: "thumbnails thumbnails2",
                    summary: "The black shopping bags are designed for retail and groceries with a variety of uses. <br/>•	Available in small or medium sizes.",
                },
                {
                    img: "./images/medium_white.webp",
                    img2: "./images/smallwhite.webp",
                    // img3: "./images/nylon4.webp",
                    // img4: "./images/nylon4.webp",
                    name: "White Shopping Bags",
                    thumb: "thumbnails thumbnails3",
                    class: "splide slider3",
                    summary: "The white shopping bags are a perfect use for groceries, supermarkets, restaurants and takeout. <br/>•	Available in small or medium sizes.",
                },
                {
                    img: "./images/packingbag.webp",
                    img2: "./images/packing_bags_2.webp",
                    img3: "./images/packing_bags_3.webp",
                    // img4: "./images/nylon4.webp",
                    name: "Packing Bags ",
                    thumb: "thumbnails thumbnails4",
                    class: "splide slider4",
                    summary: "The packing bags are used for goods packaging. It can come in various colours.<br/>•	Printing is acceptable on the bags with logos or text.",
                },
                {
                    img: "./images/nylon3.webp",
                    // img2: "./images/nylon3.webp",
                    // img3: "./images/nylon3.webp",
                    // img4: "./images/nylon3.webp",
                    name: "Poly bags (100% recycled)",
                    thumb: "thumbnails thumbnails5",
                    class: "splide slider5",
                    summary: "The poly bag is made from 100% recycled materials. It is presentable and easy to carry. <br/>•	Available in black colour",
                },
            ],
            //step section
            stepsub: "Order now",
            stepheader: "Step by step on how to order from Polysmart groups",
            steps: [{
                    number: "1",
                    summary: "Select 'Order Now' on Polysmart Packaging website",
                },
                {
                    number: "2",
                    summary: "Input your details: Name, phone number, email address and company",
                },
                {
                    number: "3",
                    summary: "Select the products that you intend to order and input quantity of each in the provided space",
                },
                {
                    number: "4",
                    summary: "Select submit and a member of our Sales team will get back to you as soon as possible.",
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
            footersummary: "We are a shopping bags production company. Our Products are mainly shopping bags for domestic uses .i.e: Small Black Shopping bags, Medium black shopping bags, Double color shopping bags, Large shopping bags and poly bags (100% waste recycled).",
            footerlistheader1: "Quick Links",
            footerlistheader2: "Legal",
            footerlistheader3: "Get started",
            quicklinks: [{
                    list: "Home",
                    link: "./index",
                },
                {
                    list: "About Us",
                    link: "./about-us",
                },
                {
                    list: "Contact",
                    link: "#",
                },

            ],
            legals: [{
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
            aboutparagraph: "We have amassed a large client base over the years and continue to put forth considerable effort to maintain excellent client relationships and first-rate customer service",
            aboutimg: "./images/aboutimg.webp",

            //history and mission section
            historysubtitle: "Who We Are",
            history: "Polysmart Packaging Limited started operations in January 2013 at Ota, Ogun State Nigeria. <br/> Currently, Polysmart Packaging Limited is one of the groups of companies under Polysmart Group. Polysmart Group is a fusion of three companies:<br/>•	Polysmart Packaging Limited <br/>•	Switch Recycling Innovations Ltd <br/> •	Crystal Packaging Limited",
            historyimage: "./images/history1.webp",
            missionsubtitle: "What We Do",
            mission: "We produce small shopping bags, medium shopping bags, Large shopping bags, double color shopping bags and 100% recycled poly bags. <br/> Polysmart Packaging Limited has developed into one of the largest suppliers of plastic bag goods in Nigeria, thanks to our unwavering dedication to quality, dependability, exceptional value for our customers, and environmental awareness. ",
            missionimage: "./images/history2.webp",

            //mission,vision and objectives
            missionvision: [{
                    image: "./images/objective.svg",
                    header: "OUR MISSION",
                    summary: "Our mission is to be the best in the eyes of our customers, employees, and shareholders and contribute to the environment where it operates.",
                },
                {
                    image: "./images/objective.svg",
                    header: "OUR OBJECTIVES",
                    summary: "Our main objective is to make all our products mainly from Post Consumer waste material starting with Polyethylene",
                },
                {
                    image: "./images/objective.svg",
                    header: "OUR VISION",
                    summary: "Our vision is to to be the reference point for packaging business in Nigeria",
                },
            ],

            //team section
            teamsubtitle: "Our Team",
            teams: [{
                    title: "CEO/MD",
                    image: "",
                    name: "Wasiu Balogun",
                },
                {
                    title: "Chief Operating Officer",
                    image: "",
                    name: "Adeola Bankole",
                },
                {
                    title: "Chief Financial Officer",
                    image: "",
                    name: "Yemi Akingbehin",
                },
                {
                    title: "Group Head, Internal Control & Compliance",
                    image: "",
                    name: "Jide Amoo",
                },
                {
                    title: "Group Head, Quality Control",
                    image: "",
                    name: "Ernest Ubasineke",
                },
                {
                    title: "Group Head, Health Safety & Environment",
                    image: "",
                    name: "Awoyode Abiodun",
                },
                {
                    title: "Group Head, Human Resources",
                    image: "",
                    name: "Kelechi Onwubiko",
                },
                {
                    title: "Director, Switch Recycling Innovations Group Head, Material Recovery & Supply Chain",
                    image: "",
                    name: "Ime Akpan",
                },
                {
                    title: "Head, Legal Unit",
                    image: "",
                    name: "Ifeanyi Obi",
                },
                {
                    title: "Head of Finance & Accounts",
                    image: "",
                    name: "Rukayat Yousuph",
                },
                {
                    title: "Head of Internal Control Unit",
                    image: "",
                    name: "Adenike Adelana",
                },
                {
                    title: "Head, Mechanical Maintenance",
                    image: "",
                    name: "Adewunmi Taiwo",
                },
            ],

            //values section
            // valuesub: "OUR VALUES",
            values: [{
                    image: "./images/value1.svg",
                    header: "Passion for customers",
                    summary: "At Polysmart Packaging, we are passionate, enthusiastic and committed to our customers in attaining their business goals or target.",
                },
                {
                    image: "./images/value2.svg",
                    header: "Leadership",
                    summary: "Our employees are instilled leadership values to help improve their cohesiveness and willingness to work together as a productive team.",
                },
                {
                    image: "./images/value3.svg",
                    header: "Integrity & Innovation",
                    summary: "We are honest, transparent and committed to applying innovative thinking to our work. As a company, our culture and attitude to work is innovative.",
                },
                {
                    image: "./images/value4.svg",
                    header: "Excellence",
                    summary: "At Polysmart, we always strive to do more. Learning, growing, evolving and mistakes will lead to great executions. Great executions lead to excellence.",
                },
                {
                    image: "./images/value5.svg",
                    header: "Resilience",
                    summary: "At Polysmart, we understand the importance of trying and making mistakes. We utilize grit to manage our fear over failure. We build courage, adapt and learn from setbacks.",
                },
                {
                    image: "./images/value6.svg",
                    header: "Teamwork",
                    summary: "Teamwork is the core of our work at Polysmart. We encourage our employees to cooperate, use their individual skills collectively and trust each other, no matter the circumstances.",
                },
            ],
            valuesub: "OUR VALUES",


            //contact us page

            //contactmain section
            contactheader: "Contact Us",
            contactsummary: "Lorem ipsum dolor sit amet consectetur adipisc elit viverra dignissim pellentesque in ac.",
            contactblocks: [{
                    image: "./images/support.svg",
                    header: "Support",
                    summary: "<a href='./contact-us#form'> Click here </a> to to fill our support <br/> form.",
                    email: "enquiry@polysmartgroup.com",
                    number: "+234 8080367744",
                    mail: "mailto:enquiry@polysmartgroup.com?&subject='I want to make an enquiry from Polysmart about...'",
                },
                {
                    image: "./images/feedback.svg",
                    header: "Feedback",
                    summary: "<a href='./contact-us#form'> Click here </a> to to fill our feedback form.",
                    email: "enquiry@polysmartgroup.com",
                    number: "+234 8080367744",
                    mail: "mailto:enquiry@polysmartgroup.com?&subject='I want to make an enquiry from Polysmart about...'",
                },
            ],

            //form section
            formsubtitle: "CONTACT US",
            formheader: "Get in touch with us today!",
            formemail: "enquiry@polysmartgroup.com",
            formphone: "(+234)-0700-POLYSMART",
            formtel: "tel:(+234)-0700-POLYSMART",
            formmail: "mailto:enquiry@polysmartgroup.com",
            formaddress: " 7, Polysmart Avenue, Ogun State Industrial Estate, Ota, Ogun state, Nigeria",

            //order now page
            orderformheader: "Make an Order Request",
            orderrightheader: "Description",
            orderformsummary: "Make your order requests using the provided form and a member of our Sales team will reach out to you to confirm your order and engage you further.",
            orderlisheader: "What should I expect?",
            orderlist: [{
                    list: "Response within 24 hours (Monday - Friday)",
                },
                {
                    list: "Response within 48 hours (Saturday - Sunday)",
                },
                {
                    list: "Easy and secure payment methods",
                },
            ],
            formproducts: [{
                    name: "Double Colour Shopping Bag",
                    image: "./images/testimg.svg",

                },
                {
                    name: "Medium Shopping Bag",
                    image: "./images/testimg.svg",

                },
                {
                    name: "Poly bags (100% recycled)",
                    image: "./images/testimg.svg",

                },
                {
                    name: "Small Shopping Bag",
                    image: "./images/testimg.svg",

                },
                {
                    name: "Large Shopping Bags",
                    image: "./images/testimg.svg",

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
        document.querySelectorAll(".member").forEach(function(e) {
            e.onmouseover = () => {
                const parent = e;
                const header = parent.children[1].children[0];
                header.style.color = "#343472";
            }
            e.onmouseout = () => {
                const parent = e;
                const header = parent.children[1].children[0];
                header.style.color = "#292C32";
            }
        })
        document.querySelectorAll(".formlink").forEach(function(e) {
            console.log(e);
            e.onmouseover = () => {
                const parent = e;
                const text = parent.children[1];
                text.style.marginLeft = "25px";
                text.style.color = "#FFD3B9";
            }
            e.onmouseout = () => {
                const parent = e;
                const text = parent.children[1];
                text.style.marginLeft = "15px";
                text.style.color = "#292C32";
            }
        })
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
                <a class="header-button contact2" href="./order-now"> Order now </a>
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
                    <a href="./products">
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                    <img class="img" :src="product.img" :alt="product.name" width="100" height="100"/>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                    <h3 v-html="product.name"> {{ product.name }} </h3>
                                    <p v-html="product.summary"> {{ product.summary }} </p>
                            </div>
                        </div>
                    </a>
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
app.component("mv-o", {
    props: {
        mvo: Array,
    },
    template: `
    <div class="mvo main-extend">
        <div class="mvo-grid resize">
            <div class="mvo-single" v-for="main in mvo" data-aos="fade-up" data-aos-duration="500">
                <div class="image">
                    <img :src="main.image" :alt="main.header"/>
                </div>
                <div class="text">
                    <h3 v-html="main.header"> {{ main.header }} </h3>
                    <p> {{ main.summary }} </p>
                </div>

            </div>
        </div>
    </div>
`
})
app.component("team-section", {
    props: {
        teams: Array,
        teamsubtitle: String,
        teamheader: String,
    },
    template: `
    <div class="team main-extend">
        <div class="team-inner resize">
            <div class="header-text" data-aos="fade-up" data-aos-duration="500">
            <div class="subtitle-main" data-aos="fade-up" data-aos-duration="500">
                <div class="subtitle-line"></div>
                <div class="subtitle"> {{ teamsubtitle }} </div>
            </div>
            </div>
            <div class="team-grid">
                <div class="member" v-for="team in teams" data-aos="fade-up" data-aos-duration="500">
                    <div class="image">
                        <img :src="team.image" :alt="team.title"/>
                        <p> {{ team.title }} </p>
                    </div>
                    <div class="text">
                        <h3> {{ team.name }} </h3>
                        <p> {{ team.summary }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

`
})
app.component("value-section", {
    props: {
        values: Array,
    },
    template: `
       <div class="value-grid">
          <div class="value-single row" v-for="value in values" data-aos="fade-up" data-aos-duration="500">
            <div class="col-sm-12 col-md-12 col-lg-4 image">
                <img :src="value.image" :alt="value.header"/>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-8 text">
                <h3> {{ value.header }} </h3>
                <p> {{ value.summary }} </p>
            </div>
          </div>
       </div>
    `
})
app.component("contact-block", {
    props: {
        contactblocks: Array,

    },
    template: `
       <div class="bottom row">
           <div class="col-sm-12 col-md-12 col-lg-6 block" v-for="block in contactblocks">
                <div class="block-inner row" data-aos="fade-up" data-aos-duration="500">
                       <div class="col-sm-12 col-md-4 col-lg-12 image">
                          <img :src="block.image" :alt="block.header" width="100" height="100"/>
                       </div>
                       <div class="col-sm-12 col-md-8 col-lg-12 text">
                            <h3> {{ block.header }} </h3>
                            <p v-html="block.summary"> {{ block.summary }} </p>
                            <div class="line">
                                <a :href="block.mail"> {{ block.email }} </a>
                                <p> {{ block.number }} </p>
                            </div>
                       </div>
                </div>
           </div>
       </div>
    `
})
app.mount("body");