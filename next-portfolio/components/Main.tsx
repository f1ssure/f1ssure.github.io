import Footer from '@components/Footer';

interface MainProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode,
};

export default function Main({ children, ...props }: MainProps) {
  return (
    <main {...props} className='flex flex-col w-11/12 sm:w-xl md:w-2xl'>
      <div className='mb-20 mt-1 hidden lg:block'>
        <h1 className='font-name font-semibold text-lg dark:text-white'>GABRIELIUS BAKAS</h1>
      </div>
      <div className='flex flex-col gap-4'>
        {children}
      </div>
      <Footer />
    </main>
  );
};
