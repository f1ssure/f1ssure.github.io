import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

const icons = [
  {
    href: 'mailto:contact@f1ssure.com',
    icon: faEnvelope,
  },
  {
    href: 'https://github.com/f1ssure',
    icon: faGithub,
  },
  {
    href: 'www.linkedin.com/in/gabrielius-bakas-00a564244',
    icon: faLinkedin,
  }
];

interface IconProps {
  href: string,
  icon: any,
};

function Icon({ href, icon }: IconProps) {
  return (
    <div className='size-4'>
      <Link href={href}>
        <FontAwesomeIcon icon={icon} className='brightness-70 hover:invert-35 dark:hover:invert-0 dark:hover:brightness-60' />
      </Link>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className='flex flex-row justify-between mt-10 lg:mt-20'>
      <p className='text-[15px]'>© 2025 Gabrielius Bakas.</p>
      <div className='flex flex-row gap-2.5 items-center'>
        {icons.map((icon) => (
          <Icon key={icon.href} href={icon.href} icon={icon.icon} />
        ))}
      </div>
    </footer>
  );
};
