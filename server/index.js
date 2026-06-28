import express from "express";
import cors from "cors";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;
const DB_PATH = join(__dirname, "db.json");

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const readDB = () => JSON.parse(readFileSync(DB_PATH, "utf-8"));
const writeDB = (data) => writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

// GET /api/projects
app.get("/api/projects", (req, res) => {
  const db = readDB();
  const { tag } = req.query;
  let projects = db.projects;
  if (tag && tag !== "All") {
    projects = projects.filter((p) => p.tags.includes(tag));
  }
  res.json({ success: true, data: projects });
});

// GET /api/skills
app.get("/api/skills", (req, res) => {
  const db = readDB();
  res.json({ success: true, data: db.skills });
});

// GET /api/education
app.get("/api/education", (req, res) => {
  const db = readDB();
  res.json({ success: true, data: db.education });
});

// POST /api/contact
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate
  const errors = [];
  if (!name || name.trim().length < 2) errors.push("Name must be at least 2 characters.");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("A valid email is required.");
  if (!subject || subject.trim().length < 3) errors.push("Subject must be at least 3 characters.");
  if (!message || message.trim().length < 10) errors.push("Message must be at least 10 characters.");

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  // Simulate saving to DB
  const db = readDB();
  const newMessage = {
    id: Date.now().toString(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  };
  db.messages.push(newMessage);
  writeDB(db);

  res.status(201).json({
    success: true,
    message: "Message received! I'll get back to you within 24 hours.",
    data: { id: newMessage.id },
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API server running at http://localhost:${PORT}`);
});
