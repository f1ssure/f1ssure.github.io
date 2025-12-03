import Link from 'next/link';

export default function Menu() {
  return (
    <aside className='border border-white w-50'>
      <div className='mb-20'>
        LOGO
      </div>
      <div className='flex flex-col gap-1.5 text-sm'>
        <Link id='/' href='/'>About</Link>
        <Link id='/projects' href='/projects'>Projects</Link>
        <Link id='/contact' href='/contact'>Contact</Link>
      </div>
    </aside>
  );
};
