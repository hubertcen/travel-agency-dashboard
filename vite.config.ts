import { reactRouter } from "@react-router/dev/vite";
import {
  sentryReactRouter,
  type SentryReactRouterBuildOptions,
} from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "js-mastery-he",
  project: "travel-agency",
  // An auth token is required for uploading source maps.
  authToken:
    "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",
  // ...
};

export default defineConfig((config) => {
  return {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
      reactRouter(),
      sentryReactRouter(sentryConfig, config),
    ],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/],
    },
  };
});
