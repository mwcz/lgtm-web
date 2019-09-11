import meta from "./metadata.js";
import "./style.css";
import "es6-promise/auto";

import { capitalize } from "lodash";
import acron from "acron";

console.log(
    `Starting %c${meta.title}%c v${meta.package.version}`,
    "font-weight: bold",
    "font-weight: normal"
);

function lgtm() {
    return acron("lgtm")
        .map(capitalize)
        .join(" ");
}

function newLgtm() {
    document.querySelector("#lgtm").innerText =
        lgtm() + "\n" + document.querySelector("#lgtm").innerText;
}

newLgtm();

document.querySelector("#new-lgtm").addEventListener("click", newLgtm);

// This is an example of how to use hot module reloading to inject changes
// without forcing a page refresh.  Not all modules
// if (module.hot) {
//     module.hot.accept("./print.js", function() {
//         console.log("Accepting the updated printMe module!");
//         printMe();
//     });
// }
