import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

// React adaptation of Inspira UI's Interactive Hover Button.
// https://docs.inspira-ui.com/docs/en/components/buttons/interactive-hover-button
type SharedProps = { text?: string; wide?: boolean; className?: string }
type Props = SharedProps & (
  | (Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & { href: string })
  | (Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & { href?: never })
)

export default function InteractiveHoverButton({ text = 'Button', wide = false, className = '', ...props }: Props) {
  const classes = `interactive-hover-button${wide ? ' interactive-hover-button--wide' : ''} ${className}`.trim()
  const content = <>
    <span className="ihb-rest"><span className="ihb-dot" aria-hidden="true" /><span className="ihb-label">{text}</span></span>
    <span className="ihb-hover" aria-hidden="true"><span>{text}</span></span>
  </>
  if (props.href !== undefined) return <a {...props} className={classes}>{content}</a>
  return <button {...props} type={props.type ?? 'button'} className={classes}>{content}</button>
}
