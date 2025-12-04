import { writeFileSync, appendFileSync, existsSync } from "fs";
import { join } from "path";

/**
 * Save a user's email to a text file.
 * If the file exists, it appends. If not, it creates a new one.
 */
export function saveEmailToFile(email: string, filename = "emails.txt"): void {
  const filePath = join(process.cwd(), filename);

  // Append if file exists, otherwise create new
  if (existsSync(filePath)) {
    appendFileSync(filePath, `${email}\n`, "utf-8");
  } else {
    writeFileSync(filePath, `${email}\n`, "utf-8");
  }
}
