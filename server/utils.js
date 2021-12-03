const csrf = require('csurf');
let csrfProtection;
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

module.exports = {
    csrfProtection,
    asyncHandler,
};
