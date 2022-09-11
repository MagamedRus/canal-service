const sizeScreens = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tabletS: "525px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const deviceSizes = {
  mobileS: `(max-width: ${sizeScreens.mobileS})`,
  mobileM: `(max-width: ${sizeScreens.mobileM})`,
  mobileL: `(max-width: ${sizeScreens.mobileL})`,
  tabletS: `(max-width: ${sizeScreens.tabletS})`,
  tablet: `(max-width: ${sizeScreens.tablet})`,
  laptop: `(max-width: ${sizeScreens.laptop})`,
  laptopL: `(max-width: ${sizeScreens.laptopL})`,
  desktop: `(max-width: ${sizeScreens.desktop})`,
};

export const onlyDeviceSizes = {
  mobileS: `(max-width: ${sizeScreens.mobileS})`,
  mobileM: `(min-width: ${sizeScreens.mobileS}) and (max-width: ${sizeScreens.mobileM})`,
  mobileL: `(min-width: ${sizeScreens.mobileM}) and (max-width: ${sizeScreens.mobileL})`,
  tabletS: `(min-width: ${sizeScreens.mobileL}) and (max-width: ${sizeScreens.tabletS})`,
  tablet: `(min-width: ${sizeScreens.tabletS}) and (max-width: ${sizeScreens.tablet})`,
  laptop: `(min-width: ${sizeScreens.tablet}) and (max-width: ${sizeScreens.laptop})`,
  laptopL: `(min-width: ${sizeScreens.laptop}) and (max-width: ${sizeScreens.laptopL})`,
  desktop: `(min-width: ${sizeScreens.laptopL}) and (max-width: ${sizeScreens.desktop})`,
};
