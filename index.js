import wrapper from "./createElements.js";

const btn = document.getElementById("file-uploader"),
    closeBtn = wrapper.querySelector("#close-modal"),
    openSidebar = wrapper.querySelector("#open-sidebar"),
    sideBar = wrapper.querySelector(".modal .sidebar"),
    closeSidebarBtn = wrapper.querySelector(".close-sidebar-btn"),
    callToActionBox = wrapper.querySelector(".cta"),
    chooseFile = wrapper.querySelector("#choose-file"),
    fileInput = wrapper.querySelector("#file-id");

// open modal
btn.addEventListener("click", e => {
    document.body.appendChild(wrapper);
});

// close modal
closeBtn?.addEventListener("click", () => {
    document.body.removeChild(wrapper);
});

// open side-bar in mobile mode
openSidebar?.addEventListener("click", () =>
    sideBar?.classList.remove("closed-sidebar")
);
// close side-bar in mobile mode
closeSidebarBtn?.addEventListener("click", () =>
    sideBar?.classList.add("closed-sidebar")
);

// open file dialogue
chooseFile?.addEventListener("click", () => fileInput.click());

/* listen to any change on file input element and append 
 uploaded image to wrapper element */
fileInput?.addEventListener("change", event => {
    const file = event.target.files[0];
    console.log(file.name);

    const uploadedImage = document.createElement("img");
    uploadedImage.src = URL.createObjectURL(file);
    uploadedImage.alt = file.name;
    uploadedImage.classList.add("uploaded-image");

    callToActionBox?.appendChild(uploadedImage);
});
