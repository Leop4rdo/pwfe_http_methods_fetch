"use strict";

import { imagePreview } from "./imagePreview.js";

export const openModal = () => document.getElementById("modal").classList.add("active");

export const closeModal = () => {
    document.getElementById("modal").classList.remove("active");

    clearInputs();

    document.getElementById("salvar").textContent = "salvar";
    document.getElementById("salvar").dataset.action = ``;
    document.getElementById("salvar").dataset.id = ``;
};

export const clearInputs = () => {
    document.getElementById("customer-nome-input").value = "";
    document.getElementById("customer-email-input").value = "";
    document.getElementById("customer-celular-input").value = "";
    document.getElementById("customer-cidade-input").value = "";
    document.getElementById("modal-image").src = "./img/add.png";
};

export const fillForm = (customer, edit) => {
    document.getElementById("customer-nome-input").value = customer.nome;
    document.getElementById("customer-email-input").value = customer.email;
    document.getElementById("customer-celular-input").value = customer.celular;
    document.getElementById("customer-cidade-input").value = customer.cidade;
    document.getElementById("modal-image").src = customer.foto;

    if (edit) {
        document.getElementById("salvar").textContent = "editar";
        document.getElementById("salvar").dataset.action = `edit`;
        document.getElementById("salvar").dataset.id = `${customer.id}` || "./img/add.png";
    }
};

const loadImage = () => imagePreview("modal-image-input", "modal-image");

document.getElementById("modal-image-input").addEventListener("change", loadImage);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("cancelar").addEventListener("click", closeModal);
