# Solhint Plugin

Provides solhint rules to enforce the extra Solidity style rules used at yearn
Network.

## Table of Contents
 - [Install](#install)
 - [Usage](#usage)
 - [Contributing](#contributing)
 - [License](#license)

## Install
Install via NPM:
```bash
npm install --save-dev solhint-plugin-yearn
```

Add to your solhint configuration and enable some rules:
```json
{
  "plugins": [
    "yearn"
  ],
  "rules": {
    "yearn/underscore-function-args": "error"
  }
}
```

## Usage
Provides the following rules:
 - `yearn/underscore-function-args`
   Function arguments must start with `_` to help distinguish them from storage
   variables.
