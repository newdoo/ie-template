import network from './network'

export const mailSupport = async(email, message) => await network('user', 'mail', {email, message})