import { FC } from 'react'
import reactLogo from '@/assets/react.svg'

export const ReactLogo: FC = () => (
  <a href="https://react.dev" target="_blank">
    <img src={String(reactLogo)} className="logo react" alt="React logo" />
  </a>
)
