import AuthLayout from "@/layouts/AuthLayout";
import { useLoginMutation } from "@/redux/api";
import { ILoginUser } from "@/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit } = useForm<ILoginUser>();
  const [loginUser, response] = useLoginMutation();
  const onSubmit: SubmitHandler<ILoginUser> = (data) => {
    console.log(data);
    loginUser(data)
      .unwrap()
      .then(() => {
        console.log(response);
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <AuthLayout>
      <div className=' bg-white rounded-md py-10 md:px-20 px-7 shadow'>
        <h2 className='text-lg font-bold my-3'>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className=' form-control
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            {...register("username")}
            placeholder='Username'
          />{" "}
          <br />
          <input
            className=' form-control
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='password'
            {...register("password")}
            placeholder='Password'
          />
          <input
            type='submit'
            className='bg-orange-400 w-full rounded text-white font-bold py-2 cursor-pointer hover:opacity-70 transition-all duration-500 my-5'
          />
          <p className='text-gray-800'>
            Have an account?Login
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Login;
