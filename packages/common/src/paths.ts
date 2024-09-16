import path from "path";
import { fileURLToPath } from "url";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
export const rootDir = path.parse(__dirname).dir;
export const repoRoot = path.resolve(rootDir, "../..");
