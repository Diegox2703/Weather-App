import type { SkeletonProps } from './skeleton.types'

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={`${className} bg-Neutral-700 animate-pulse`}></div>
  )
}