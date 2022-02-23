import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import './FeedbackForm.scss';

const FeedbackForm = ({ className }) => {

  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);

  const formClassName = className ? `form ${className}` : 'form'

  return (
    <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
      <input className="form__input" type="text" placeholder="Your name" {...register("name")} />
      <input className="form__input" type="email" placeholder="Your email"{...register("email")} />
      <textarea className="form__area" placeholder="Your email"{...register("text")} />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default FeedbackForm;