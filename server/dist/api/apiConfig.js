"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiConfig = void 0;
require('dotenv').config();
const apiKey = process.env.API_KEY;
exports.apiConfig = {
    BASE_URL: 'https://api.rawg.io/api',
    GAMES_CATEGORY: '/games',
    API_KEY: apiKey,
    queryCount: '',
};
//# sourceMappingURL=apiConfig.js.map