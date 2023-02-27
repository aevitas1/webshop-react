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
            props: {
                variant: 'link_footer',
                style: {
                    fontSize: '0.625rem',
                    fontWeight: '500',
                    letterSpacing: '0.035rem',
                    lineHeight: '2.2',
                },
            },
        }
    ]
}

export default MuiLink;