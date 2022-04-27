"use strict";

import { openModal, closeModal } from "./modal.js";
import { getCustomers, createCustomer, deleteCustomer } from "./customer.js";

const updateTable = async () => {
    const customerContainer = document.getElementById("customer-container");

    // lendo api e armazenando o resultado
    const customers = await getCustomers();

    // preenchendo tabela
    const rows = customers.map(createRow);

    customerContainer.replaceChildren(...rows.reverse());
};

const createRow = (customer) => {
    const row = document.createElement("tr");

    // <td>(${customer.celular.substring(0, 2)}) ${customer.celular.substring(2, 7)}-${customer.celular.substring(7)}</td>

    row.innerHTML = `
        <td>${customer.nome}</td>
        <td>${customer.email}</td>
        <td>${customer.celular}</td>
        <td>${customer.cidade}</td>
        <td>
            <button type="button" class="button green" id="editar-${customer.id}">editar</button>
            <button type="button" class="button red" id="excluir-${customer.id}">excluir</button>
        </td>
    `;

    return row;
};

const saveCustomer = async () => {
    const costumer = {
        id: "",
        nome: document.getElementById("customer-nome-input").value,
        email: document.getElementById("customer-email-input").value,
        celular: document.getElementById("customer-celular-input").value,
        cidade: document.getElementById("customer-cidade-input").value,
    };

    await createCustomer(costumer);

    closeModal();

    await updateTable();
};

const handleContainerClickEvent = async (event) => {
    const { target } = event;

    if (target.type != "button") return;

    const [targetAction, targetID] = target.id.split("-");

    if (targetAction === "excluir") {
        if (!confirm("Deseja mesmo excluir esse cliente?")) return;

        await deleteCustomer(targetID);
        await updateTable();
    } else if (targetAction === "editar") {
    }
};

/* EVENTS */
document.getElementById("cadastrarCliente").addEventListener("click", openModal);
document.getElementById("salvar").addEventListener("click", saveCustomer);
document.getElementById("customer-container").addEventListener("click", handleContainerClickEvent);
window.addEventListener("load", updateTable);
