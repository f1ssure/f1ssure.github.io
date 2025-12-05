import Menu from '@components/Menu';
import Main from '@components/Main';
import Link from '@components/Link';
import Paragraph from '@components/Paragraph';

export default function Projects() {
  return (
    <>
      <Menu />
      <Main className='w-xl flex flex-col'>
        <div className='mb-20'>
          <h1 className='font-name font-medium text-lg text-white'>GABRIELIUS BAKAS</h1>
        </div>
        <div className='flex flex-col gap-4'>
          {/* add some Paragraphs or something */}
        </div>
      </Main>
    </>
  );
}

