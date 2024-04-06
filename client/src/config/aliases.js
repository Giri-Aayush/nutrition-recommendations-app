/* eslint-disable no-undef */

const aliases = (prefix = 'src') => ({
  '@config': `${prefix}/config`,
  '@components': `${prefix}/components`,
  '@app': `${prefix}/app`,
  '@theme': `${prefix}/theme`,
  '@hooks': `${prefix}/hooks`,
  '@assets': `${prefix}/assets`,
  '@services': `${prefix}/services`,
  // '@utility': `${prefix}/utility`,
  '@routes': `${prefix}/routes`,
  '@address': `${prefix}/routes.address.js`,
})

// module.exports = aliases

export default aliases
