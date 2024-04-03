'use client';

import "../styles.scss";
import { Ubuntu } from 'next/font/google'
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup"
import clsx from "clsx";
import { useRouter } from 'next/navigation'

const ubunto = Ubuntu({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export default function Home() {
  const router = useRouter()
  let defaultValues = {
    name: "",
    email: "",
    number: ""
  }

  const Validate = Yup.object().shape({
    name: Yup.string().required("Name is Requried"),
    email: Yup.string().email().required("email is required"),
    number: Yup.string().required("Number is Requried"),
  });
  return (
    <div className=" p-5 margins">
      <h2 className={"text-slate-800 large-ft font-bold " + ubunto.className}>Personal Info</h2>
      <h5 className={"text-xl text-slate-400 " + ubunto.className}> Please Provide your name, email address and phone Number</h5>
      <Formik
        initialValues={defaultValues}
        validationSchema={Validate}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          router.push("/home/plan")
        }}
      >
        {({ values, setFieldError, setFieldValue, errors, setStatus }) => (
          <Form className="py-5 my-2">
            <div>
              <div className="flex justify-between my-0">
                <p className={"text-lg text-slate-700 my-3 " + ubunto.className}>Name</p>
                <p className={"text-base font-bold mt-2 text-red-600 mt-3 " + ubunto.className}>{errors?.name}</p>
              </div>
              <Field
                className={clsx(
                  'field-input font-bold text-slate-700',
                  {
                    'error': errors?.name,
                    '': !errors?.name,
                  },
                )}
                id="firstName" name="name" placeholder="Name" />
            </div>
            <div>
              <div className="flex justify-between my-0">
                <p className={"text-lg text-slate-700 my-3 " + ubunto.className}>Email</p>
                <p className={"text-base font-bold mt-2 text-red-600 mt-3 " + ubunto.className}>{errors?.email}</p>
              </div>
              <Field
                className={clsx(
                  'field-input font-bold text-slate-700',
                  {
                    'error': errors?.email,
                    '': !errors?.email,
                  },
                )}
                id="firstName" name="email" placeholder="email" />
            </div>
            <div>
              <div className="flex justify-between my-0">
                <p className={"text-lg text-slate-700 my-3 " + ubunto.className}>Phone Number</p>
                <p className={"text-base font-bold mt-2 text-red-600 mt-3 " + ubunto.className}>{errors?.number}</p>
              </div>
              <Field
                className={clsx(
                  'field-input font-bold text-slate-700',
                  {
                    'error': errors?.number,
                    '': !errors?.number,
                  },
                )}
                id="firstName" name="number" placeholder="number" />
            </div>
            <div className="flex justify-end div-wrap">
              <button className="button-wrap mt-7 py-3 px-4 m-3" type="submit">Next Step</button>
            </div>
          </Form>
        )}

      </Formik>
    </div>
  );
}