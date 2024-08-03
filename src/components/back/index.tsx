import { ComponentProps } from 'react'

import { Icon } from '@/components/icon'
import { ChevronLeft } from '@/icons'
import { cn } from '@/lib/cn'

interface Props {
  prevAnswer?: boolean
}

export function Back({
  prevAnswer,
  children,
  className,
  ...rest
}: Props & ComponentProps<'button'>) {
  return (
    <button
      {...rest}
      type="button"
      className={cn('grid size-6 place-items-center', className)}
    >
      <Icon src={ChevronLeft} alt="<" />
    </button>
  )
}
