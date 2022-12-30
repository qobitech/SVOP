import { ILogin, IToken, IUser } from '../interface/IAuth'

import jwtDecode from 'jwt-decode'
interface IResponse {
  user: IUser
  token: IToken
}

const data = localStorage.getItem('userData')
const user: ILogin = data ? JSON.parse(data) : ({} as ILogin)

const { token, ...userDataProps } = user

export const userData: IResponse = {
  user: userDataProps,
  token: token ? jwtDecode(token) : ({} as IToken)
}

export const isLogged = userData.token?.exp
  ? !(userData?.token?.exp * 1000 < Date.now())
  : false

export const userRole = {
  PRESIDING_OFFICER: 'Presiding Officer'
}

export const MAXWIDTH = 1248
export const COLOR = '#7F1AFF'
export const COLOR_SECONDARY = '#FF3232'
export const COLOR_SECONDARY_HOVER = '#D22323'

export const ORGANIZATION = 'NASELS'
export const ORGANIZATION_FULL =
  'The National Association Of Students Of English And Literary Studies'
export const TITLE =
  'The National Association Of Students Of English And Literary Studies (NASELS) Dinner/Award Night Elections.'
export const DESCRIPTION = `NASELS AWARD AND DINNER NIGHT is an annual event hosted by the National Association of Students of English and Literary Studies(NASELS). <br/>This edition is proudly sponsored by Nasels Uniport. It may interest you to know that NASELS is the umbrella body created to cater for the welfare and needs of every student of English studies Department.
A good thing to know is that this year’s Nasels dinner night will feature two exciting events; award presentations to outstanding students and pageantry for Mr/Miss Nasels uniport.`
export const INSTRUCTIONS = `
<ol>
  <li>Click on the <span><a>Get Started</a></span> button.</li>
  <li>Input your <span><a>matriculation number</a></span>.</li>
  <li>Select the category.</li>
  <li>Vote your preferred candidate.</li>
</ol>
`
export const ORGANIZERS = `
<ul>
  <li>Gad Baridoma <span><a>(Nasels Uniport President)</a></span>.</li>
  <li>Destiny Owegwem <span><a>(Chairman Nasels dinner night Planning committee)</a></span>.</li>
  <li>Jane Enyeribe <span><a>(Ag Director of Socials)</a></span>.</li>
  <li>Joy Abolarin <span><a>(Secretary planning committee)</a></span>.</li>
  <li>Chinenye Nwachukwu <span><a>(member)</a></span>.</li>
  <li>Mr Valentine Onwugbolu <span><a>(member)</a></span>.</li>
  <li>Success Godwin <span><a>(member)</a></span>.</li>
</ul>
`
