import AuthLayout from "@/layouts/AuthLayout";
import { useSignupMutation } from "@/redux/api";
import { FormValues } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

function SignUp() {
  const { register, handleSubmit } = useForm<FormValues>();
  const [addUser, response] = useSignupMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = ({
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    username,
  }) => {
    addUser({
      email: email,
      username: username,
      password: password,
      name: {
        firstname: firstName,
        lastname: lastName,
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: phoneNumber,
    })
      .unwrap()
      .then(() => {
        console.log(response);
      })
      .then((err): any => {
        console.log(err);
      });

    // // watch input value by passing the name of it
    // router.push("/");
  };
  return (
    <AuthLayout>
      <div className=' bg-white rounded-md py-10 md:px-20 px-7 shadow'>
        <h2 className='text-lg font-bold my-3'>SignUp</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex md:flex-row flex-col items-center justify-between'>
            <input
              {...register("firstName")}
              placeholder='Firstname'
              className=' form-control
            block
            md:w-full
           
            px-4
            py-2
            text-xl
            md:mx-2
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

            <input
              className=' form-control
            block
            w-full
            px-4
            py-2
            text-xl
            md:mx-2
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
              placeholder='Lastname'
            />
          </div>
          <br />
          <div className='flex md:flex-row flex-col items-center justify-between'>
            <input
              className=' form-control
            block
            w-full
            px-4
            py-2
            text-xl
            md:mx-2
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
              placeholder='Email'
            />
            <input
              className=' form-control
            block
            w-full
            px-4
            py-2
            text-xl
            md:mx-2
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
          </div>
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
            type='text'
            {...register("phoneNumber")}
            placeholder='Phonenumber'
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
            type='password'
            {...register("password")}
            placeholder='Password'
          />
          <input
            type='submit'
            className='bg-orange-400 w-full rounded text-white font-bold py-2 cursor-pointer hover:opacity-70 transition-all duration-500 my-5'
          />
          <p className='text-gray-800'>
            Have an account?
            <Link href={"/login"}>Login</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}

export default SignUp;
