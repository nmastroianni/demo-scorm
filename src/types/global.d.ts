// src/global.d.ts

interface Window {
  GetStatus: () => void
  SetFailed: () => void
  SetPassed: () => void
  SetScore: () => void
  RecordMultipleChoiceInteraction: () => void
  RecordFillInInteraction: () => void
}
