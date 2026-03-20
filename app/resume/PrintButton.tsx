'use client'

export default function PrintButton() {
  return (
    <div className="fixed bottom-6 right-6 print:hidden">
      <button
        onClick={() => window.print()}
        className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-lg"
      >
        PDF로 저장
      </button>
    </div>
  )
}
