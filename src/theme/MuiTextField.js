const TextField = {
    styleOverrides: {
        root: {
            '.MuiFormHelperText-root': {
                color: 'red',
                fontSize: '12px',
                marginLeft: '0',
                textAlign: 'center'
            },
            '.MuiInputBase-root': {
                borderRadius: '0',
                fontSize: '1rem',
                '&::placeholder': {
                    fontSize: '1rem',
                },
            },
            '&.search': {
                '.MuiInputBase-input': {
                    border: 'none',
                    borderBottom: '1px solid #222',
                },
                '.MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                }
            },
            '&.login': {
                marginTop: '1rem',
                '.MuiFormLabel-root': {
                    paddingRight: '0.25rem', backgroundColor: '#fff'
                },
            },
            '&.birthdate': {
                width: '33%',
                '.MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                },
                '.MuiFormLabel-root': {
                    paddingRight: '0.25rem', backgroundColor: '#fff',
                    left: '2rem',
                    '@media screen and (max-width: 550px)': {
                        left: '0rem'
                    }
                },
                '.MuiInputBase-input': {
                    textAlign: 'center'
                }
            }
        }
    }
}

export default TextField;