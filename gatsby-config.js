module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.digi.urrio.fi',
        title: 'Digi-Urrio',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-postcss',
        'gatsby-plugin-transition-link',
        'gatsby-plugin-image',
        'gatsby-plugin-anchor-links',
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    'Poppins',
                    'Encode Sans SC'
                ],
                display: 'swap'
            }
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: '278409385',
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
    ],
}
