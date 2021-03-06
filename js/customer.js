"use strict";

const url = "https://testeleonid.herokuapp.com/clientes";
// const url = "http://localhost/leonardo/backend/clientes/";

export const getCustomers = async () => {
    const res = await fetch(url);

    return await res.json();
};

export const createCustomer = async (customer) => {
    const options = {
        method: "POST",
        body: JSON.stringify(customer),
        headers: {
            "content-type": "application/json",
        },
    };

    const res = await fetch(url, options);

    console.log(res.ok);
};

export const deleteCustomer = async (id) => {
    const options = {
        method: "DELETE",
    };
    const res = await fetch(`${url}/${id}`, options);

    console.log(res.ok);
};

export const getCustomerById = async (id) => {
    const res = await fetch(`${url}/${id}`);

    return await res.json();
};

export const updateCustomer = async (customer) => {
    const options = {
        method: "PUT",
        body: JSON.stringify(customer),
        headers: {
            "content-type": "application/json",
        },
    };

    const res = await fetch(`${url}/${customer.id}`, options);

    console.log(res.ok);
};
