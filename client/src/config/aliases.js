/* eslint-disable no-undef */

const aliases = (prefix = 'src') => ({
  '@config': `${prefix}/config`,
  '@components': `${prefix}/components`,
  '@app': `${prefix}/app`,
  '@theme': `${prefix}/theme`,
  '@services': `${prefix}/services`,
  '@routes': `${prefix}/routes`,
})

// module.exports = aliases

export default aliases
