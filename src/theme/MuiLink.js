const MuiLink = {
    defaultProps: {
        style: {
            cursor: 'pointer',
        }
    },
    variants: [
        {
            props: { variant: 'headerTop' },
            style: {
                textDecoration: 'none',
                fontSize: '0.8125rem',
                fontWeight: '600',
                letterSpacing: '0.035rem',
            }
        },
        {
            props: { variant: 'headerTopLinks' },
            style: {
                textDecoration: 'none',
                fontSize: '0.6875rem',
                fontWeight: '600',
                letterSpacing: '0.035rem',
                lineHeight: '1.25rem'
            }
        },
        {
            props: { variant: 'mainMenuItems' },
            style: {
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '600',
                letterSpacing: '0.035rem',
            }
        },
        {
            props: { variant: 'helper' },
            style: {
                textDecoration: 'none',
                fontSize: '0.6875rem',
                letterSpacing: '0.035rem',
                fontWeight: '600',
                lineHeight: '1rem',
                color: '#707070',
            }
        },
        {
            props: { variant: 'infobar' },
            style: {
                letterSpacing: '0.035rem',
                fontWeight: '600',
                fontSize: '0.6875rem',
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline'
                }
            },
        },
        {
            props: { variant: 'flat' },
            style: {
                textDecoration: 'none',
                fontSize: '0.6875rem',
                fontWeight: '500',
                letterSpacing: '0.035rem',
            }
        },
        {
            props: { variant: 'underline' },
            style: {
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'underline',
                fontSize: '0.8rem',
                fontWeight: '500',
                letterSpacing: '0.035rem',
            }
        },
    ]
}

export default MuiLink;