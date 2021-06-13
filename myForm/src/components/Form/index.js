import React from 'react'
import { useForm } from 'react-hook-form'

import Input from '../Input';

const Form = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => {
        console.log('onSubmit', data);
    }
    console.log("errors", errors)

    const myInput = ({ label, register, required }) => (
        <>
            <label>{label}</label>
            <input {...register(label, { required })} />
        </>
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Email" {...register('email')} />
            <Input id="custom" label="Prénom" error={errors.firstName} {...register("firstName", { required: "Le prénom est attendu", maxLength: {value: 20, message: "Votre nom est trop long"} })}/>
            <input
                type="password"
                placeholder="Password"
                {...register("password", {required: "password is required.", minLength: {value: 8, message: "too short password."}})}
            />
            <input
                type="text"
                placeholder="Password"
                {...register("password", {required: "password is required.", minLength: {value: 8, message: "too short password."}})}
            />
            {errors.password && <p>{errors.password.message}</p>}
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input type="number" {...register("age", { min: 18, max: 99 })} />
        {myInput({label: "First Name", register, required: true})}
            <input type="submit"/>
        </form>
    )
}

export default Form