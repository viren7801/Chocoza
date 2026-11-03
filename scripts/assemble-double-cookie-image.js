const fs = require("node:fs");
const path = require("node:path");

const partDirectory = path.join(__dirname, "..", "assets", "double-cookie-image");
const outputPath = path.join(__dirname, "..", "public", "double-chocolate-cookie.webp");
const partFiles = Array.from({ length: 6 }, (_, index) =>
  path.join(partDirectory, `part-${String(index + 1).padStart(2, "0")}.txt`)
);

const base64 = partFiles.map((file) => fs.readFileSync(file, "utf8").trim()).join("");
const image = Buffer.from(base64, "base64");

if (base64.length !== 42824 || image.subarray(0, 4).toString("ascii") !== "RIFF" ||
    image.subarray(8, 12).toString("ascii") !== "WEBP") {
  throw new Error("The uploaded Double Chocolate Cookie image data is incomplete or invalid.");
}

fs.writeFileSync(outputPath, image);
console.log(`Assembled Double Chocolate Cookie photo: ${image.length} bytes`);
