const MuiModal = {
    styleOverrides: {
        root: {
            '.MuiBox-root': {
                position: 'absolute',
                backgroundColor: "#fff",
                width: "500px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "1.5rem 1.5rem",
                outline: "0",
                '@media screen and (max-width: 550px)': {
                    width: '100vw'
                }
            },

        }
    },
}

export default MuiModal;