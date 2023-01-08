import React from 'react'
import { Separator } from '../../pages/landing/styled'

interface ISBCD {
  title: string
  description: string
  url: string
}

export const ShareBlogComponentData = ({ title, description, url }: ISBCD) => {
  const desc =
    description.length > 139
      ? description.substring(0, 137) + '...'
      : description
  const cta = 'Read More'
  return [
    {
      id: 1,
      href: encodeURI(
        `https://twitter.com/intent/tweet?text=${desc}. ${cta} : ${url}`
      ),
      title,
      dataAction: '',
      name: 'Twitter',
      icon: 'fab fa-twitter'
    },
    {
      id: 2,
      href: encodeURI(
        `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${desc}. ${cta} : ${url}&source=Linkedin`
      ),
      title,
      dataAction: '',
      name: 'Linkedin',
      icon: 'fab fa-linkedin'
    },
    {
      id: 3,
      href: `https://wa.me/?text=${desc}. ${cta} : ${url}`,
      title: encodeURI(`${title}`),
      dataAction: 'share/whatsapp/share',
      name: 'Whatsapp',
      icon: 'fab fa-whatsapp'
    },
    {
      id: 4,
      href: `mailto:?subject=${title}&body=${desc} ${cta} : ${url}`,
      title,
      dataAction: '',
      name: 'Email',
      icon: 'fas fa-envelope'
    },
    {
      id: 6,
      href: `viber://forward?text=${encodeURIComponent(
        desc + `. ${cta}: ` + url
      )}`,
      title,
      dataAction: '',
      name: 'Viber',
      icon: 'fab fa-viber'
    },
    {
      id: 7,
      href: `https://telegram.me/share/url?url=${url}&text=${desc}`,
      title,
      dataAction: '',
      name: 'Telegram',
      icon: 'fab fa-telegram'
    }
  ]
}

interface ISC {
  title: string
  dataAction: string
  href: string
  name: string
  icon: string
}

export const ShareComponent: React.FC<ISC> = ({
  href,
  title,
  dataAction,
  name,
  icon
}) => {
  return (
    <span className="border-bottom d-block w-100">
      <a
        href={href}
        data-action={dataAction}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className="w-100 bg-hover"
        style={{ textDecoration: 'none', fontSize: '13px', color: '#444' }}
      >
        <Separator customheight={1} />
        <li className="border-0 d-flex justify-content-between align-items-center">
          &nbsp;{name}
          <i className={`${icon} mr-2`} />
        </li>
        <Separator customheight={0} />
        <Separator customheight={1} />
      </a>
    </span>
  )
}
