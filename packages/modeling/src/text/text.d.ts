import Path2 from '../geometries/path2/type'

export default text

export interface TextPaths extends Array<Path2> {}

export interface VectorTextOptions {
  xOffset?: number
  yOffset?: number
  height?: number
  lineSpacing?: number
  letterSpacing?: number
  align?: 'left' | 'center' | 'right'
  extrudeOffset?: number
  input?: string
}

declare function text(): TextPaths
declare function text(text: string): TextPaths
declare function text(options: VectorTextOptions): TextPaths
declare function text(options: Omit<VectorTextOptions, 'input'>, text: string): TextPaths
