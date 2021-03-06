import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // prevent vite from compiling calcite components like vue components
          isCustomElement: (tag) => tag.includes('calcite-')
        }
      }
    }),
    copy({ // copy over the calcite-components assets
			targets: [
				{
					src: 'node_modules/@arcgis/core/assets/',
					dest: 'public/'
				}
			]
		})
  ]
})
