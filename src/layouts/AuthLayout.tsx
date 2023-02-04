import { IChildren } from "@/types";
import React from "react";

function AuthLayout({ children }: IChildren) {
  return (
    <>
      <div className='context !z-[9999]'>{children}</div>

      <div className='area'>
        <ul className='circles'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default AuthLayout;
