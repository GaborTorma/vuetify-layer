import type { Config } from 'release-it'
import { name } from './package.json'

// eslint-disable-next-line no-template-curly-in-string
const versionTemplate = '${version}'
const releaseName = name.split('/').pop()

export default {
  git: {
    commitMessage: `Release: ${releaseName} ${versionTemplate}`,
    tagAnnotation: `Release: ${releaseName} ${versionTemplate}`,
    tagName: `${releaseName}-v${versionTemplate}`,
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
