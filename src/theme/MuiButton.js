const MuiButton = {
    defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        style: {
            fontSize: '1rem',
            textTransform: 'none',
            lineHeight: 1,
            fontWeight: '600',
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
                padding: '1.5rem 2rem',
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
                padding: '1.5rem 2rem',
                border: '1px solid #222',
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
                '&:hover': {
                    backgroundColor: '#e6e6e6',
                },
                '&:active': {
                    backgroundColor: '#e6e6e6',
                }
            },
        },
    ],
}

export default MuiButton;