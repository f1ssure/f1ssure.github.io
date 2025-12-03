import Menu from '@components/Menu';
import Link from '@components/Link';
import Paragraph from '@components/Paragraph';

export default function Home() {
  return (
    <div className='flex flex-row mx-auto max-w-5xl md:mt-20 lg:mt-32'>
      <Menu />
      <main className='border border-white w-xl flex flex-col'>
        <div className='mb-20 mt-1'>
          <h1 className='font-name font-medium text-lg text-white'>GABRIELIUS BAKAS</h1>
        </div>
        <div className='flex flex-col gap-4'>
          {/* should call other  */}
          <Paragraph>Hi! My name is Gabrielius Bakas and I am a Front-end Developer.</Paragraph>
          <Paragraph>I currently study in Vilnius, Lithuania.</Paragraph>
          <Paragraph>Whenever I find a free minute, I try to learn on the side of university. I enroll in various courses or read books to gain new knowledge, which I later apply in <Link href='https://github.com/f1ssure'>personal</Link> projects.</Paragraph>
        </div>
      </main>
    </div>
  );
}
