module.exports = {
  darkMode: false, // or 'media' or 'class'
  important: true,
  prefix: "tw-",
  theme: {
    fontSize: {
      // 12px
      xs: [
        "0.75rem",
        {
          letterSpacing: "-0.01em",
          lineHeight: "100%",
        },
      ],
      // 15px
      sm: [
        "0.9375rem",
        {
          letterSpacing: "-0.02em",
          lineHeight: "140%",
        },
      ],
      // 16px
      base: [
        "1rem",
        {
          letterSpacing: "-0.02em",
          lineHeight: "150%",
        },
      ],
      // 18px
      lg: [
        "1.125rem",
        {
          letterSpacing: "-0.02em",
          lineHeight: "140%",
        },
      ],
      // 20px
      xl: [
        "1.25rem",
        {
          letterSpacing: "-0.04em",
          lineHeight: "110%",
        },
      ],
      // 24px
      "2xl": [
        "1.5rem",
        {
          letterSpacing: "-0.04em",
          lineHeight: "95%",
        },
      ],
      // 32px
      "3xl": [
        "2rem",
        {
          letterSpacing: "-0.035em",
          lineHeight: "95%",
        },
      ],
      // 36px
      "4xl": [
        "2.25rem",
        {
          letterSpacing: "-0.03em",
          lineHeight: "130%",
        },
      ],
      // 40px
      "5xl": [
        "2.5rem",
        {
          letterSpacing: "-0.04em",
          lineHeight: "95%",
        },
      ],
      // 48px
      "6xl": [
        "3rem",
        {
          letterSpacing: "-0.045em",
          lineHeight: "95%",
        },
      ],
      // 50px
      "7xl": [
        "3.125rem",
        {
          letterSpacing: "-0.045em",
          lineHeight: "95%",
        },
      ],
      // 54px
      "8xl": [
        "3.375rem",
        {
          letterSpacing: "-0.06em",
          lineHeight: "65px",
        },
      ],
      // 64px
      "9xl": [
        "4rem",
        {
          letterSpacing: "-0.045em",
          lineHeight: "95%",
        },
      ],
    },
    colors: {
      button: {
        0: "#6B5FED",
        1: "#64CBD0",
      },
      bkg: {
        0: "#292960",
        1: "#423D95",
      },
      ukraine: {
        0: "#0057b7",
        1: "#ffd700",
      },
      black: {
        50: "#f4f4f4",
        100: "#e9e9e9",
        200: "#c8c8c8",
        300: "#a7a7a7",
        400: "#646464",
        500: "#222222",
        600: "#1e1e1e",
        700: "#1a1a1a",
        800: "#141414",
        900: "#111111",
      },
      coral: {
        50: "#fef8f8",
        100: "#fdf0f0",
        200: "#fadada",
        300: "#f6c3c3",
        400: "#f09797",
        500: "#E96A6A",
        600: "#d25f5f",
        700: "#af5050",
        800: "#8c4040",
        900: "#723434",
      },
      deepOrange: {
        50: "#fef7f4",
        100: "#fdeee9",
        200: "#f9d5c7",
        300: "#f6bca5",
        400: "#ef8a62",
        500: "#E8581E",
        600: "#d14f1b",
        700: "#ae4217",
        800: "#8b3512",
        900: "#722b0f",
      },
      gray: {
        100: "#ECECEC",
        200: "#AAAAAA",
        300: "#8A8A8A",
        400: "#6A6A6A",
        500: "#3D3D3D",
        600: "#1E1E1E",
      },
      green: {
        50: "#f5fbf4",
        100: "#ebf6e8",
        200: "#cde9c6",
        300: "#aedba3",
        400: "#72c15f",
        500: "#35A61A",
        600: "#309517",
        700: "#287d14",
        800: "#206410",
        900: "#1a510d",
      },
      mauve: {
        50: "#fbf8fb",
        100: "#f7f2f8",
        200: "#eadeed",
        300: "#ddcae2",
        400: "#c4a2cd",
        500: "#AA7AB7",
        600: "#996ea5",
        700: "#805c89",
        800: "#66496e",
        900: "#533c5a",
      },
      orange: {
        50: "#fefaf6",
        100: "#fcf5ed",
        200: "#f8e7d2",
        300: "#f4d8b6",
        400: "#ebba80",
        500: "#E39D49",
        600: "#cc8d42",
        700: "#aa7637",
        800: "#885e2c",
        900: "#6f4d24",
      },
      paper: {
        50: "#fffefe",
        100: "#fefefe",
        200: "#fdfcfb",
        300: "#fcfbf9",
        400: "#faf7f5",
        500: "#F8F4F0",
        600: "#dfdcd8",
        700: "#bab7b4",
        800: "#959290",
        900: "#7a7876",
      },
      tileBackground: {
        0: "#081131",
        1: "#22255D",
      },
      filterColors: {
        0: "#FBBC09",
        1: "#80CC28",
        2: "#F1511B",
        3: "#00ADEF",
        4: "#E74D89",
        5: "#FFED4F",
        6: "#4FF99D",
        7: "#F1511B",
        8: "#FF007F",
        9: "#D3D3D3",
        10: "#EE4B2B",
        11: "#BEFDFE",
      },
      purpleBlue: {
        1: "#23255F",
        50: "#f5f4fa",
        100: "#ebe9f5",
        200: "#ccc8e6",
        300: "#ada6d6",
        400: "#7064b8",
        500: "#332199",
        600: "#2e1e8a",
        700: "#261973",
        800: "#1f145c",
        900: "#19104b",
      },
      sunshine: {
        50: "#fffcf4",
        100: "#fff9e8",
        200: "#fff1c6",
        300: "#fee8a3",
        400: "#fed65f",
        500: "#FDC51A",
        600: "#e4b117",
        700: "#be9414",
        800: "#987610",
        900: "#7c610d",
      },
      wave: {
        50: "#f8fafe",
        100: "#f2f5fd",
        200: "#dde5fa",
        300: "#c9d6f7",
        400: "#a1b7f0",
        500: "#7898EA",
        600: "#6c89d3",
        700: "#5a72b0",
        800: "#485b8c",
        900: "#3b4a73",
      },
      white: {
        0: "#ffffff",
        50: "#ffffff",
        100: "#ffffff",
        200: "#ffffff",
        300: "#ffffff",
        400: "#ffffff",
        500: "#FFFFFF",
        600: "#e6e6e6",
        700: "#bfbfbf",
        800: "#999999",
        900: "#7d7d7d",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        franklinGothic: ["Franklin Gothic"],
        poppins: ["Poppins"],
        poppinsSemibold: ["Poppins-Semibold"],
        poppinsBold: ["Poppins-Bold"],
      },
      width: {
        302: "302px",
        325: "325px",
      },
      height: {
        520: "520px",
        732: "732px",
      },
    },
  },
  // variants: {
  //   extend: {
  //     opacity: ["disabled"],
  //   },
  // },
};
