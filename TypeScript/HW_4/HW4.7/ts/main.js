"use strict";
function createUnorderdList(text, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createUnorderdList("some text to the create Unordered list", 40);
