'use client';
import { useEffect, useState } from 'react';
import { usePathname} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/portfolio-logo.svg';

const logoPath = '@/public/portfolio-logo.svg';
const initialLinks = [
  {
    text: 'About',
    id: '/',
    href: '/',
    highlighted: false
  },
  {
    text: 'Projects',
    id: '/projects',
    href: '/projects',
    highlighted: false
  },
  {
    text: 'Contact',
    id: '/contact',
    href: '/contact',
    highlighted: false
  }
];

export default function Menu() {
  const uri: string = usePathname();
  const [links, setLinks] = useState(initialLinks);

  useEffect(() => {
    const prevLinks = [...links];
    setLinks(prevLinks.map(link => ({
      ...link,
      highlighted: link.id === uri,
    })));
  }, [uri]);

  return (
    <aside className='-ml-1.5 w-52'>
      <div className='lg:sticky lg:top-20'>
        <div className='mb-20'>
          <div className='w-fit ml-2 mt-0.35'>
            <Link href='/'>
              <Image src={Logo} width='36' height='36' alt='Logo' />
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-1.5 text-sm'>
          {links.map((link) =>
              <div key={link.id} className='flex flex-row items-center w-fit gap-1.5'>
                <div className={(link.highlighted ? 'scale-100' : 'scale-0') + ' size-1.5 bg-purple-500 rounded-full transition-transform duration-150'}></div>
                <Link
                  id={link.id}
                  href={link.href}
                  className={(link.highlighted ? 'text-purple-500 text-[14.15px]' : '') + ' font-sans'}
                >
                  {link.text}
                </Link>
              </div>
           )}
        </div>
      </div>
    </aside>
  );
};
