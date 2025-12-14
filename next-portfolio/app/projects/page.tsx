import Menu from '@components/Menu';
import Main from '@components/Main';
import Link from '@components/Link';
import Paragraph from '@components/Paragraph';
import ImageSlider from '@components/ImageSlider';

export default function Projects() {
  return (
    <>
      <Menu />
      <Main>
        <Paragraph>I am quite scarce on the amount of large-scale projects I have built.</Paragraph>
        <Paragraph>Well that is except for the smaller frontend projects I had to complete in the courses I have enrolled or just for fun.</Paragraph>
        <Paragraph>Some of them are represented in the images below and quite a lot of them are in this <Link href='https://github.com/f1ssure/Eensy-Web-Projects/tree/main' target='_blank'>repository</Link>.</Paragraph>
        <ImageSlider />
      </Main>
    </>
  );
}

