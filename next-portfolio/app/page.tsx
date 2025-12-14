import Menu from '@components/Menu';
import Main from '@components/Main';
import Link from '@components/Link';
import Paragraph from '@components/Paragraph';

export default function Home() {
  return (
    <>
      <Menu />
      <Main className='w-2xl flex flex-col'>
        <Paragraph>Hi! Online, my name is <Link href='https://github.com/f1ssure' target='_blank'>f1ssure</Link>, and I am a junior software developer.</Paragraph>
        <Paragraph>I currently study in Vilnius, Lithuania.</Paragraph>
        <Paragraph>Whenever I find a free minute, I try to learn on the side of university. I enroll in various courses or read books to gain new knowledge, which I later apply in <Link href='https://github.com/f1ssure' target='_blank'>personal</Link> projects.</Paragraph>
        <Paragraph>Have an inquiry? Send me an email or contact me <Link href='/contact'>here</Link>.</Paragraph>
      </Main>
    </>
  );
}
