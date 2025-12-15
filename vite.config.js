import { defineConfig } from 'vite';
import { resolve } from 'path';
import Handlebars from 'handlebars';
import fs from 'fs';

const handlebarsPlugin = () => {
    return {
        name: 'html-transform',
        transformIndexHtml: {
            order: 'pre',
            handler: (html) => {
                const componentDir = resolve(__dirname, 'src/components');
                if (fs.existsSync(componentDir)) {
                    const files = fs.readdirSync(componentDir);
                    files.forEach((file) => {
                        if (file.endsWith('.html')) {
                            const name = file.replace('.html', '');
                            const content = fs.readFileSync(resolve(componentDir, file), 'utf-8');
                            Handlebars.registerPartial(name, content);
                        }
                    });
                }
                const template = Handlebars.compile(html);
                return template({});
            },
        },
    };
};

export default defineConfig({
    plugins: [handlebarsPlugin()],
    css: {
        preprocessorOptions: {
            scss: {
                includePaths: ['node_modules'],
                quietDeps: true,
                silenceDeprecations: ['import', 'legacy-js-api', 'color-functions', 'global-builtin'],
            },
        },
    },
});
