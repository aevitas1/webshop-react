const logoFont = "'Satisfy', cursive"
const typography = {
    fontFamily: 'Montserrat',
    fontSize: 13,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    htmlFontSize: 13,
    h1: {
        letterSpacing: '0.035rem',
        fontSize: 48,
        lineHeight: 1.35,
        fontWeight: '700',
    },
    h2: {
        letterSpacing: '0.035rem',
        fontSize: '3.6rem',
        fontWeight: 300,
        lineHeight: 1.51,
    },
    h2_hero: {
        fontSize: '2.265rem',
        lineHeight: '1.5rem',
        '@media screen and (max-width: 768px)': {
            fontSize: '1.25rem',
            lineHeight: '1.14286',
        },
    },
    h2_footer: {
        fontSize: "0.8125rem",
        fontWeight: "600",
        letterSpacing: "0.035rem",
        lineHeight: "1.25",
        textTransform: "uppercase",
        paddingBottom: '1rem',
    },
    h3: {
        letterSpacing: '0.035rem',
        fontSize: '6.8rem',
        fontWeight: 400,
        lineHeight: 1.52,
    },
    h3_hero: {
        fontWeight: '500',
        fontSize: '0.0875rem',
        lineHeight: '1.28571',
    },
    h4: {
        letterSpacing: '0.035rem',
        fontSize: '4.3rem',
        fontWeight: 600,
        lineHeight: 1.57,
    },
    h5: {
        letterSpacing: '0.035rem',
        fontSize: '3rem',
        fontWeight: 400,
        lineHeight: 1.24,
    },
    h6: {
        letterSpacing: '0.035rem',
        fontSize: '1.25rem',
        fontWeight: 800,
        lineHeight: 1.84,
    },
    p: {
        fontSize: '0.8125rem',
        letterSpacing: '0.035rem',
        lineHeight: '1rem',
        fontWeight: '500',
    },
    p_bold: {
        fontSize: '0.8125rem',
        letterSpacing: '0.035rem',
        lineHeight: '1rem',
        fontWeight: '600',
    },
    subtitle1: {
        fontSize: '0.6875rem',
        letterSpacing: '0.035rem',
        fontWeight: '600',
        lineHeight: '1rem',
        color: '#707070',
    },
    submenu_link_header: {
        textDecoration: 'none',
        fontSize: '0.6875rem',
        fontWeight: '800',
        letterSpacing: '0.035rem',
        width: '100%'
    },
    link_footer: {
        fontSize: '0.6875rem',
        fontWeight: '500',
        letterSpacing: '0.035rem',
        lineHeight: '3',
        cursor: 'pointer'
    },
    logo_header: {
        display: 'inline-block',
        fontFamily: logoFont,
        color: '#E50010',
        fontSize: '2.25rem',
        textDecoration: 'none',
        transform: 'translateY(0.25rem)',
        '@media screen and (max-width: 1024px)': {
            fontSize: '1.25rem',
            transform: 'translateY(0)',
        },
    },
    logo_header_middle: {
        fontFamily: logoFont,
        fontSize: '1rem',
        paddingRight: '0.35rem',
        '@media screen and (max-width: 1024px)': {
            fontSize: "0.6rem",
            paddingRight: "0.25rem",
        },
    },
    logo_footer: {
        fontFamily: logoFont,
        fontSize: '1.25rem',
        textDecoration: 'none',
        color: 'black'
    },
    logo_footer_middle: {
        fontFamily: logoFont,
        fontSize: "0.6rem",
        paddingRight: "0.25rem",
        color: 'black',
    },
}

export default typography;