const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
});
module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [require("tailwindcss"), require("autoprefixer")],
            },
        },
    },
};