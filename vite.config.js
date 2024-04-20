import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.png", "**/*.ico"],
  define: {
    // Access environment variables loaded by dotenv
    "process.env.OPENWEATHER_API_KEY": JSON.stringify(
      process.env.OPENWEATHER_API_KEY
    ),
    "process.env.VISUALCROSSING_API_KEY": JSON.stringify(
      process.env.VISUALCROSSING_API_KEY
    ),
  },
});
