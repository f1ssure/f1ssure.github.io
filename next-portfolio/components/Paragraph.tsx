interface ParagraphProps {
  children: ReactNode
}

export default function Paragraph({ children }: ParagraphProps) {
  return (
    <p className='font-text text-[17.25px] dark:text-zinc-300'>
      {children}
    </p>
  );
};
