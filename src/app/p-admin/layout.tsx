import React from 'react'
import styles from "../../styles/p-admin.module.css";
import Sidebar from "@/components/templates/p-admin/sidebar/Sidebar";
import Products from "@/components/templates/p-admin/products/Products";

const DashboardLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
      <div className={styles.banner__allProducts}>
        <p className="text-3xl font-medium text-gray-800"> Panel Admin </p>
      </div>
      <main>
        <div className="grid grid-cols-5">
          <div>
            <Sidebar />
          </div>
          <div className="border border-black col-span-4"> 
             {children} 
          </div>
        </div>
      </main>
        
    </div>
  )
}

export default DashboardLayout