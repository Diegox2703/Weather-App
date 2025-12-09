export type Unarray<T> = {
  [K in keyof T]: T[K] extends (infer U)[] ? U : T[K]
}