const MuiButton = {
    defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        style: {
            lineHeight: 1,
        }
    },
    variants: [
        {
            props: {
                variant: 'primary'
            },
            style: {
                width: '100%',
                borderRadius: 0,
                backgroundColor: '#222',
                color: '#fff',
                padding: '1.25rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: '#555',
                },
            },
        },
        {
            props: {
                variant: 'secondary'
            },
            style: {
                width: '100%',
                borderRadius: 0,
                backgroundColor: 'transparent',
                color: '#222',
                padding: '1.25rem 1.5rem',
                border: '1px solid #222',
                fontSize: '1rem',
                fontWeight: '600',
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: 'transparent',
                }
            },
        },
        {
            props: {
                variant: 'cta'
            },
            style: {
                backgroundColor: 'transparent',
                border: '1px solid #222',
                borderRadius: '20px',
                width: 'fit-content',
                padding: '0.75rem 1rem',
                color: '#222',
                fontSize: '1rem',
                fontWeight: '600',
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: 'transparent',
                },
                '&:active': {
                    backgroundColor: '#E50010',
                    border: '1px solid #E50010',
                    cursor: 'default',
                    pointerEvents: 'none',
                    color: '#fff',
                }
            },
        },
        {
            props: {
                variant: 'product'
            },
            style: {
                backgroundColor: 'fff',
                border: '1px solid #fff',
                borderRadius: '0',
                width: 'fit-content',
                padding: '0.5rem',
                color: '#222',
                fontSize: '1rem',
                fontWeight: '600',
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: '#e6e6e6',
                },
                '&:active': {
                    backgroundColor: '#e6e6e6',
                }
            },
        },
        {
            props: {
                variant: 'flat'
            },
            style: {
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '0',
                width: 'fit-content',
                padding: '0',
                color: '#222',
                fontSize: "0.6875rem",
                fontWeight: "500",
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: 'transparent',
                },
                '&:active': {
                    backgroundColor: 'transparent',
                }
            },
        },
        {
            props: {
                variant: 'flat_underline'
            },
            style: {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
                border: 'none',
                borderRadius: '0',
                width: 'fit-content',
                padding: '0',
                color: '#222',
                fontSize: "0.8rem",
                fontWeight: "500",
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: 'transparent',
                },
                '&:active': {
                    backgroundColor: 'transparent',
                }
            },
        },
        {
            props: { variant: 'helper' },
            style: {
                backgroundColor: 'transparent',
                textTransform: 'none',
                border: 'none',
                borderRadius: '0',
                textDecoration: 'none',
                padding: '0',
                width: 'fit-content',
                fontSize: '0.6875rem',
                fontWeight: '500',
                color: '#707070',
                '&:hover': {
                    backgroundColor: 'transparent',
                },
                '&:active': {
                    backgroundColor: 'transparent',
                }
            }
        },
        {
            props: {
                variant: 'arrow_button'
            },
            style: {
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '0',
                padding: '0 26px 0 16px',
                color: '#222',
                fontSize: "0.8125rem",
                fontWeight: "600",
                letterSpacing: "0.035rem",
                '&:hover': {
                    backgroundColor: 'transparent',
                },
                '&:active': {
                    backgroundColor: 'transparent',
                },
                'span svg': {
                    fill: '#222',
                    opacity: 1,
                }
            },
        },
    ],
}

export default MuiButton;