import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagramSquare, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { LINKS } from '@/constants/links';

// Array of social media links with respective icons
const socialLinks = [
  { href: LINKS.instagram, icon: faInstagramSquare },
  { href: LINKS.youtube, icon: faYoutube },
  { href: LINKS.discord, icon: faDiscord },
  { href: LINKS.telegram, icon: faTelegram },
];


const SocialMediaLinks = ({className}:{className?:string}) => {
  return (
    <>
    {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          className={className}
        >
          <FontAwesomeIcon icon={link.icon} />
        </Link>
      ))}
      </>
  )
}

export default SocialMediaLinks