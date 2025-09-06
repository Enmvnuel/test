import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
    plugins: [pluginReact()],
    source: {
        entry: {
            index: "./src/index.jsx", // Asegúrate de que apunta a tu archivo principal (ajusta si es index.jsx)
        },
    },
    html: {
        template: "./public/index.html", // Template base en public
    },
    output: {
        distPath: {
            root: "dist", // Carpeta de salida
        },
        publicPath: "/", // Paths absolutos para Vercel
    },
    server: {
        publicDir: {
            name: "public", // Carpeta para assets estáticos
            copyOnBuild: true, // Copia contenido de public a dist
        },
    },
});
