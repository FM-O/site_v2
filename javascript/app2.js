// JavaScript Document
// Created output v2
(function(){

    function desactivateTooltips() {

        var spans = document.getElementsByClassName('tooltip'),
            spansLength = spans.length;

        for (var i = 0 ; i < spansLength ; i++){
            spans[i].style.display = 'none';
        }
    }

    function getToolTip(element){
        while (element = element.nextSibling) {

            if (element.className === 'tooltip') {

                return element;
            }
        }
        return false;
    }

    function getAllTooltips() {
        var spans = document.getElementsByClassName("form-input incorrect"),
            spansLen = spans.length,
            result = [];

        for (var i = 0 ; i < spansLen ; i++) {
            result.push(spans[i].nextElementSibling);
        }
        return result;
    }

    var check = {};

    check['user_name'] = function(id) {
        var user_name = document.getElementById(id),
            tooltipStyle = getToolTip(user_name).style;

        if (user_name.value.length >= 2) {
            user_name.className = "form-input correct";
            tooltipStyle.display = "none";
            return true;
        } else {
            user_name.className = "form-input incorrect";
            return false
        }
    };

    check['user_mail'] = function(id) {
        var user_mail = document.getElementById(id),
            tooltipStyle = getToolTip(user_mail).style;

        if (user_mail.value.length >= 2 && /^[A-Za-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/.test(user_mail.value)) {
            user_mail.className = "form-input correct";
            tooltipStyle.display = "none";
            return true;
        } else {
            user_mail.className = "form-input incorrect";
            return false
        }
    };

    check['user_subject'] = check['user_name'];

    check['user_mess'] = check['user_name'];

    (function() {

        function addEvent(element, event, funct, bool) {
            if (element.addEventListener) {
                element.addEventListener(event, funct, bool);
            } else {
                element.attachEvent('on' + event, funct);
            }
        }

        var myForm = document.getElementById('contact_form'),
            inputs = document.getElementsByClassName('form-input'),
            inputsLength = inputs.length;

        for (var i = 0 ; i < inputsLength ; i++) {
            if (inputs[i].type == 'text' || inputs[i].type == 'textarea') {

                inputs[i].onkeyup = function() {
                    check[this.id](this.id);
                };
            }
        }

        addEvent(myForm, 'submit', function(e) {
            e.preventDefault();

            var formInputs = document.getElementsByClassName('form-input'),
                formInputsLen = formInputs.length;

            for (var i = 0 ; i < formInputsLen ; i++) {

                formInputs[i].value = formInputs[i].value.trim();
            }

        }, true);

        addEvent(myForm, 'submit', function(e) {

            e.preventDefault();

            var loader = document.getElementById('mess_loader');

            var result = true;

            for (var i in check) {
                result = check[i](i) && result;
            }
            if (result) {
                function submitForm() {

                    var overlay = document.getElementById('overlay'),
                        aElement = overlay.firstElementChild,
                        actual = aElement.firstElementChild,
                        errorMess = document.createTextNode('Erreur dans l\'envoi du message !');

                    var value_name = document.getElementById('user_name').value,
                        value_mail = document.getElementById('user_mail').value,
                        value_subject = document.getElementById('user_subject').value,
                        value_message = document.getElementById('user_mess').value;

                    function downOverlay() {
                        actual.lastElementChild.onclick = function() {
                            overlay.style.display = "none";
                            myForm.reset();
                            return false;
                        };
                    }

                    var xhr = new XMLHttpRequest();

                    xhr.open('POST', 'mail.php');

                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                    xhr.onreadystatechange = function() {
                        if (xhr.readyState == 4 && xhr.status == 200) {

                            //remove loader
                            loader.style.display = "none";

                            var response = xhr.responseText,
                                resp = JSON.parse(response);

                            if (resp.error == 'true') {

                                actual.style.color = "red";
                                actual.replaceChild(errorMess, actual.firstChild);
                            }
                            overlay.style.display = "block";
                            actual.lastElementChild.focus();
                            downOverlay();
                        } else if (xhr.readyState == 4 && xhr.status != 200) {

                            //remove loader
                            loader.style.display = "none";

                            var err = document.getElementById('xhrErr');
                            if (xhr.statusText != '') {
                                var txtErr = document.createTextNode('erreur : ' + xhr.statusText);
                                err.appendChild(txtErr);
                                err.style.display  = "block";
                                setTimeout(function(){
                                    err.removeChild(txtErr);
                                }, 7000);
                            } else {
                                err.innerHTML = 'Vérifiez votre connexion Internet ';
                                err.style.display  = "block";
                            }
                            actual.style.color = "red";
                            actual.replaceChild(errorMess, actual.firstChild);
                            overlay.style.display = "block";
                            actual.lastElementChild.focus();
                            downOverlay();
                        }
                    };

                    xhr.send('param1=' + value_name + '&param2=' + value_mail + '&param3=' + value_subject + '&param4=' + value_message);
                }
                // Loader displaying

                loader.style.display = "block";

                setTimeout(function(){
                    submitForm()
                }, 500);
            } else {
                var tooltips = getAllTooltips();

                for (var j = 0 ; j < tooltips.length ; j++) {

                    tooltips[j].style.display = "block";
                }
            }

        }, false);

        myForm.onreset = function() {

            for (var i = 0 ; i < inputsLength ; i++) {
                if (inputs[i].type == 'text' || inputs[i].type == 'textarea') {
                    inputs[i].className = "form-input";
                }
            }
            desactivateTooltips();
        };

    })();
    desactivateTooltips();
})();