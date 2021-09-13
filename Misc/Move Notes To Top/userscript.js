// ==UserScript==
// @name         Wanikani: Move notes to top
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Moves the notes to the top if there is anything written in them
// @author       Kumirei
// @include      *wanikani.com/review/session
// @include      *preview.wanikani.com/review/session
// @grant        none
// ==/UserScript==

(function() {
    waitForSelector('#note-meaning, #note-reading').then((e)=>{
        if (e.children[1].innerText != "Click to add note") {
            $('#item-info-col2').prepend(e);
        }
    });

    // Waits for a selector query to yield results
    function waitForSelector(s) {
        let resolve, reject, promise = new Promise((res, rej)=>{resolve=res; reject=rej})
        let i = setInterval(()=>{
            let result = document.querySelector(s)
            if (!!result) {
                clearInterval(i)
                resolve(result)
            }
        }, 100)
        return promise
    }
})();
