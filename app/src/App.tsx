import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { Dashboard } from "./pages/Dashboard";
import { ModulePage } from "./pages/ModulePage";
import { ChapterPage } from "./pages/ChapterPage";
import { ExploreView } from "./components/explore/ExploreView";
import { FlashcardDeck } from "./components/flashcards/FlashcardDeck";
import { QuizView } from "./components/quiz/QuizView";
import { FillBlankView } from "./components/fill-blank/FillBlankView";
import { RevisionView } from "./components/revision/RevisionView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Dashboard />} />
          <Route path="module/:moduleId" element={<ModulePage />} />
          <Route
            path="module/:moduleId/chapter/:chapterId"
            element={<ChapterPage />}
          >
            <Route index element={<ExploreView />} />
            <Route path="flashcards" element={<FlashcardDeck />} />
            <Route path="quiz" element={<QuizView />} />
            <Route path="fill-blanks" element={<FillBlankView />} />
            <Route path="revision" element={<RevisionView />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
