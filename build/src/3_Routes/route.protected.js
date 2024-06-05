"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router_protected = void 0;
// route.protected.ts
const express_1 = require("express");
const user_auth_1 = require("../4_Middleware/user.auth"); // Adjust the path as needed
const router = (0, express_1.Router)();
exports.router_protected = router;
router.get('/protected-route', user_auth_1.verifyToken, (req, res) => {
    const user = req.user; // user information from the token
    res.json({ message: 'This is a protected route', user });
});
