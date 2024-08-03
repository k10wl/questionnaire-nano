import Image from 'next/image'
import { ComponentProps } from 'react'

import { cn } from '@/lib/cn'

export function Icon({
  src,
  alt,
  className,
  ...rest
}: ComponentProps<typeof Image>) {
  return (
    <Image
      {...rest}
      className={cn('select-none', className)}
      draggable={false}
      alt={alt}
      src={src}
    />
  )
}
