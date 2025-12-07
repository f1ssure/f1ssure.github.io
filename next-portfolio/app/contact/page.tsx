'use client';
import { HeroUIProvider, Button } from '@heroui/react';
import { Formik, FormikProps, Form, Field } from 'formik';
import * as Yup from 'yup';
import Menu from '@components/Menu';
import Main from '@components/Main';
import Link from '@components/Link';
import Paragraph from '@components/Paragraph';

export default function Contact() {
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
            // add an async function call that would send the mail
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
                  <Field className='w-full px-2 py-1 rounded-lg text-sm mt-2' type='email' name='email' placeholder='Enter your email address' />
                </label>
                <label>
                  Subject:
                  <Field className='w-full px-2 py-1 rounded-lg mt-2' type='text' name='subject' placeholder='Enter subject' />
                </label>
                <label>
                  Message:
                  <Field className='w-full px-2 py-1 rounded-lg mt-2 h-45' as='textarea' name='text' placeholder='Your message...' />
                </label>
              </div>
              <HeroUIProvider>
                <Button className='bg-transparent rounded-sm duration-150 outline-[1.5px] hover:outline-0 hover:scale-1 outline-purple-600 active:scale-95 hover:bg-purple-600 text-purple-600 hover:text-white px-3 py-1.25 mt-5 overflow-hidden'>
                  Send
                </Button>
              </HeroUIProvider>
            </Form>
          )}
        </Formik>
      </Main>
    </>
  );
}
