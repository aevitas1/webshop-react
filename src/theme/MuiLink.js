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
                fontSize: '0.6875rem',
                fontWeight: '600',
                letterSpacing: '0.035rem',
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
    ]
}

export default MuiLink;