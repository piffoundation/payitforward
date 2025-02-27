import { repository } from '@/../package.json'
import path from 'node:path'

export const editPath = (filePath: string) => {
  const base = path.dirname(path.join(filePath, '../../'))
  console.log(filePath)
  const currentPath = base === '.' ? filePath : filePath
    .replaceAll(base, '')
    .replaceAll('dist', 'src')
    .replaceAll('.astro.mjs', '.mdx')
  const currentPathPart = currentPath ? `/${currentPath}` : ''
  const improveFile = `${repository.url}/blob/main${currentPathPart}`
  return improveFile
}