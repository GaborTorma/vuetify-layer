import type { Config } from 'release-it'
import { name } from './package.json'

// eslint-disable-next-line no-template-curly-in-string
const versionTemplate = '${version}'

export default {
  git: {
    commitMessage: `Release: ${name} ${versionTemplate}`,
    tagAnnotation: `Release: ${name} ${versionTemplate}`,
    tagName: `${name}-v${versionTemplate}`,
    requireCommits: true,
    requireCommitsFail: false,
  },
  github: {
    release: true,
  },
  npm: {
    publish: true,
  },
} satisfies Config
