export function LoadingSpinner() {
  return (
    <div data-testid="loading-component">
      <div className="w-4 h-4 rounded-full border-2 border-b-transparent anime-spin border-[inherit]" />
    </div>
  )
}