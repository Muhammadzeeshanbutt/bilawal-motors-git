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

// Load server renderer
const { render } = await import('../dist/server/entry-server.js')

// Read the original client index template once
const template = await fs.readFile(indexPath, 'utf-8')

// Render home page
const homeRendered = await render('/')
let homeHtml = template
homeHtml = homeHtml.replace('<!--app-head-->', homeRendered.head ?? '')
homeHtml = homeHtml.replace('<!--app-html-->', homeRendered.html ?? '')
await fs.writeFile(indexPath, homeHtml)

console.log('Static export: index.html updated with rendered content.')
