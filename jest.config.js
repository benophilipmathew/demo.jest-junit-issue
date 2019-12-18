module.exports = {
    testMatch: [
        "**/specs/**"
    ],
    modulePathIgnorePatterns: ["node_modules"],
    reporters: [ "default", "jest-junit"]
};
