import { handleFileUpload } from "./utils/fileProcessing";

document
  .getElementById("csvFileInput")
  ?.addEventListener("change", handleFileUpload);
