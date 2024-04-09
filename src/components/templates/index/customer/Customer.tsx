import React from "react";
import styles from "./customer.module.css";
import Image from "next/image";

const Customer = () => {
  return (
    <div className={styles.customers__content}>
      <div className="flex items-center justify-center flex-col w-3/4">
        <div>
          <p className="text-xl text-primary font-medium my-5 underline underline-offset-8"> Some of Customers </p>
        </div>
        <div>
          <ul className="grid grid-cols-1 lg:grid-cols-3 ">
            <li>
              <Image
                src="/assets/customers/customer1.png"
                width={1000}
                height={500}
                className="w-72 h-56 object-cover"
                alt=" customer image "
              />
            </li>
            <li>
              <Image
                src="/assets/customers/customer2.png"
                width={1000}
                height={500}
                className="w-72 h-56 object-cover"
                alt=" customer image "
              />
            </li>
            <li>
              <Image
                src="/assets/customers/customer3.png"
                width={1000}
                height={500}
                className="w-72 h-56 object-cover"
                alt=" customer image "
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Customer;
