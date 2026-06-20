import { spawn } from 'node:child_process'
import { access } from 'node:fs/promises'
import { setTimeout as delay } from 'node:timers/promises'

const host = '127.0.0.1'
const port = 4174
const url = `http://${host}:${port}`
const reportPath = './lighthouse-report.json'

await access('./out/index.html')

const server = spawn(
  process.execPath,
  ['./node_modules/serve/build/main.js', 'out', '--listen', String(port)],
  { stdio: 'ignore' }
)

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(url)
      if (response.ok) return
    } catch {
      // The static server is still starting.
    }
    await delay(100)
  }

  throw new Error(`Static server did not become ready at ${url}`)
}

function runLighthouse() {
  return new Promise((resolve, reject) => {
    const audit = spawn(
      'lighthouse',
      [
        url,
        '--quiet',
        "--chrome-flags=--headless",
        '--output=json',
        `--output-path=${reportPath}`,
      ],
      { stdio: 'inherit' }
    )

    audit.on('error', reject)
    audit.on('exit', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`Lighthouse exited with code ${code}`))
    })
  })
}

try {
  await waitForServer()
  await runLighthouse()
} finally {
  server.kill('SIGTERM')
}
