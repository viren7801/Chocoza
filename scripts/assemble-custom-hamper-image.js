const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const partDirectory = path.join(__dirname, "..", "assets", "custom-hamper-image");
const outputPath = path.join(__dirname, "..", "public", "custom-gift-hamper.webp");
const partFiles = Array.from({ length: 10 }, (_, index) =>
  path.join(partDirectory, `part-${String(index + 1).padStart(2, "0")}.txt`)
);

const base64 = partFiles.map((file) => fs.readFileSync(file, "utf8").trim()).join("");
const image = Buffer.from(base64, "base64");
const expectedSha256 = "8535f1c00d83a69a9c0955b8157fa6bb5d9086c9c52936d8dd16e72e0e36d0e0";
const actualSha256 = crypto.createHash("sha256").update(image).digest("hex");

if (base64.length !== 95004 ||
    image.length !== 71252 ||
    image.subarray(0, 4).toString("ascii") !== "RIFF" ||
    image.subarray(8, 12).toString("ascii") !== "WEBP" ||
    actualSha256 !== expectedSha256) {
  throw new Error("The uploaded high-resolution custom hamper photo is incomplete or invalid.");
}

fs.writeFileSync(outputPath, image);
console.log(`Assembled verified high-resolution Custom Gift Hampers photo: ${image.length} bytes`);
