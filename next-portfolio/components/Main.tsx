import Footer from '@components/Footer';

interface MainProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode,
};

export default function Main({ children, ...props }: MainProps) {
  return (
    <main {...props}>
      {children}
      <Footer />
    </main>
  );
};
