import Link from 'next/link';

interface LinkProps {
  children: ReactNode
  href: string
  target?: string
};

export default function({ href, children, target }: LinkProps) {
  return (
    <Link className='text-purple-500 underline' href={href} target={target} scroll={false}>
      {children}
    </Link>
  );
}
