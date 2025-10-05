import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

// Typography variants
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'blockquote' | 'code'

// Typography weight options
export type TypographyWeight = 'normal' | 'medium' | 'semibold' | 'bold'

// Typography props interface
export interface TypographyProps {
  variant?: TypographyVariant
  weight?: TypographyWeight
  italic?: boolean
  className?: string
  children: ReactNode
}

// Typography variant classes
export const typographyVariants: Record<TypographyVariant, string> = {
  h1: 'scroll-m-20 text-4xl font-bold lg:text-5xl',
  h2: 'scroll-m-20 text-3xl font-semibold',
  h3: 'scroll-m-20 text-2xl font-semibold',
  h4: 'scroll-m-20 text-xl font-semibold',
  h5: 'scroll-m-20 text-lg font-semibold',
  p: '',
  blockquote: 'mt-6 border-l-2 pl-6 italic',
  code: 'relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'
}

// Typography weight classes
export const typographyWeights: Record<TypographyWeight, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
}

// Base typography component
export const Typography = ({
  variant = 'p',
  weight = 'normal',
  italic = false,
  className,
  children
}: TypographyProps) => {
  const Component = variant === 'blockquote' ? 'blockquote' : variant === 'code' ? 'code' : variant

  return (
    <Component
      className={cn(
        typographyVariants[variant],
        typographyWeights[weight],
        italic && 'italic',
        className
      )}
    >
      {children}
    </Component>
  )
}

// Heading components
export const H1 = ({ className, children, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h1" className={className} {...props}>
    {children}
  </Typography>
)

export const H2 = ({ className, children, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h2" className={className} {...props}>
    {children}
  </Typography>
)

export const H3 = ({ className, children, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h3" className={className} {...props}>
    {children}
  </Typography>
)

export const H4 = ({ className, children, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h4" className={className} {...props}>
    {children}
  </Typography>
)

export const H5 = ({ className, children, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h5" className={className} {...props}>
    {children}
  </Typography>
)

// Text components
export const Text = ({ className, children, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="p" className={className} {...props}>
    {children}
  </Typography>
)

export const Bold = ({ className, children, ...props }: Omit<TypographyProps, 'variant' | 'weight'>) => (
  <Typography variant="p" weight="bold" className={className} {...props}>
    {children}
  </Typography>
)

export const Italic = ({ className, children, ...props }: Omit<TypographyProps, 'variant' | 'italic'>) => (
  <Typography variant="p" italic className={className} {...props}>
    {children}
  </Typography>
)

export const Blockquote = ({ className, children, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="blockquote" className={className} {...props}>
    {children}
  </Typography>
)

export const Code = ({ className, children, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="code" className={className} {...props}>
    {children}
  </Typography>
)

// Lead paragraph
export const Lead = ({ className, children, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Text className={cn("text-xl text-slate-700", className)} {...props}>
    {children}
  </Text>
)

// Small text
export const Small = ({ className, children, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Text className={cn("text-sm font-medium leading-none", className)} {...props}>
    {children}
  </Text>
)

// Muted text
export const Muted = ({ className, children, ...props }: Omit<TypographyProps, 'variant'>) => (
  <Text className={cn("text-sm text-slate-500", className)} {...props}>
    {children}
  </Text>
)