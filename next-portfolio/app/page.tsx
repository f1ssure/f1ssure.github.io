import Menu from '@components/Menu';
import Main from '@components/Main';
import Link from '@components/Link';
import Paragraph from '@components/Paragraph';

export default function Home() {
  return (
    <>
      <Menu />
      <Main className='w-2xl flex flex-col'>
        <div className='mb-20 mt-1'>
          <h1 className='font-name font-medium text-lg text-white'>GABRIELIUS BAKAS</h1>
        </div>
        <div className='flex flex-col gap-4'>
          <Paragraph>Hi! My name is Gabrielius Bakas and I am a frontend developer.</Paragraph>
          <Paragraph>I currently study in Vilnius, Lithuania.</Paragraph>
          <Paragraph>Whenever I find a free minute, I try to learn on the side of university. I enroll in various courses or read books to gain new knowledge, which I later apply in <Link href='https://github.com/f1ssure'>personal</Link> projects.</Paragraph>
          <Paragraph>Have an inquiry? Send me an email or contact me <Link href='/contact'>here</Link>.</Paragraph>
        </div>
      </Main>
    </>
  );
}
