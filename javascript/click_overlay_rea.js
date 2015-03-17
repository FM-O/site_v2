/**
 * Created by flo on 17/03/15.
 */
(function(){

    var overlay = document.getElementById('overlay-rea-content'),
        pElem = overlay.firstElementChild,
        aElem = pElem.lastElementChild;

    aElem.onclick = function() {
      overlay.parentNode.style.display = "none";
    };
})();
