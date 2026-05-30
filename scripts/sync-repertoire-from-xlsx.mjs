import fs from "node:fs";
import path from "node:path";
import xlsx from "xlsx";

const workbookPath = path.join(process.cwd(), "data", "repertoire.xlsx");
const outputPath = path.join(process.cwd(), "data", "repertoire.ts");

const dayColumns = [
  { key: "monday", label: "月", shortLabel: "M", column: "M" },
  { key: "tuesday", label: "火", shortLabel: "Tu", column: "Tu" },
  { key: "wednesday", label: "水", shortLabel: "W", column: "W" },
  { key: "thursday", label: "木", shortLabel: "Th", column: "Th" },
  { key: "friday", label: "金", shortLabel: "F", column: "F" },
  { key: "saturday", label: "土", shortLabel: "S", column: "S" },
];

function isMarked(value) {
  if (value === true) return true;
  if (value === false || value == null) return false;
  const normalized = String(value).trim().toLowerCase();
  return normalized !== "" && !["0", "false", "no", "n", "-", "休"].includes(normalized);
}

function cleanText(value) {
  return value == null ? "" : String(value).trim();
}

if (!fs.existsSync(workbookPath)) {
  throw new Error(`Repertoire workbook not found: ${workbookPath}`);
}

const workbook = xlsx.readFile(workbookPath);
const sheetName = workbook.SheetNames[0];
const rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], {
  defval: "",
  raw: false,
});

const songs = rows
  .map((row, index) => {
    const artist = cleanText(row.Artist);
    const title = cleanText(row.Title);
    const note = cleanText(row.Note);

    if (!artist && !title) return null;
    if (!artist || !title) {
      throw new Error(`Row ${index + 2} must include both Artist and Title.`);
    }

    return {
      artist,
      title,
      days: dayColumns.filter((day) => isMarked(row[day.column])).map((day) => day.key),
      ...(note ? { note } : {}),
    };
  })
  .filter(Boolean);

const output = `export const repertoireDayOptions = ${JSON.stringify(dayColumns, null, 2)} as const;

export type RepertoireDayKey = (typeof repertoireDayOptions)[number]["key"];

export type RepertoireSong = {
  artist: string;
  title: string;
  days: RepertoireDayKey[];
  note?: string;
};

export const repertoireSongs: RepertoireSong[] = ${JSON.stringify(songs, null, 2)};
`;

fs.writeFileSync(outputPath, output, "utf8");
console.log(`Synced ${songs.length} repertoire songs from ${workbookPath}`);
