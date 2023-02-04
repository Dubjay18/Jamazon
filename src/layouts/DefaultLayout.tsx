import Navbar from "@/components/Navbar";
import { IChildren } from "@/types";
import React from "react";

function DefaultLayout({ children }: IChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default DefaultLayout;
