"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiConfig_1 = require("../../api/apiConfig");
const getGamesByInt = (id) => {
    const url = `${apiConfig_1.apiConfig.BASE_URL} + ${apiConfig_1.apiConfig.GAMES_CATEGORY} + "/" + ${id} + "?key=" + ${apiConfig_1.apiConfig.API_KEY}`;
    const res = fetch(url)
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
    });
    return res;
};
module.exports = getGamesByInt;
//# sourceMappingURL=getGamesByInt.js.map