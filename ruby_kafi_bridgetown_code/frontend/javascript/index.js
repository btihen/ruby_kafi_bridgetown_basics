import "index.css"

import "bridgetown-quick-search/dist"
// without '/dist' you will get the following error:
// [Frontend] esbuild: frontend bundling started...
// [Frontend] > node_modules / bridgetown - quick - search / frontend / javascript / index.js: 22: 0: error: Unexpected "@"
// [Frontend]     22 │ @customElement("bridgetown-search-form")
// [Frontend]        ╵ ^

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")
