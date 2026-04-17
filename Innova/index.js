import { getCSVContents, buildPage } from './scripts/util.js';

let data = [];
let config = await fetch("./static/config.json").then(response => response.json());


await getCSVContents().then(data => buildPage(data));