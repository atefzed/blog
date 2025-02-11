import { create } from 'zustand'

type AppState = {
  selectedTags: string[]
  toggleTag: (tag: string) => void
}

const useAppStore = create<AppState>((set) => ({
  selectedTags: [],
  toggleTag: (tag: string) =>
    set((state) => ({
      selectedTags: state.selectedTags.includes(tag.toLowerCase())
        ? state.selectedTags.filter((t) => t !== tag.toLowerCase())
        : [...state.selectedTags, tag.toLowerCase()],
    })),
}))

export default useAppStore