import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@calculator": path.resolve(import.meta.dirname, "js/calculator"),
            "@utils": path.resolve(import.meta.dirname, "js/utils")
        }
    }
});