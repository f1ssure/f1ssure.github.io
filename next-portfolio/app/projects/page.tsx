import Menu from '@components/Menu';
import Link from '@components/Link';
import Paragraph from '@components/Paragraph';

export default function Projects() {
  return (
    <div className='flex flex-row mx-auto max-w-5xl md:mt-20 lg:mt-32'>
      <Menu />
      <main className='border border-white w-xl flex flex-col'>
        <div className='mb-20'>
          <h1 className='font-name font-medium text-lg text-white'>GABRIELIUS BAKAS</h1>
        </div>
        <div className='flex flex-col gap-4'>
          {/* add some Paragraphs or something */}
        </div>
      </main>
    </div>
  );
}

