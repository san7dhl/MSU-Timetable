# MSU-Timetable

A powerful, web-based application designed to simplify the complex task of creating and managing university timetables. It features a visual, drag-and-drop interface for scheduling courses while automatically detecting conflicts for both student groups and faculty.

Built for real-time collaboration, multiple users can work on the same timetable simultaneously, with all changes instantly synced through a Firebase backend.

---

## Key Features

- **Real-time Collaboration**  
  Powered by Firebase, multiple users can build and edit schedules together with live updates—no refresh needed.

- **Automatic Clash Detection**  
  Instantly highlights scheduling conflicts. Prevents faculty or student groups from being scheduled in overlapping time slots.

- **Faculty Workload Management**  
  Tracks weekly teaching loads and displays warnings if a faculty member exceeds their configured limit.

- **Complex Program Hierarchies**  
  Supports shared courses between programs. For example, scheduling a course for "BCA-BTech Common" auto-reflects it in both "BCA" and "BTech CSE" timetables.

- **Data Management via Excel**  
  Import/export all essential data (courses, faculty, programs, etc.) using a structured multi-sheet Excel file.

- **Print & Export Options**  
  Generate clean, printable views and export timetables to Excel—for entire student groups or individual faculty members.

---

## Technology Stack

- **Frontend**  
  Vanilla JavaScript (ES6 Modules), Tailwind CSS

- **Backend & Real-time Database**  
  Google Firebase (Firestore & Authentication)

- **Core Libraries**  
  - [SheetJS (xlsx)](https://github.com/SheetJS/sheetjs) – Excel file parsing  
  - [SweetAlert2](https://sweetalert2.github.io/) – Alerts and modals

- **Deployment**  
  Production-ready for platforms like **Netlify**, using secure, serverless functions to manage sensitive API keys.

---

## 📌 Description (350 Characters)

**University Timetable Planning Tool** is a collaborative, web-based app for creating conflict-free university schedules. It features drag-and-drop editing, real-time updates via Firebase, workload tracking, Excel integration, and print/export options—all in a modern, user-friendly interface.
