export default function GoldText({ children, className = '', style = {} }) {
  return (
    <span
      className={`gold-gradient-text ${className}`}
      style={style}
    >
      {children}
    </span>
  )
}
