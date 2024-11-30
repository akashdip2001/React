# React

1) [Project 01](https://project1-sandy-nine.vercel.app/)
2) 

---

| [React install guide](https://react.dev/learn/start-a-new-react-project) | [use Vite](https://vite.dev/) |
| ------------------------------------------------------------------------ | ----------------------------- |

## Step 1

| [install Node.js](https://nodejs.org/en/download/prebuilt-installer) |

#### output

```bash
PS C:\Users\akash\Desktop\Py Projects\React> node --version
v22.11.0
PS C:\Users\akash\Desktop\Py Projects\React>
```

## Step 2

```bash
npm create vite@latest
```

#### output

```bash
PS C:\Users\akash\Desktop\Py Projects\React> npm create vite@latest
Need to install the following packages:
create-vite@6.0.1
Ok to proceed? (y) y


> npx
> create-vite

√ Project name: ... Project_1
√ Package name: ... project-1
√ Select a framework: » React
√ Select a variant: » JavaScript

Scaffolding project in C:\Users\akash\Desktop\Py Projects\React\Project_1...

Done. Now run:

  cd Project_1
  npm install
  npm run dev

PS C:\Users\akash\Desktop\Py Projects\React>
```

## Explain the stricture

- `src/main.jsx` is the main file can `import and build` everything --> and Render in `index.html` `id=Root` part.

- `Package.json` is record all dependencies & versions.

## Run the project

```bash
cd Project_1
npm run dev
```

If the project not Run, its good chance you not install all packages which already written in `Package.json` file. just run the command to install.

```bash
npm i
```

```bash
npm run dev
```

click the local URL and open the web-page. every component in this webpage is come from `App.jsx` file.

<div style="display: flex; justify-content: space-between;">
  <img src="Project_1/public/Redme/default-web-page.png" alt="Image 1" style="width: 48%;"/>
  <img src="Project_1/public/Redme/default-web-page-code.png" alt="Image 2" style="width: 48%;"/>
</div>
<div style="display: flex; justify-content: space-between;">
  <img src="Project_1/public/Redme/default-web-page-code-edit.png" alt="Image 1" style="width: 48%;"/>
  <img src="Project_1/public/Redme/default-web-page-remove-allCss.png" alt="Image 2" style="width: 48%;"/>
</div>

Then remove all tsx (exact like HTML) only type `Hello World` , And Remove all `css` files.

Remove: App.jsx
Remove: App.css
Remove: index.css
modified: Main.jsx

```jsx
createRoot(document.getElementById("root")).render(
  <StrictMode>Hello World</StrictMode>
);
```
Its a function:
```go
const app = () => {
}
```
But its a component:
```go
const App = () => {
}
```
