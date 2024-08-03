import { ComponentProps } from 'react'

import { Icon } from '@/components/icon'
import { LogoSquare } from '@/icons'

type Props = Omit<ComponentProps<typeof Icon>, 'src' | 'alt'>

export function NebulaLogo({ ...rest }: Props) {
  return <Icon {...rest} src={LogoSquare} alt="N" />
}
