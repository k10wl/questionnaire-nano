import { ComponentProps } from 'react'

import { cn } from '@/lib/cn'

interface Props {
  withGradient?: boolean
}

export function Button({
  withGradient,
  children,
  className,
  ...rest
}: Props & ComponentProps<'button'>) {
  return (
    <button
      {...rest}
      type="button"
      className={cn(
        'min-h-16 rounded-2xl border border-gray-200 bg-gray-100 px-4 py-2 shadow-[#543C9740] drop-shadow-lg',
        withGradient && 'bg-nebula-gradient text-white',
        className
      )}
    >
      {children}
    </button>
  )
}
