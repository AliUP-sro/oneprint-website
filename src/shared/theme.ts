

export const colors = {
    white: '#FFFFFF',
    black: '#000000',
    lighterBlack: '#131416',

    // Text color
    text: '#393C44',

    // Blobs
    blobs: {
        lightRed: '#FDF1ED',
        lightYellow: '#F8FAEB',
        lightBlue: '#EFF7F9',
    },

    // Cards
    cardBackground: '#F7F7F7',

    // Main page cards
    mainPageCards: {
        orange: '#E7764D',
        blue: '#62AEBE',
        green: '#64BD9C',
        black: '#3A3C43',
        slime: '#BDC940'
    },

    // Pricing
    pricing: {
        blue: '#07699A',
        lightBlue: '#F5F6F8'
    }
};

export const pxToRem = (px: number): string => `${px / 16}rem`;

export const typography = {
    fontFamily: '"Raleway", sans-serif',
    fontSize: {
        // https://type-scale.com/?size=16&scale=1.250&text=A%20Visual%20Type%20Scale&font=Raleway&fontweight=400&bodyfont=body_font_default&bodyfontweight=400&lineheight=1.75&backgroundcolor=%23ffffff&fontcolor=%23000000&preview=false
        [39]: pxToRem(39.06),
        [31]: pxToRem(31.25),
        [25]: pxToRem(25),
        [20]: pxToRem(20),
        [16]: pxToRem(16),
        [12]: pxToRem(12.8),
        [10]: pxToRem(10.24)
    },
    fontWeight: {
        xlight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
    },
};