const MuiDrawer = {
    styleOverrides: {
        root: {
            '.MuiPaper-root': {
                width: '384px',
                backgroundColor: '#faf9f8',
                '@media screen and (max-width: 768px)': {
                    width: '85vw'
                },
            }

        }
    }
}

export default MuiDrawer;