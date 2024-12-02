## GitHub Copilot Chat

- Extension Version: 0.22.4 (prod)
- VS Code: vscode/1.95.3
- OS: Windows

## Network

User Settings:

```json
  "github.copilot.advanced": {
    "debug.useElectronFetcher": true,
    "debug.useNodeFetcher": false
  }
```

Connecting to https://api.github.com:

- DNS ipv4 Lookup: Error: getaddrinfo ENOTFOUND api.github.com
- DNS ipv6 Lookup: Error: getaddrinfo ENOTFOUND api.github.com
- Electron Fetcher (configured): Error: net::ERR_INTERNET_DISCONNECTED
- Node Fetcher: Error: getaddrinfo ENOTFOUND api.github.com
- Helix Fetcher: Error: getaddrinfo ENOTFOUND api.github.com

Connecting to https://api.githubcopilot.com/_ping:

- DNS ipv4 Lookup: Error: getaddrinfo ENOTFOUND api.githubcopilot.com
- DNS ipv6 Lookup: Error: getaddrinfo ENOTFOUND api.githubcopilot.com
- Electron Fetcher (configured): Error: net::ERR_INTERNET_DISCONNECTED
- Node Fetcher: Error: getaddrinfo ENOTFOUND api.githubcopilot.com
- Helix Fetcher: Error: getaddrinfo ENOTFOUND api.githubcopilot.com

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).
