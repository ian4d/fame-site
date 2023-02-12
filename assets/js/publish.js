(function(){

    // Page elements
    // - Authentication section
    var sectionAuth = document.getElementById("sectionAuth");
    // - Post section
    var sectionPost = document.getElementById("sectionPost");
    // - Error section
    var sectionError = document.getElementById("sectionError");
    // - Confirmation section
    var sectionConfirmation = document.getElementById("sectionConfirmation");
    var formPublish = document.getElementById("formPublish");
    
    var textAreaMessage = document.getElementById("textAreaMessage");
    var linkSubmit = document.getElementById("linkSubmit");
    var urlParams = new URLSearchParams(window.location.hash.substring(1));
    var id_token = urlParams.get('id_token');
    var auth_token = urlParams.get("auth_token");
    if (!id_token) {
        showElement(sectionAuth);
        hideElement(sectionPost);
        hideElement(sectionError);
        hideElement(sectionConfirmation);
    } else {
        hideElement(sectionAuth);
        showElement(sectionPost);
        hideElement(sectionError);
        hideElement(sectionConfirmation);
        textAreaMessage.focus();
    }

    async function publishData() {

        // Disable the submit button
        disableSubmitLink();

        const data = new FormData(formPublish);
        var params = {};
        var body = {};
        data.forEach(function(value, key){
            body[key] = value;
        });
        var additionalParams = {
            headers: {
                "Authorization": id_token
            }
        };

        // Disable the textarea
        textAreaMessage.disabled = 'true';
        textAreaMessage.style.opacity = 0.5;

        apigClientFactory.newClient().publishPost(params, body, additionalParams).then(function(result) {
            hideElement(sectionPost);
            let startDate = new Date(result.data.startDate);
            let endDate = new Date(result.data.endDate);
            document.getElementById("startDateText").textContent = startDate.toDateString();
            document.getElementById("startTimeText").textContent = startDate.toTimeString();
            document.getElementById("endTimeText").textContent = endDate.toTimeString();
            showElement(sectionConfirmation);
        }).catch(function(result) {
            if (result.status == 400) {
                hideElement(sectionAuth);
                hideElement(sectionPost);
                showElement(sectionError);
                hideElement(sectionConfirmation);
            }
            console.log("ERROR: ", result);
        });
    }

    /*
    Hides an element in page
    */
    function hideElement(el) {
        el.classList.add('hidden');
    }

    /*
    Shows an element in page
    */
    function showElement(el) {
        el.classList.remove('hidden');
    }

    /*
    Updates the size of our text input to scale to the size of whatever has been typed
    */
    function updateInputTextSize(event) {
        textAreaMessage.style.height = 'auto';
        textAreaMessage.style.height = textAreaMessage.scrollHeight + 'px';
    }
    textAreaMessage.addEventListener('keydown', updateInputTextSize);
    textAreaMessage.addEventListener('keyup', updateInputTextSize);
    window.addEventListener('resize', updateInputTextSize);
    updateInputTextSize(null);

    /*
    Enables/disables submit link based on content of text area
    */
    function updateSubmitLinkState(event) {
        let textSize = textAreaMessage.value.length;
        if (textSize > 0 && linkSubmit.classList.contains('disabled')) {
            enableSubmitLink();
        } else if (textSize == 0 && !linkSubmit.classList.contains('disabled')) {
            disableSubmitLink();
        }
    }
    textAreaMessage.addEventListener('keydown', updateSubmitLinkState);
    textAreaMessage.addEventListener('keyup', updateSubmitLinkState);

    /*
    Submits our form to the backend.
    */
    function submitUserForm(event) {
        event.preventDefault();
        publishData();
    }
    

    /*
    Enables the submit link.
    */
    function enableSubmitLink() {
        linkSubmit.addEventListener("click", submitUserForm);
        linkSubmit.classList.remove('disabled');
    }

    /*
    Disables the submit link.
    */
    function disableSubmitLink() {
        linkSubmit.removeEventListener('click', submitUserForm);
        linkSubmit.classList.add('disabled');
    }
    
    // Submissions disabled by default until user types text in input
    disableSubmitLink();

})();