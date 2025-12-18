import type { SkeletonProps } from './skeleton.types'
import { styles } from './styles'

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={styles({ className })}></div>
  )
}