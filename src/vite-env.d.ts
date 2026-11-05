/// <reference types="vite/client" />

declare module '*.css'

declare module 'lucide-react' {
  import type { ComponentType, SVGProps } from 'react'
  type Icon = ComponentType<SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }>
  export const ArrowDown: Icon
  export const ArrowRight: Icon
  export const ArrowUpRight: Icon
  export const Check: Icon
  export const ChevronDown: Icon
  export const Menu: Icon
  export const ScanLine: Icon
  export const ShieldCheck: Icon
  export const Sparkles: Icon
  export const X: Icon
}
