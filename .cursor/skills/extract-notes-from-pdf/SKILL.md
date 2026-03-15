---
name: extract-notes-from-pdf
description: Extract medical study notes from PDF textbooks and encode them into the FMG Notes app data format. Use when the user uploads a PDF, asks to add a new chapter, or wants to extract notes from a document.
---

# Extract Notes from PDF

Converts PDF medical textbook pages into structured chapter data files for the FMG Notes study app.

## Prerequisites

- PyMuPDF (`pip install PyMuPDF`) — should already be installed
- The PDF file in the project root or `notes/` folder

## Workflow

### Step 1: Identify the Pages

1. Open the PDF with PyMuPDF and check total page count
2. Extract the Table of Contents page(s) — typically the first few pages. Text-extract them to find chapter names and page ranges
3. **Important**: The book's page numbers may differ from PDF page numbers. The first few pages (cover, author, ToC) offset the numbering. Verify by checking where "Chapter 1" content actually starts in the PDF

```python
import fitz
doc = fitz.open("FILENAME.pdf")
print(f"Total pages: {doc.page_count}")
for pg in range(5):  # check first few pages for ToC
    print(f"\n===== PDF PAGE {pg+1} =====")
    print(doc[pg].get_text()[:2000])
```

### Step 2: Extract Content as Images

Text extraction alone misses diagrams, flowcharts, handwritten annotations, and fill-in-the-blank answers. Always extract pages as **images** for visual analysis.

```python
import fitz
doc = fitz.open("FILENAME.pdf")
import os
os.makedirs("chapter_images", exist_ok=True)

for pg_num in range(START_IDX, END_IDX):  # 0-indexed PDF page numbers
    page = doc[pg_num]
    mat = fitz.Matrix(2.0, 2.0)  # 2x resolution for readability
    pix = page.get_pixmap(matrix=mat)
    pix.save(f"chapter_images/page_{pg_num+1}.png")
```

### Step 3: Read Each Page Image

Use the Read tool on each extracted PNG. This gives full visual context including:
- Printed text content
- Flowchart diagrams with arrows and labels
- Handwritten annotations (answers filled in blanks, corrections, highlights)
- Table structures
- Clinical correlation boxes
- MCQ questions with marked correct answers

### Step 4: Create the Markdown Notes

Create `notes/{module_id}/Chapter_NN_Title.md` with:
- Chapter title and source attribution
- Sections with pathways, tables, key points
- ASCII flowcharts for biological pathways
- All MCQs with answers and rationale
- Quick revision summary at the end

See `notes/obg/Chapter_01_Physiology_of_Conception.md` as a reference.

### Step 5: Create the App Data File

Create `app/src/data/modules/{module_id}/chNN.ts` implementing the `Chapter` interface.

#### Content blocks to extract per section:
- `flowchart` — for pathways (spermatogenesis, drug mechanisms, etc). Map each step as a `FlowNode` with label/sublabel, connect with `FlowEdge`s
- `table` — for comparison tables, timing tables, numbered data
- `keyPoint` — for definitions, important concepts (label + value)
- `clinicalNote` — for clinical correlations, exam tips
- `bulletList` — for lists of features, symptoms, etc
- `text` — for standalone explanatory text

#### Study mode data to extract:
- **flashcards** (~15 per chapter): key facts, numbers, timings, definitions. Front = question, back = concise answer. Tag with topic keywords
- **mcqs** (all from the PDF): exact question text, all options, correct index, explanation
- **fillBlanks** (~8 per chapter): derived from the PDF's blank-filling format and key facts. Use `_____` as blank placeholder
- **quickRevision** (~8 points): one-line summaries of the most important facts, using `**bold**` for key terms

### Step 6: Register the Chapter

Add the import to the module's `index.ts`:

```typescript
// app/src/data/modules/{module_id}/index.ts
import chNN from "./chNN";
// add to chapters array
```

If this is a **new module**, also:
1. Create `app/src/data/modules/{module_id}/index.ts` with the `Module` object
2. Import and add it to `app/src/data/modules/index.ts`
3. Create `notes/{module_id}/` folder

## Reference: Module Colors

Available module colors: `orange`, `teal`, `blue`, `purple`, `rose`, `green`

## Gotchas

- **Handwritten text** in PDFs extracts as garbled characters — always use image extraction + visual reading
- **Page number offset**: book page 1 is usually NOT PDF page 1 (cover + ToC pages come first)
- **Bold markup**: use `**text**` in flashcard/revision strings — the app's renderer parses this
- **Fill-blank format**: use exactly `_____` (5 underscores) as the blank placeholder in sentences
- Clean up temporary image files after extraction
