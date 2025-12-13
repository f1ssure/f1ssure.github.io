'use client';
import { useState, useEffect, useRef } from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useSubmit from './submit';
import Menu from '@components/Menu';
import Main from '@components/Main';
import Link from '@components/Link';
import Paragraph from '@components/Paragraph';
import Spinner from '@components/Spinner';
import { Check, X } from 'lucide-react';

export default function Contact() {
  const { isLoading, response, submit } = useSubmit();
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const formikRef = useRef();

  useEffect(() => {
    if (response !== null) {
      if (response.error) {
        setFail(true);
      } else {
        setSuccess(true);
        formikRef.current.resetForm();
      }

      setTimeout(() => {
        setFail(false);
        setSuccess(false);
      }, 2000)

      return () => {
        setFail(false);
        setSuccess(false);
      }
    }
  }, [response]);

  return (
    <>
      <Menu />
      <Main className='w-xl flex flex-col'>
        <Formik
          innerRef={formikRef}
          initialValues={{
            email: '',
            subject: '',
            text: '',
          }}
          onSubmit={(values) => {
            submit({...values});
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
                  <Field className='w-full px-2 py-1 rounded-lg border border-zinc-300/50 outline-none focus:border-zinc-500/75 dark:focus:border-zinc-300/25 shadow-xs shadow-zinc-400 dark:shadow-none text-sm mt-2' type='email' name='email' placeholder='Enter your email address' />
                  <div className='text-purple-500 text-xs h-1.5'>
                    <ErrorMessage name='email'>{msg => <span>* {msg}</span>}</ErrorMessage>
                  </div>
                </label>
                <label>
                  Subject:
                  <Field className='w-full px-2 py-1 rounded-lg border border-zinc-300/50 outline-none focus:border-zinc-500/75 dark:focus:border-zinc-300/25 shadow-xs shadow-zinc-400 dark:shadow-none text-sm mt-2' type='text' name='subject' placeholder='Enter subject' />
                  <div className='text-purple-500 text-xs h-1.5'>
                    <ErrorMessage name='subject'>{msg => <span>* {msg}</span>}</ErrorMessage>
                  </div>
                </label>
                <label>
                  Message:
                  <Field className='w-full px-2 py-1 rounded-lg border border-zinc-300/50 outline-none focus:border-zinc-500/75 dark:focus:border-zinc-300/25 shadow-xs shadow-zinc-400 dark:shadow-none text-sm mt-2 h-45' as='textarea' name='text' placeholder='Your message...' />
                  <div className='text-purple-500 text-xs h-1.5'>
                    <ErrorMessage name='text'>{msg => <span>* {msg}</span>}</ErrorMessage>
                  </div>
                </label>
              </div>
              <div className='flex flex-row items-center gap-4 mt-6'>
                <button type='submit' className='bg-transparent rounded-sm duration-150 outline-[1.5px] hover:outline-0 outline-purple-600 active:scale-95 hover:bg-purple-600 text-purple-600 hover:text-white px-3 py-1.25 overflow-hidden'>
                  Send
                </button>
                {isLoading && <Spinner aria-label='Loading...' className='size-6 text-purple-500 scale-100 duration-200' />}
                {success && <Check className='duration-200 size-6 scale-100 text-purple-500' />}
                {fail && <X className='duration-200 size-6 scale-100 text-purple-500' />}
              </div>
            </Form>
          )}
        </Formik>
      </Main>
    </>
  );
}

