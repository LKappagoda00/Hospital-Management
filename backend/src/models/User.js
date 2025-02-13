"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/User.ts
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
// Prevent OverwriteModelError by checking if model already exists
exports.default = mongoose_1.models.User || (0, mongoose_1.model)('User', UserSchema);
