import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import React from "react";

const Customers = async () => {
  const customers = await fetchCustomers();
  const filteredCustomers = fetchFilteredCustomers();
  console.log(filteredCustomers);
  console.log(customers);
  return (
    <div>
      <CustomersTable customers={customers} />
    </div>
  );
};

export default Customers;
