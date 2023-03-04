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
                    fontSize: '0.8125rem',
                    paddingLeft: '0.25rem'
                },
                '.MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                },
                '.MuiInputBase-root': {
                    '&:hover': {
                        '&::before': {
                            borderBottom: '1px solid rgba(0, 0, 0, 0.42)'
                        }
                    },
                    '&::after': {
                        borderBottom: '1px solid rgba(0, 0, 0, 0.42)'
                    }
                },
                '.MuiInputLabel-root': {
                    fontSize: '0.8125rem',
                    paddingLeft: '0.25rem'

                },
            },
            '&.search_mobile': {
                '.MuiInputBase-input': {
                    border: 'none',
                    borderBottom: 'none',
                    fontSize: '0.8125rem',
                    paddingLeft: '1rem'
                },
                '.MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                },
                '.MuiInputBase-root': {
                    '&:hover': {
                        '&::before': {
                            border: 'none'
                        }
                    },
                    '&::before': {
                        border: 'none'
                    },
                    '&::after': {
                        border: 'none'
                    }
                },
                '.MuiInputLabel-root': {
                    fontSize: '0.8125rem',
                    paddingLeft: '1rem'

                },
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