"use strict";

export const imagePreview = (idFile, idImg) => {
    const file = document.getElementById(idFile).files[0];
    const preview = document.getElementById(idImg);
    const fileReader = new FileReader();

    if (file === null) return;

    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => (preview.src = fileReader.result);
};
