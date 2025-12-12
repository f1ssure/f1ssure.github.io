'use client';
import { HeroUIProvider, Button, Spinner } from '@heroui/react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { SubmitContactForm } from './submit';
import Menu from '@components/Menu';
import Main from '@components/Main';
import Link from '@components/Link';
import Paragraph from '@components/Paragraph';

{/* TODO: make <Spinner/> work */}
{/* TODO: make custom state hook in the submission logic file and use it for UI updates */}
{/* TODO: implement the underlying submission function that sends an email */}

export default function Contact() {
  // use the state from submit.ts

  return (
    <>
      <Menu />
      <Main className='w-xl flex flex-col'>
        <Formik
          initialValues={{
            email: '',
            subject: '',
            text: '',
          }}
          onSubmit={(values) => {
            // SubmitContactForm(...values);
          }}
          validationSchema={Yup.object({
            email: Yup.string().required('Required').email('Invalid email address'),
            subject: Yup.string().required('Required'),
            text: Yup.string().required('Required').min(25, 'Must be at least 25 characters'),
          })}
        >
          {(props: FormikProps<any>) => (
            <Form>
              <div className='flex flex-col gap-5 w-4/5 text-sm'>
                <label>
                  Email:
                  <Field className='w-full px-2 py-1 rounded-lg border border-zinc-300/50 outline-none focus:border-zinc-500/75 dark:focus:border-zinc-300/75 shadow-xs shadow-zinc-400 dark:shadow-none text-sm mt-2' type='email' name='email' placeholder='Enter your email address' />
                  <div className='text-purple-500 text-xs h-1.5'>
                    <ErrorMessage name='email'>{msg => <span>* {msg}</span>}</ErrorMessage>
                  </div>
                </label>
                <label>
                  Subject:
                  <Field className='w-full px-2 py-1 rounded-lg border border-zinc-300/50 outline-none focus:border-zinc-500/75 dark:focus:border-zinc-300/75 shadow-xs shadow-zinc-400 dark:shadow-none text-sm mt-2' type='text' name='subject' placeholder='Enter subject' />
                  <div className='text-purple-500 text-xs h-1.5'>
                    <ErrorMessage name='subject'>{msg => <span>* {msg}</span>}</ErrorMessage>
                  </div>
                </label>
                <label>
                  Message:
                  <Field className='w-full px-2 py-1 rounded-lg border border-zinc-300/50 outline-none focus:border-zinc-500/75 dark:focus:border-zinc-300/75 shadow-xs shadow-zinc-400 dark:shadow-none text-sm mt-2 h-45' as='textarea' name='text' placeholder='Your message...' />
                  <div className='text-purple-500 text-xs h-1.5'>
                    <ErrorMessage name='text'>{msg => <span>* {msg}</span>}</ErrorMessage>
                  </div>
                </label>
              </div>
              <HeroUIProvider className='flex flex-row items-center gap-3 mt-6'>
                <Button type='submit' className='bg-transparent rounded-sm duration-150 outline-[1.5px] hover:outline-0 outline-purple-600 active:scale-95 hover:bg-purple-600 text-purple-600 hover:text-white px-3 py-1.25 overflow-hidden'>
                  Send
                </Button>
                <Spinner aria-label='Loading...' className='animate-spin-fast pointer-events-none size-10 origin-center' />
              </HeroUIProvider>
            </Form>
          )}
        </Formik>
      </Main>
    </>
  );
}
