import AuthLayout from "@/layouts/AuthLayout";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};
function SignUp() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    console.log(data);
  // watch input value by passing the name of it
  return (
    <AuthLayout>
      <div className=' bg-white rounded-md p-10 shadow'>
        <h2 className='text-lg font-bold'>SignUp</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firstName")}
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
          />
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
            {...register("lastName")}
          />
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
            type='email'
            {...register("email")}
          />

          <input
            type='submit'
            className='bg-orange-400 w-full rounded text-white font-bold py-2 cursor-pointer hover:opacity-70 transition-all duration-500 my-5'
          />
        </form>
      </div>
    </AuthLayout>
  );
}

export default SignUp;
