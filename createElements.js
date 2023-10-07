/*  create wrapper and nest necessary elements*/
const wrapper = document.createElement("section");

/* add style to wrapper element */
wrapper.classList.add("wrapper");

// nest child elements
wrapper.innerHTML = `
    <div class="container">
        <div class="modal">
            <button class="open" id="open-sidebar">Open</button>
            <button class="close" id="close-modal">X</button>
            
            <aside class="sidebar closed-sidebar">
                <button class="close-sidebar-btn">< Back</button>
                <ul>
                    <li>Local Files</li>
                    <li>Camera</li>
                    <li>Direct Link</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Google Drive</li>
                    <li>Google Photos</li>
                    <li>Dropbox</li>
                    <li>Evernote</li>
                    <li>Flickr</li>
                    <li>Box</li>
                    <li>Huddle</li>
                </ul>
            </aside>

            <div class="cta">
                <input id="file-id" type="file" hidden/>
                <button id='choose-file'>Choose a local file</button> 
            </div>
        </div>
    </div>
`;

export default wrapper;
