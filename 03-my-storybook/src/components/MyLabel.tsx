import "./MyLabel.css"

interface Props {
  /** Capitalize all letters */
  allCaps?: boolean
  /** Label color */
  color?: "text-primary" | "text-secondary" | "text-tertiary"
  /** Font color */
  fontColor?: string
  /** Text to display */
  label: string
  /** Label size */
  size?: "normal" | "h1" | "h2" | "h3"
}

export const MyLabel = ({
  allCaps = false,
  color,
  fontColor,
  label,
  size = "normal",
}: Props) => {
  return (
    <span
      className={`${size} ${color} label`}
      style={{ color: `${fontColor}` }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
