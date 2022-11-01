/* eslint-disable */

import React from 'react';
import Button from '../button/Button';
import { 
  // useFormik, 
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik';
import classNames from 'classnames';
import * as Yup from 'yup';

function FormikForm() {

  const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: ''
  };

  const onSubmit = values => {
      
    console.log(values);
  };

  // const validate = values => {
  //   let errors = {};

  //   if (!values.name) {
  //     errors.name = 'Required';
  //   }

  //   if (!values.email) {
  //     errors.email = 'Required';
  //   } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
  //     errors.email = 'Invalid email format';
  //   }

  //   if (!values.channel) {
  //     errors.channel = 'Required';
  //   }

  //   return errors;
  // };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email Format').required('Required'),
    channel: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
  });

  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema
  //   // validate
  // });


  console.log();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="name" className="font-bold flex">Name</label>
        <Field
          type="text"
          id="name"
          name="name"
          className={classNames(
            'px-4 border border-[#ccc] rounded',
            // props.errors.name && props.touched.name && 'border-red-50'
          )}
        />
        {/* <div className="text-red-50 mb-2">{ formik.errors.name && formik.touched.name && formik.errors.name }</div> */}
        <ErrorMessage name="name" />

        <label htmlFor="email" className="font-bold flex">Email</label>
        <Field 
          type="email" 
          id="email" 
          name="email" 
          className={classNames(
            'px-4 border border-[#ccc] rounded',
            // formik.errors.email && formik.touched.email && 'border-red-50'
          )}
        />
        {/* <div className="text-red-50 mb-2">{ formik.errors.email && formik.touched.email && formik.errors.email }</div> */}
        <ErrorMessage name="email" />

        <label htmlFor="channel" className="font-bold flex">Channel</label>
        <Field 
          type="text" 
          id="channel" 
          name="channel" 
          className={classNames(
            'px-4 border border-[#ccc] rounded',
            // formik.errors.channel && formik.touched.channel && 'border-red-50'
          )}
        />
        {/* <div className="text-red-50 mb-2">{ formik.errors.channel && formik.touched.channel && formik.errors.channel }</div> */}
        <ErrorMessage name="channel" />

        <div>
          <label htmlFor="comments" className="font-bold flex">Comments</label>
          <Field
          as="textarea" 
          id="comments" 
          name="comments" 
          className={classNames(
            'px-4 border border-[#ccc] rounded',
            // formik.errors.channel && formik.touched.channel && 'border-red-50'
          )}
          />
        </div>
        <div>
          <label htmlFor="address" className="font-bold flex">Address</label>
          <Field
            name="address" 
            className={classNames(
              'px-4 border border-[#ccc] rounded',
              // formik.errors.channel && formik.touched.channel && 'border-red-50'
            )}
          >
          {
            (props) => {
              const {field, form, meta} = props;
              console.log(props);
              return (
                <div>
                  <input 
                    id="address" 
                    type="text" 
                    className={classNames(
                      'px-4 border border-[#ccc] rounded',
                      // formik.errors.channel && formik.touched.channel && 'border-red-50'
                    )}
                    {...field} 
                  />
                  {meta.touched && meta.error 
                    && 
                      <div 
                        className={classNames(
                          meta.error.address && meta.touched.address && 'border-red-50'
                        )}
                      >
                        {meta.error}
                      </div>}
                </div>
              )
            }
          }
          </Field>
        </div>

        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
