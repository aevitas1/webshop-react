const MuiContainer = {
    variants: [
        {
            props: {
                variant: 'fullWidth'
            },
            style: {
                minWidth: '100%',
                padding: '0',
                '@media screen and (min-width: 600px)': {
                    padding: '0',
                }
            },
        },
        {
            props: {
                variant: 'footerTop'
            },
            style: {
                minWidth: '100%',
                padding: '4rem 2rem 0 2rem',
                backgroundColor: '#e4e4e4',
                '@media screen and (max-width: 64rem)': {
                    paddingTop: '3rem',
                },
                '@media screen and (max-width: 48rem)': {
                    padding: '1rem 1rem 0 1rem',
                },
                display: 'flex',
                justifyContent: 'center',
            },
        },
        {
            props: {
                variant: 'footerBottom'
            },
            style: {
                minWidth: '100%',
                padding: '1.5rem 2rem 4rem 2rem',
                '@media screen and (max-width: 64rem)': {
                    paddingBottom: '3rem',
                },
                '@media screen and (max-width: 48rem)': {
                    padding: '1.5rem 1rem 1rem 1rem',
                },
                backgroundColor: '#e4e4e4',
                display: 'flex',
                justifyContent: 'center',
            },
        },
        {
            props: {
                variant: 'mainMenuItems'
            },
            style: {
                display: 'flex',
                justifyContent: 'space-around',
                gap: '1rem',
                width: '960px',
                '@media (min-width: 600px)': {
                    padding: '3rem 4rem 3rem 4rem',
                }
                // '@media screen and (max-width: 64rem)': {
                //     paddingBottom: '3rem',
                // },
                // '@media screen and (max-width: 48rem)': {
                //     padding: '1.5rem 1rem 1rem 1rem',
                // },
            },
        },
    ]
}

export default MuiContainer;