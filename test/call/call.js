module.exports = (key, ...args) => context => context[key](...args);