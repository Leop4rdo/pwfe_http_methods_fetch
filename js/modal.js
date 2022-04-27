"use strict";

export const openModal = () => document.getElementById("modal").classList.add("active");

export const closeModal = () => document.getElementById("modal").classList.remove("active");

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("cancelar").addEventListener("click", closeModal);
