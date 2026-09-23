import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { JourneyPage, StagePage } from './pages/JourneyPage'
import { LessonPage } from './pages/LessonPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ObjectionPage, ObjectionsPage } from './pages/ObjectionsPage'
import { ProgressPage } from './pages/ProgressPage'
import { QuestionsPage } from './pages/QuestionsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="lernreise" element={<JourneyPage />} />
          <Route path="lernreise/:number" element={<StagePage />} />
          <Route path="lektion/:id" element={<LessonPage />} />
          <Route path="fragen" element={<QuestionsPage />} />
          <Route path="bedenken" element={<ObjectionsPage />} />
          <Route path="bedenken/:slug" element={<ObjectionPage />} />
          <Route path="fortschritt" element={<ProgressPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
