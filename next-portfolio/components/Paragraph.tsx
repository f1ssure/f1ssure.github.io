interface ParagraphProps {
  children: ReactNode
}

export default function Paragraph({ children }: ParagraphProps) {
  return (
    <p className='font-text dark:text-zinc-300'>
      {children}
    </p>
  );
};
