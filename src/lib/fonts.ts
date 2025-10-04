import localFont from 'next/font/local'

const sfProRegular = localFont({
  src: '../styles/fonts/SFPRODISPLAYREGULAR.woff2',
  variable: '--font-sf-pro-regular'
})

const sfProMedium = localFont({
  src: '../styles/fonts/SFPRODISPLAYMEDIUM.woff2',
  variable: '--font-sf-pro-medium'
})

const sfProBold = localFont({
  src: '../styles/fonts/SFPRODISPLAYBOLD.woff2',
  variable: '--font-sf-pro-bold'
})

export const sfProDisplay = {
  regular: sfProRegular,
  medium: sfProMedium,
  bold: sfProBold,
}