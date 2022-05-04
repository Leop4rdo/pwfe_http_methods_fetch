"use strict";

export const openModal = () => document.getElementById("modal").classList.add("active");

export const closeModal = () => {
    document.getElementById("modal").classList.remove("active");

    clearInputs();

    document.getElementById("salvar").textContent = "salvar";
    document.getElementById("salvar").dataset.action = ``;
};

export const clearInputs = () => {
    document.getElementById("customer-nome-input").value = "";
    document.getElementById("customer-email-input").value = "";
    document.getElementById("customer-celular-input").value = "";
    document.getElementById("customer-cidade-input").value = "";
};

export const fillForm = (customer, edit) => {
    document.getElementById("customer-nome-input").value = customer.nome;
    document.getElementById("customer-email-input").value = customer.email;
    document.getElementById("customer-celular-input").value = customer.celular;
    document.getElementById("customer-cidade-input").value = customer.cidade;

    if (edit) {
        document.getElementById("salvar").textContent = "editar";
        document.getElementById("salvar").dataset.action = `edit`;
        document.getElementById("salvar").dataset.id = `${customer.id}`;
    }
};

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("cancelar").addEventListener("click", closeModal);
