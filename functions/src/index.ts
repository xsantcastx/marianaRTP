import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { initializeApp } from "firebase-admin/app";

initializeApp();

export const helloWorld = onRequest((request, response) => {
  logger.info("helloWorld invoked", { structuredData: true });
  response.json({ message: "Hello from marianaRTP Firebase Functions!" });
});
