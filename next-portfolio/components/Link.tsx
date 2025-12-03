interface LinkProps {
  children: ReactNode
  href: string
};

export default function Link({ href, children }: LinkProps) {
  return (
    <a className='text-purple-500 underline' href={href}>
      {children}
    </a>
  );
}
