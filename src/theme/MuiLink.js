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
            props: { variant: 'flat' },
            style: {
                textDecoration: 'none',
                fontSize: '0.6875rem',
                fontWeight: '600',
                letterSpacing: '0.035rem',
            }
        },
    ]
}

export default MuiLink;