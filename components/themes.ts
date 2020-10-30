const light = {
    bg: {
        primary: '#93c5ed',
        secondary: '#5e9be0',
        inset: '#e2e4e8',
        input: 'rgba(65,67,78,0.12)',
        nav: '#437dbf',
        aboutMe: 'linear-gradient(to right, #5e9be0, #c8d8e3)',
        card: 'linear-gradient(to right, #5e9be0, #c8d8e3)'
    },
    text: {
        primary: '#fbfbfc',
        secondary: '#2f3037',
        tertiary: '#525560',
        quarternary: '#9194a1',
        placeholder: 'rgba(82,85,96,0.5)',
        onPrimary: '#ffffff'
    },
    border: {
        card: '1px solid #18304d'
    },
    dark: false
    // ...
}

const dark = {
    bg: {
        primary: '#162333',
        secondary: '#162333',
        inset: '#111111',
        input: 'rgba(191,193,201,0.12)',
        nav: '#18304d',
        aboutMe: 'linear-gradient(to right, #162333, #3160d6)',
        card: 'linear-gradient(to right, #162333, #3160d6)'
    },
    text: {
        primary: '#fbfbfc',
        secondary: '#e3e4e8',
        tertiary: '#a9abb6',
        quarternary: '#6c6f7e',
        placeholder: 'rgba(145,148,161,0.5)',
        onPrimary: '#050505'
    },
    border: {
        card: '2px solid #3979ad'
    },
    dark: true
    // ...
}

const defaultTheme = {
    fontSizes: [
        '14px', // 0
        '16px', // 1
        '18px', // 2
        '22px', // 3
        '26px', // 4
        '32px', // 5
        '40px'  // 6
    ],
    fontWeights: {
        body: 400,
        subheading: 500,
        link: 600,
        bold: 700,
        heading: 800,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.3,
        code: 1.6,
    },
    transition: {
        primary: 'all 300ms linear 0s',
        bg: 'background 300ms linear 0s',
        opacity: 'opacity 200ms ease'
    }
    // ...
};

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }