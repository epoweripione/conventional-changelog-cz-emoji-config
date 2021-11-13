# conventional-changelog-cz-emoji-config

[![NPM version][version-image]][version-url] [![NPM downloads][download-image]][download-url]

Sharable conventional changelog configuration for [cz-emoji](https://github.com/ngryman/cz-emoji) style commit.

Inspired by @[Arvin Xu](https://github.com/arvinxx)'s [gitmoji-commit-workflow](https://github.com/arvinxx/gitmoji-commit-workflow).

The code refers to [conventional-changelog-angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) and [conventional-changelog-gitmoji-config](https://github.com/arvinxx/gitmoji-commit-workflow/tree/master/packages/changelog#readme).

## cz-emoji configuration file (`package.json`)
```json
{
  "config": {
    "commitizen": {
      "path": "cz-emoji"
    },
    "cz-emoji": {
      "symbol": true,
      "conventional": true,
      "types": [
        {
          "emoji": "✨",
          "code": ":sparkles:",
          "description": "Introduce new features",
          "name": "feat"
        },
        {
          "emoji": "🐛",
          "code": ":bug:",
          "description": "Fix bug",
          "name": "fix"
        },
        {
          "emoji": "🚑",
          "code": ":ambulance:",
          "description": "Critical hotfix",
          "name": "hotfix"
        },
        {
          "emoji": "🩹",
          "code": ":adhesive_bandage:",
          "description": "Simple fix for a non-critical issue",
          "name": "patch"
        },
        {
          "emoji": "🎨",
          "code": ":art:",
          "description": "Improve structure / format of the code",
          "name": "style"
        },
        {
          "emoji": "📝",
          "code": ":memo:",
          "description": "Add or update documentation",
          "name": "docs"
        },
        {
          "emoji": "🌠️",
          "code": ":shooting_star:",
          "description": "Improve performance",
          "name": "perf"
        },
        {
          "emoji": "🎫",
          "code": ":file_cabinet:",
          "description": "Chores",
          "name": "chore"
        },
        {
          "emoji": "🏭",
          "code": ":factory:",
          "description": "Add or update build system",
          "name": "build"
        },
        {
          "emoji": "💄",
          "code": ":lipstick:",
          "description": "Add or update UI and style files",
          "name": "ui"
        },
        {
          "emoji": "🌀",
          "code": ":cyclone:",
          "description": "Refactor code",
          "name": "refactor"
        },
        {
          "emoji": "🔧",
          "code": ":wrench:",
          "description": "Add or update configuration files",
          "name": "config"
        },
        {
          "emoji": "🌐",
          "code": ":globe_with_meridians:",
          "description": "Internationalization and localization",
          "name": "i18n"
        },
        {
          "emoji": "✎",
          "code": ":lower_right_pencil:",
          "description": "Fix typos",
          "name": "typo"
        },
        {
          "emoji": "⏪",
          "code": ":rewind:",
          "description": "Revert changes",
          "name": "revert"
        },
        {
          "emoji": "🔀",
          "code": ":twisted_rightwards_arrows:",
          "description": "Merge branches",
          "name": "merge"
        },
        {
          "emoji": "💥",
          "code": ":boom:",
          "description": "Introduce breaking changes",
          "name": "break"
        },
        {
          "emoji": "👽",
          "code": ":alien:",
          "description": "Update code due to external API changes",
          "name": "api"
        },
        {
          "emoji": "🚨",
          "code": ":rotating_light:",
          "description": "Fix compiler / linter warnings",
          "name": "lint"
        },
        {
          "emoji": "✅",
          "code": ":white_check_mark:",
          "description": "Add, update, or pass tests",
          "name": "test"
        },
        {
          "emoji": "🔥",
          "code": ":fire:",
          "description": "Remove code or files",
          "name": "prune"
        },
        {
          "emoji": "🚚",
          "code": ":truck:",
          "description": "Move or rename resources (e.g.: files, paths, routes)",
          "name": "move"
        },
        {
          "emoji": "📡",
          "code": ":satellite:",
          "description": "Data exploration / inspection",
          "name": "data"
        },
        {
          "emoji": "💽",
          "code": ":computer_disk:",
          "description": "Perform database related changes",
          "name": "db"
        },
        {
          "emoji": "🚸",
          "code": ":children_crossing:",
          "description": "Improve user experience / usability",
          "name": "ux"
        },
        {
          "emoji": "👔",
          "code": ":necktie:",
          "description": "Add or update business logic",
          "name": "business"
        },
        {
          "emoji": "🏠",
          "code": ":house:",
          "description": "Make architectural changes",
          "name": "arch"
        },
        {
          "emoji": "💬",
          "code": ":speech_balloon:",
          "description": "Add or update text and literals",
          "name": "texts"
        },
        {
          "emoji": "🍱",
          "code": ":bento:",
          "description": "Add or update assets",
          "name": "assets"
        },
        {
          "emoji": "🛂",
          "code": ":passport_control:",
          "description": "Work on code related to authorization, roles and permissions",
          "name": "auth"
        },
        {
          "emoji": "♿",
          "code": ":wheelchair:",
          "description": "Improve accessibility",
          "name": "access"
        },
        {
          "emoji": "👌",
          "code": ":ok_hand:",
          "description": "Update code due to code review changes",
          "name": "review"
        },
        {
          "emoji": "🧪",
          "code": ":test_tube:",
          "description": "Perform experiments",
          "name": "experiment"
        },
        {
          "emoji": "🚩",
          "code": ":triangular_flag_on_post:",
          "description": "Add, update, or remove feature flags",
          "name": "flags"
        },
        {
          "emoji": "💫",
          "code": ":dizzy:",
          "description": "Add or update animations and transitions",
          "name": "animation"
        },
        {
          "emoji": "📱",
          "code": ":iphone:",
          "description": "Work on responsive design",
          "name": "responsive"
        },
        {
          "emoji": "📔",
          "code": ":notebook_with_decorative_cover:",
          "description": "Add or update types",
          "name": "types"
        },
        {
          "emoji": "🤡",
          "code": ":clown_face:",
          "description": "Mock things",
          "name": "mock"
        },
        {
          "emoji": "🔨",
          "code": ":hammer:",
          "description": "Add or update development scripts",
          "name": "script"
        },
        {
          "emoji": "🥅",
          "code": ":goal_net:",
          "description": "Catch errors",
          "name": "error"
        },
        {
          "emoji": "🩺",
          "code": ":stethoscope:",
          "description": "Add or update healthcheck",
          "name": "healthcheck"
        },
        {
          "emoji": "📦",
          "code": ":package:",
          "description": "Add or update compiled files or packages",
          "name": "package"
        },
        {
          "emoji": "➕",
          "code": ":heavy_plus_sign:",
          "description": "Add dependencies",
          "name": "dep-add"
        },
        {
          "emoji": "➖",
          "code": ":heavy_minus_sign:",
          "description": "Remove dependencies",
          "name": "dep-rm"
        },
        {
          "emoji": "⬇",
          "code": ":arrow_down:",
          "description": "Downgrade dependencies",
          "name": "dep-down"
        },
        {
          "emoji": "⬆",
          "code": ":arrow_up:",
          "description": "Upgrade dependencies",
          "name": "dep-up"
        },
        {
          "emoji": "📌",
          "code": ":pushpin:",
          "description": "Pin dependencies to specific versions",
          "name": "pushpin"
        },
        {
          "emoji": "🎉",
          "code": ":tada:",
          "description": "Begin a project",
          "name": "init"
        },
        {
          "emoji": "🚧",
          "code": ":construction:",
          "description": "Work in progress",
          "name": "wip"
        },
        {
          "emoji": "🚀",
          "code": ":rocket:",
          "description": "Deploy stuff",
          "name": "deploy"
        },
        {
          "emoji": "🔖",
          "code": ":bookmark:",
          "description": "Release / Version tags",
          "name": "release"
        },
        {
          "emoji": "📈",
          "code": ":chart_with_upwards_trend:",
          "description": "Add or update analytics or track code",
          "name": "analytics"
        },
        {
          "emoji": "🔒",
          "code": ":lock:",
          "description": "Fix security issues",
          "name": "security"
        },
        {
          "emoji": "👷",
          "code": ":construction_worker:",
          "description": "Add or update CI build system",
          "name": "ci"
        },
        {
          "emoji": "💚",
          "code": ":green_heart:",
          "description": "Fix CI Build",
          "name": "fixci"
        },
        {
          "emoji": "🧹",
          "code": ":broom:",
          "description": "Deprecate code that needs to be cleaned up",
          "name": "clean"
        },
        {
          "emoji": "🚮",
          "code": ":trash:",
          "description": "Remove dead code",
          "name": "deadcode"
        },
        {
          "emoji": "🐳",
          "code": ":whale:",
          "description": "Work about Docker",
          "name": "docker"
        },
        {
          "emoji": "🎡",
          "code": ":ferris_wheel:",
          "description": "Work about Kubernetes",
          "name": "k8s"
        },
        {
          "emoji": "🍎",
          "code": ":apple:",
          "description": "Fix something on macOS",
          "name": "osx"
        },
        {
          "emoji": "🐧",
          "code": ":penguin:",
          "description": "Fix something on Linux",
          "name": "linux"
        },
        {
          "emoji": "🏁",
          "code": ":checkered_flag:",
          "description": "Fix something on Windows",
          "name": "windows"
        },
        {
          "emoji": "🤖",
          "code": ":robot:",
          "description": "Fix something on Android",
          "name": "android"
        },
        {
          "emoji": "🍏",
          "code": ":green_apple:",
          "description": "Fix something on iOS",
          "name": "ios"
        },
        {
          "emoji": "🙈",
          "code": ":see_no_evil:",
          "description": "Add or update .gitignore file",
          "name": "ignore"
        },
        {
          "emoji": "💡",
          "code": ":bulb:",
          "description": "Add or update comments in source code",
          "name": "comment"
        },
        {
          "emoji": "📸",
          "code": ":camera_flash:",
          "description": "Add or update snapshots",
          "name": "snapshot"
        },
        {
          "emoji": "🔊",
          "code": ":loud_sound:",
          "description": "Add or update logs",
          "name": "addlog"
        },
        {
          "emoji": "🔇",
          "code": ":mute:",
          "description": "Remove logs",
          "name": "rmlog"
        },
        {
          "emoji": "🌱",
          "code": ":seedling:",
          "description": "Add or update seed files",
          "name": "seed"
        },
        {
          "emoji": "🔍",
          "code": ":mag:",
          "description": "Improve SEO",
          "name": "seo"
        },
        {
          "emoji": "👥",
          "code": ":busts_in_silhouette:",
          "description": "Add or update contributor(s)",
          "name": "contrib"
        },
        {
          "emoji": "📄",
          "code": ":page_facing_up:",
          "description": "Add or update license",
          "name": "license"
        },
        {
          "emoji": "🥚",
          "code": ":egg:",
          "description": "Add or update an easter egg",
          "name": "egg"
        },
        {
          "emoji": "🍻",
          "code": ":beers:",
          "description": "Write code drunkenly",
          "name": "beer"
        },
        {
          "emoji": "💩",
          "code": ":poop:",
          "description": "Write bad code that needs to be improved",
          "name": "poo"
        }
      ]
    }
  },
}
```

## Conventional changelog configuration File (`.changelogrc.js`)

`conventional-changelog-cz-emoji-config` uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig#cosmiconfigsync) to find and load your configuration object. Starting from the current working directory, it looks for the following possible sources:

- a `changelog` property in `package.json`
- a `.changelogrc` file
- a `changelog.config.js` file exporting a JS object

The `.changelogrc` file (without extension) can be in JSON or YAML format. You can add a filename extension to help your text editor provide syntax checking and highlighting:

- .changelogrc.json
- .changelogrc.yaml / .changelogrc.yml
- .changelogrc.js

```typescript
module.exports = {
    headerPattern: /^([\w\-]*)(?:\(([\w\-\*]*)\))?:\s+((?:.*(?=\())|.*)(?:\(#(\d*)\))?$/,
    headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
    displayTypes: ['*'],
    displayScopes: ['*'],
    displayTitles: {
        'feat': 'Features',
        'fix': 'Bug Fixes',
        'hotfix': 'Bug Fixes',
        'patch': 'Bug Fixes',
        'style': 'Styles',
        'docs': 'Documentation',
        'perf': 'Performance Improvements',
        'chore': 'Chores',
        'build': 'Build System',
        'prune': 'Prune & Move & Rename',
        'ui': 'UI',
        'test': 'Tests',
        'lint': 'Lint',
        'refactor': 'Code Refactoring',
        'config': 'Configuration',
        'i18n': 'Internationalization & Localization',
        'typo': 'Typos',
        'revert': 'Reverts',
        'merge': 'Merge',
        'break': 'BREAKING CHANGES',
        'api': 'API',
        'move': 'Move & Rename',
        'data': 'Data',
        'db': 'Database',
        'ux': 'User experience & Usability',
        'business': 'Business Logic',
        'arch': 'Architecture',
        'texts': 'Text & Literals',
        'assets': 'Assets',
        'auth': 'Authorization',
        'access': 'Accessibility',
        'review': 'Review Changes',
        'experiment': 'Experiments',
        'flags': 'Feature Flags',
        'animation': 'Animations',
        'responsive': 'Responsive Design',
        'types': 'Types',
        'mock': 'Mock',
        'script': 'Scripts',
        'error': 'Errors',
        'healthcheck': 'Healthcheck',
        'package': 'Packages',
        'dep-add': 'Dependencies',
        'dep-rm': 'Dependencies',
        'dep-down': 'Dependencies',
        'pushpin': 'Dependencies',
        'dep-up': 'Dependencies',
        'init': 'Init Project',
        'wip': 'Work in Progress',
        'deploy': 'Deploy',
        'release': 'Release & Version tags',
        'analytics': 'Analytics',
        'security': 'Security',
        'ci': 'Continuous Integration',
        'fixci': 'Continuous Integration',
        'clean': 'Clean',
        'deadcode': 'Clean',
        'docker': 'Docker',
        'k8s': 'Kubernetes',
        'osx': 'macOS',
        'linux': 'Linux',
        'windows': 'Windows',
        'android': 'Android',
        'ios': 'iOS',
        'ignore': 'Git',
        'comment': 'Comments',
        'snapshot': 'Snapshots',
        'addlog': 'Logs',
        'rmlog': 'Logs',
        'seed': 'Seed files',
        'seo': 'SEO',
        'contrib': 'Contributors',
        'license': 'License',
        'egg': 'Easter Egg',
        'beer': 'Bad Code',
        'poo': 'Bad Code',
    },
    displayTitleEmojis: {
        'Features': '✨',
        'Bug Fixes': '🐛',
        'Styles': '🎨',
        'Documentation': '📝',
        'Performance Improvements': '🌠️',
        'Chores': '🎫',
        'Build System': '🏭',
        'Prune & Move & Rename': '🔥',
        'UI': '💄',
        'Tests': '✅',
        'Lint': '🚨',
        'Code Refactoring': '🌀',
        'Configuration': '🔧',
        'Internationalization & Localization': '🌐',
        'Typos': '✎',
        'Reverts': '⏪',
        'Merge': '🔀',
        'BREAKING CHANGES': '💥',
        'API': '👽',
        'Move & Rename': '🚚',
        'Data': '📡',
        'Database': '💽',
        'User experience & Usability': '🚸',
        'Business Logic': '👔',
        'Architecture': '🏠',
        'Text & Literals': '💬',
        'Assets': '🍱',
        'Authorization': '🛂',
        'Accessibility': '♿',
        'Review Changes': '👌',
        'Experiments': '🧪',
        'Feature Flags': '🚩',
        'Animations': '💫',
        'Responsive Design': '📱',
        'Types': '📔',
        'Mock': '🤡',
        'Scripts': '🔨',
        'Errors': '🥅',
        'Healthcheck': '🩺',
        'Packages': '📦',
        'Dependencies': '📌',
        'Init Project': '🎉',
        'Work in Progress': '🚧',
        'Deploy': '🚀',
        'Release & Version tags': '🔖',
        'Analytics': '📈',
        'Security': '🔒',
        'Continuous Integration': '👷',
        'Clean': '🧹',
        'Docker': '🐳',
        'Kubernetes': '🎡',
        'macOS': '🍎',
        'Linux': '🐧',
        'Windows': '🏁',
        'Android': '🤖',
        'iOS': '🍏',
        'Git': '🙈',
        'Comments': '💡',
        'Snapshots': '📸',
        'Logs': '🔊',
        'Seed files': '🌱',
        'SEO': '🔍',
        'Contributors': '👥',
        'License': '📄',
        'Easter Egg': '🥚',
        'Bad Code': '💩',
    },
    scopeDisplayName: {},
    withEmoji: true,
    showAuthor: false,
}
```

<!-- npm url -->

[version-image]: http://img.shields.io/npm/v/conventional-changelog-cz-emoji-config.svg?color=deepgreen&label=latest
[version-url]: http://npmjs.org/package/conventional-changelog-cz-emoji-config
[download-image]: https://img.shields.io/npm/dm/conventional-changelog-cz-emoji-config.svg
[download-url]: https://npmjs.org/package/conventional-changelog-cz-emoji-config
