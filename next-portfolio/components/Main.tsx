import Footer from '@components/Footer';

interface MainProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode,
};

export default function Main({ children, ...props }: MainProps) {
  return (
    <main {...props}>
      <div className='mb-20 mt-1'>
        <h1 className='font-name font-semibold text-lg dark:text-white'>GABRIELIUS BAKAS</h1>
      </div>
      <div className='flex flex-col gap-4'>
        {children}
      </div>
      <Footer />
    </main>
  );
};
