export default function Header({ title, className = '' }) {
  return <h1 className={`title ${className}`}>{title}</h1>
}
