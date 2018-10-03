module.exports = {
    pathPrefix: `/`,

    siteMetadata: {
        siteUrl: `https://lasertime.ru`,
        title: 'Клиника красоты "Знак Качества"',
        description:
            'Добро пожаловать в клинику красоты &quot;Знак Качества&quot;! Мы качественно проводим процедуры фракционного лазерного омоложения, лазерной эпиляции, пластической хирургии.',
        keywords:
            'клиника знак качества, легун алла, лазерная эпиляция в москве',
        linkPrefix: '/lasertime',
        fixedPhone: '89055881313',
        mobilePhone: '89858888297',
        menuItems: {
            leftMenuItems: [
                { path: '/actions/', name: 'Акции' },
                { path: '/doctors/', name: 'Врачи' },
                { path: '/services/', name: 'Услуги' },
            ],
            rightMenuItems: [
                { path: '/prices/', name: 'Цены' },
                { path: '/articles/', name: 'Статьи' },
                { path: '/contacts/', name: 'Контакты' },
            ],
        },
    },

    plugins: [
        'gatsby-plugin-less',

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `services`,
                path: `${__dirname}/src/pages/services/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `doctors`,
                path: `${__dirname}/src/pages/doctors/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `header-images`,
                path: `${__dirname}/src/files/header-images/`,
            },
        },

        /*-----------------------------------------------------------------------------
         * Articles Images
         *----------------------------------------------------------------------------*/
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `header-images`,
                path: `${__dirname}/src/files/index-slider-images/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `prices`,
                path: `${__dirname}/src/files/markdown/prices/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `articles-images`,
                path: `${__dirname}/src/pages/`,
            },
        },

        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            // `ignoreFileExtensions` defaults to [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
                            // as we assume you'll use gatsby-remark-images to handle
                            // images in markdown as it automatically creates responsive
                            // versions of images.
                            //
                            // If you'd like to not use gatsby-remark-images and just copy your
                            // original images to the public directory, set
                            // `ignoreFileExtensions` to an empty array.
                            ignoreFileExtensions: [],
                        },
                    },
                ],
            },
        },
        `gatsby-plugin-catch-links`,

        {
            resolve: `gatsby-plugin-sitemap`,
            options: {},
        },
        // `gatsby-plugin-react-next`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-35994757-6',
                // Puts tracking script in the head instead of the body
                head: false,
            },
        },
    ],
}
