import { IToken } from '../interface/IAuth'

import jwtDecode from 'jwt-decode'

const data = localStorage.getItem('token')
const token = data ? JSON.parse(data) : null

export const userData: IToken = token ? jwtDecode(token) : ({} as IToken)

export const isLogged = userData?.exp
  ? !(userData?.exp * 1000 < Date.now())
  : false

export const userRole = {
  PRESIDING_OFFICER: 'Presiding Officer'
}

export const MAXWIDTH = 1248
export const COLOR = '#7F1AFF'
export const COLOR_LIGHT = '#EDE0FF'
export const COLOR_SECONDARY = '#FF3232'
export const COLOR_SECONDARY_HOVER = '#D22323'

export const BASE_URL = 'https://svop-be-qobitech.vercel.app/api/v1'

export const ISPAYMENTGATEWAY = false

export const ORGANIZATION = 'NASELS'
export const ORGANIZATION_FULL =
  'The National Association Of Students Of English And Literary Studies'
export const TITLE =
  'The National Association Of Students Of English And Literary Studies (NASELS) Dinner/Award Night Elections.'
export const DESCRIPTION = `NASELS AWARD AND DINNER NIGHT is an annual event hosted by the National Association of Students of English and Literary Studies(NASELS). <br/>This edition is proudly sponsored by Nasels Uniport. It may interest you to know that NASELS is the umbrella body created to cater for the welfare and needs of every student of English studies Department.
A good thing to know is that this year’s Nasels dinner night will feature two exciting events; award presentations to outstanding students and pageantry for Mr/Miss Nasels uniport.`
export const INSTRUCTIONS = isLogged
  ? `
<ol>
  <li>Click on the <span><a>Vote</a></span> button.</li>
  <li>Select the category.</li>
  <li>Vote your preferred candidate.</li>
</ol>
`
  : `
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

export const CATEGORIES = [
  {
    id: 1,
    title: 'Best Dressed (Female Category)',
    contestants: [
      { name: 'Akaforonye Paula Nmesoma' },
      { name: 'Anthony Chidera Anita' },
      { name: 'Ndiongo George' }
    ]
  },
  {
    id: 2,
    title: 'Best Dressed (Male Category)',
    contestants: [
      { name: 'Princelight Michael' },
      { name: 'Olasanmi Ayodele Godswill' },
      { name: 'Obiukwu Ifechukwu Ifeanyi' }
    ]
  },
  {
    id: 3,
    title: 'Entrepreneur Of The Year',
    contestants: [
      { name: 'Anita Lewis ' },
      { name: 'Janet' },
      { name: 'Fortune ClementTelimoye' }
    ]
  },
  {
    id: 4,
    title: 'Most Popular',
    contestants: [
      { name: 'Bassey Nyong' },
      { name: 'Anuforo Serwaa Chigozie' },
      { name: 'Saint' }
    ]
  },
  {
    id: 5,
    title: 'Most Influential',
    contestants: [
      { name: 'Ekesiba Praise Chukwumeniem' },
      { name: 'Anuforo Serwaa Chigozie' },
      { name: 'Irene' }
    ]
  },
  {
    id: 5,
    title: 'Most Intelligent',
    contestants: [
      { name: 'Chimsimdi Stephanie Onyeakaruru' },
      { name: 'Ndiongno George Udo' },
      { name: 'Chituru' }
    ]
  },
  {
    id: 6,
    title: 'Comic Of The Year',
    contestants: [
      { name: 'Chimsimdi Stephanie Onyeakaruru' },
      { name: 'Ndiongno George Udo' },
      { name: 'Chituru' }
    ]
  }
]

export const URL = 'https://naselsuniport.com/'

export const ADMIN = 'qobi-admin'

const matNum = userData?._doc?.matriculationNumber

export const ISADMIN = matNum === ADMIN

export const SHOWRESULTPAGE =
  isLogged &&
  (matNum === 'U2017/1810067' ||
    matNum === 'U2017/1810086' ||
    matNum === ADMIN ||
    matNum === 'U2018/1810128')
