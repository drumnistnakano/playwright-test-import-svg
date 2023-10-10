import { devices, PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  use: {
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Pixel 4',
      use: {
        browserName: 'chromium',
        ...devices['Pixel 4'],
      },
    },
  ],
  timeout: 120000,
}

export default config
