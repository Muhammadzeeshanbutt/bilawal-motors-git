/**
 * Injects server-rendered HTML into dist/client/index.html for static deployment (e.g. Vercel).
 * Run after: npm run build
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const clientDir = path.join(__dirname, '..', 'dist', 'client')
const indexPath = path.join(clientDir, 'index.html')

const { render } = await import('../dist/server/entry-server.js')
const rendered = await render('/')

let html = await fs.readFile(indexPath, 'utf-8')
html = html.replace('<!--app-head-->', rendered.head ?? '')
html = html.replace('<!--app-html-->', rendered.html ?? '')

await fs.writeFile(indexPath, html)
console.log('Static export: index.html updated with rendered content.')
