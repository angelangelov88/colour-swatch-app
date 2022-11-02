/* eslint-disable */


import React from 'react';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
} from 'formik';
import classNames from 'classnames';
import * as Yup from 'yup';
import { Button } from '../button/Button';
import TextError from './TextError';

function FormikForm() {

  return (
    <Formik
      initialValues={{
        name: 'Angel',
        email: 'test@test.com',
        channel: 'BBC Channel',
        comments: 'My new comment',
        address: '1 High Street',
        social: {
          facebook: 'Angel FB',
          twitter: 'Angel TW',
        },
        phoneNumbers: ['0755', '123645'],
        phNumbers: [''],
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid Email Format').required('Required'),
        channel: Yup.string().required('Required'),
        comments: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        social: Yup.object().required('Required'),
        phoneNumbers: Yup.number().required('Required'),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        console.log(formik);
      
      return (
        <Form>
          <label htmlFor="name" className="font-bold flex">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Angel"
            className={classNames(
              'px-4 border border-[#ccc] rounded',
              // props.errors.name && props.touched.name && 'border-red-50'
            )}
          />
          {/* <div className="text-red-50 mb-2">{ formik.errors.name && formik.touched.name && formik.errors.name }</div> */}
          <ErrorMessage name="name" component={TextError} />

          <label htmlFor="email" className="font-bold flex">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            className={classNames(
              'px-4 border border-[#ccc] rounded',
              formik.errors.email && formik.touched.email && 'border-red-50'
            )}
          />
          {/* <div className="text-red-50 mb-2">{ formik.errors.email && formik.touched.email && formik.errors.email }</div> */}
          <ErrorMessage name="email">
            {
              (errorMsg) => <div className="text-red-50">{errorMsg}</div>
            }
          </ErrorMessage>

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
          <ErrorMessage name="channel" component={TextError} />

          <div>
            <label htmlFor="comments" className="font-bold flex">Comments</label>
            <Field
              as="textarea"
              id="comments"
              name="comments"
              className={classNames(
                'px-4 border border-[#ccc] rounded',
                // Formik.errors.comments && Formik.touched.comments && 'border-red-50'
              )}
            />
            <ErrorMessage name="comments" component={TextError} />
          </div>
          <div>
            <label htmlFor="address" className="font-bold flex">Address</label>
            <Field
              name="address"
              className={classNames(
                'px-4 border border-[#ccc] rounded',
              )}
            >
              {
            (props) => {
              const { field, form, meta } = props;
              { /* console.log(props); */ }
              return (
                <div>
                  <input
                    id="address"
                    type="text"
                    className={classNames(
                      'px-4 border border-[#ccc] rounded',
                      (meta.error && meta.touched) && 'border-red-50',
                    )}
                    {...field}
                  />
                  {meta.touched && meta.error
                    && <TextError />}
                </div>
              );
            }
          }
            </Field>
          </div>
          <div>
            <label htmlFor="facebook" className="font-bold flex">Facebook</label>
            <Field
              type="text"
              id="facebook"
              name="social.facebook"
              className="px-4 border border-[#ccc] rounded"
            />
            <ErrorMessage name="facebook" component={TextError} />
          </div>
          <div>
            <label htmlFor="twitter" className="font-bold flex">Twitter</label>
            <Field
              type="text"
              id="twitter"
              name="social.twitter"
              className="px-4 border border-[#ccc] rounded"
            />
            <ErrorMessage name="twitter" component={TextError} />
          </div>
          <div>
            <label htmlFor="primaryPh" className="font-bold flex">Primary Phone Number</label>
            <Field
              type="text"
              id="primaryPh"
              name="phoneNumbers[0]"
              className="px-4 border border-[#ccc] rounded"
            />
            <ErrorMessage name="primaryPh" component={TextError} />
          </div>
          <div>
            <label htmlFor="secondaryPh" className="font-bold flex">Secondary Phone Number</label>
            <Field
              type="text"
              id="secondaryPh"
              name="phoneNumbers[1]"
              className="px-4 border border-[#ccc] rounded"
            />
            <ErrorMessage name="secondaryPh" component={TextError} />
          </div>
          <div>
            <label htmlFor="phNumbers" className="font-bold flex">List of phone numbers</label>
            <FieldArray
              name="phNumbers"
              className="px-4 border border-[#ccc] rounded"
            >
              {
            (fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { phNumbers } = values;
              return (
                <div>
                  {
                    phNumbers.map((phNumber, index) => (
                      <div key={index}>
                        <Field
                          name={`phNumbers[${index}]`}
                          className="px-4 border border-[#ccc] rounded"
                        />
                        {
                          index > 0
                            && <Button onClick={() => remove(index)}>-</Button>
                        }
                        <Button onClick={() => push('')}>+</Button>
                      </div>
                    ))
                  }
                </div>
              );
            }
          }
            </FieldArray>
            <ErrorMessage name="phNumbers" component={TextError} />
          </div>
          <Button type="submit" disabled={!(formik.isValid && formik.dirty)}>Submit</Button>
        </Form>

      )
      }
    }
    </Formik>
  );
}

export default FormikForm;
