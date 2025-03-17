import { defineConfig } from "cypress";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild"
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import fs from 'fs';

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature", // Ensure Cypress detects feature files
    chromeWebSecurity:false,
    env:{
      tags: ["@run", "@smoke"]
    },
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
        await addCucumberPreprocessorPlugin(on, config);
        on("file:preprocessor",
          createBundler({
            plugins: [createEsbuildPlugin(config)]
          })
        );
        on('task',{
          fileExists(filePath){
            return fs.existsSync(filePath)
          }
        })
        return config;
        
    },
  },
});