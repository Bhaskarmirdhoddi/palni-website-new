export default function RotationButton({ label, className }) {
  return (
    <button type="button" className={className} aria-label={label} aria-pressed="false" data-rotation-toggle>
      <svg className="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M9 5v14m6-14v14" />
        <path d="m8 5 12 7-12 7z" />
      </svg>
    </button>
  )
}
