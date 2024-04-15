import Image from "next/image";
import React from "react";

const Users = () => {
  return (
    <div>
      <div className="min-h-96 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center child:mx-5 child:overflow-hidden  ">
          <div className="child:rounded-full">
            <Image
              src="/assets/manager.jpg"
              width={1000}
              height={500}
              className="w-[300px] h-[300px] object-cover p-5"
              alt="manager profile"
            />
            <div className=" text-center">
                <p className="text-xl font-medium">manager</p>
            </div>
          </div>
          <div className="child:rounded-full">
            <Image
              src="/assets/opeator.jpg"
              width={1000}
              height={500}
              className="w-[300px] h-[300px] object-cover p-5"
              alt="operator profile"
            />
          <div className=" text-center">
                <p className="text-xl font-medium">operator</p>
            </div>
          </div>
          <div className="child:rounded-full">
            <Image
              src="/assets/user.jpg"
              width={1000}
              height={500}
              className="w-[300px] h-[300px] object-cover p-5"
              alt="deputy profile"
            />
           <div className=" text-center">
                <p className="text-xl font-medium">deputy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
