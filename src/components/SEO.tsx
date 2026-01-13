import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
}

const SEO = ({
    title,
    description,
    image = '/favicon.png',
    url = 'https://elkady.dev',
    keywords,
    ogTitle,
    ogDescription
}: SEOProps) => {
    const siteTitle = 'Mahmoud Elkady | AI Automation Engineer';
    const fullTitle = title === siteTitle ? title : `${title} | Mahmoud Elkady`;
    const finalOgTitle = ogTitle || fullTitle;
    const finalOgDescription = ogDescription || description;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={finalOgTitle} />
            <meta property="og:description" content={finalOgDescription} />
            <meta property="og:image" content={image} />


        </Helmet>
    );
};

export default SEO;
