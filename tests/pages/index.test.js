// basic.test.js
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils-edge'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./src', import.meta.url)),
  })

  it('renders the index page', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')

    expect(html).toContain('O mundo evoluiu')
  })
})

// só para ver test