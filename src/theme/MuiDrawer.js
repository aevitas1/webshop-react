const MuiDrawer = {
    styleOverrides: {
        root: {
            '.MuiPaper-root': {
                width: '384px',
                backgroundColor: '#faf9f8',
                overflowX: "hidden",
                '@media screen and (max-width: 768px)': {
                    width: '85vw'
                },
            }

        }
    }
}

export default MuiDrawer;