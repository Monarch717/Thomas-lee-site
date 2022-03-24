module.exports = {
    siteMetadata: {
        siteUrl: "https://chengri-lee.netlify.app/",
        title: "Personal Portfolio of ChengRi Lee",
        description:
            "Senior blockchain developer who has 7+ years of experience in software engineering and blockchain",
        author: "ChengRi Lee",
        siteLanguage: "en",
        image: "./src/data/images/slider/thomas.png",
        titleTemplate: "",
        telegram: "@CryptoIdea212",
        socials: [
            {
                id: 1,
                title: "linkedin",
                path: "https://www.linkedin.com/in/lee-cheng-ri-9086111a1/",
                icon: "linkedin",
            },
            {
                id: 2,
                title: "discord",
                path: "https://discord.gg/NUuNapvPYs",
                icon: "discord",
            },
            {
                id: 3,
                title: "telegram",
                path: "https://t.me/CryptoIdea212",
                icon: "telegram",
            },
        ],
        contact: {
            phone: "1 (602) 935-6462",
            email: "monarch717930@gmail.com",
            telegram: "@CryptoIdea212",
            discord: "Tor#0368",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    "gatsby-remark-reading-time",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "ChengRi-lee",
                short_name: "ChengRi-lee",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/avax-logo.png",
            },
        },
    ],
};
