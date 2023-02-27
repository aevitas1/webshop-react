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
        fontWeight: "700",
        letterSpacing: "0.035rem",
        lineHeight: "1.25",
        textTransform: "uppercase",
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
        fontSize: '2.5rem',
        fontWeight: 500,
        lineHeight: 1.84,
    },
    p: {
        fontSize: '0.8125',
        letterSpacing: '0.035rem',
        lineHeight: '1rem',
        fontWeight: '500',
    },
    subtitle1: {
        fontSize: '0.6875rem',
        letterSpacing: '0.035rem',
        fontWeight: '600',
        lineHeight: '1rem',
        color: '#707070',
    },
    link_footer: {
        fontSize: '0.625rem',
        fontWeight: '500',
        letterSpacing: '0.035rem',
        lineHeight: '2.2',
        cursor: 'pointer'
    }
}

export default typography;