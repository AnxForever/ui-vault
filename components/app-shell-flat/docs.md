# App Shell Flat (Pro)

The App Shell laid flat – gray sidebar and an edge-to-edge page, split by a single hairline

- Page: https://www.affectui.com/screens/app-shell-flat
- Section: Screens · App screens
- Install: `npx shadcn@latest add https://www.affectui.com/r/app-shell-flat.json` (needs the Pro access key)
- Import: `@/components/ui/app-shell-flat`

### When to use

- Tools and dashboards that should feel calm and edge to edge, like Linear or Notion
- Dense screens – tables, boards, editors – that want every pixel instead of a framed panel

### When not to use

- When the page should read as a card on a gray page – use App Shell Inset
- Marketing pages – use a block or a plain layout

### Usage

```tsx
import { AppShellFlat } from "@/components/ui/app-shell-flat";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppShellFlat active="New chat" workspace="Acme" user={{ name: "Alex Morgan" }} onNavigate={(label) => router.push(routes[label])}>
      <div className="ui-as-page">{children}</div>
    </AppShellFlat>
  );
}
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| header | `{ title: ReactNode; actions?: ReactNode } \| false` | `the open page's name, share and more` | The header across the app – sidebar toggle and search, the page's title and actions; false for none |
| children | `ReactNode` |  | The page shown next to the sidebar |
| active | `string` |  | Label of the menu item or project that is open |
| onNavigate | `(label: string) => void` |  | Called with the label of a menu item or project when it is clicked |
| workspace | `string` | `"Acme"` | Workspace name; its first letter becomes the logo |
| user | `{ name: string; avatar?: string }` | `{ name: "Alex Morgan" }` | Account at the bottom; without an avatar it shows initials |
| nav | `ShellNavItem[]` | `New chat, Folders, Integrations` | Menu items, each { label, icon } |
| projects | `string[]` |  | Project list under the menu |
| groups | `ShellGroup[]` |  | Lists under the menu instead of Projects, e.g. Tools or Pipelines |
| className | `string` |  | Extra class on the root |

### Accessibility

- Sidebar items, projects and the collapse toggle are real buttons with labels
- Icons are decorative and hidden from screen readers

### Responsive

- Fills its container – give it the full viewport height in your app
- Below 900px the sidebar becomes a drawer that slides in over the page
- Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"

### Notes for AI

- Same props and the same page classes (.ui-as-page, .ui-as-page-title) as App Shell Inset – swap one for the other without touching the screens inside

### Requirements

- React 19
- @hugeicons/react
- @hugeicons/core-free-icons
- App Shell Inset (installed with it)

Related: app-shell

---
