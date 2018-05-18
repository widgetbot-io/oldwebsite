export const root =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''

export const embed = `${root}/channels`

export const demo = `${embed}/299881420891881473/355719584830980096/`
