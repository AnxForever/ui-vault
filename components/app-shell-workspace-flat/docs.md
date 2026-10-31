# App Shell Workspace Flat (Pro)

The flat App Shell with a resizable work area on the right – sidebar, page and tools, each split by a hairline

- Page: https://www.affectui.com/screens/app-shell-workspace-flat
- Section: Screens · App screens
- Install: `npx shadcn@latest add https://www.affectui.com/r/app-shell-workspace-flat.json` (needs the Pro access key)
- Import: `@/components/ui/app-shell-workspace-flat`

### When to use

- AI assistants and agent tools that keep a terminal, browser or sources next to the conversation
- Editors and dashboards with a detail or preview pane beside the page

### When not to use

- When the page needs the full width – use App Shell Flat without the work area
- Marketing pages – use a block or a plain layout

### Usage

```tsx
import { AppShellWorkspaceFlat } from "@/components/ui/app-shell-workspace-flat";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppShellWorkspaceFlat active="New chat" onNavigate={(label) => router.push(routes[label])} onOpen={(id) => openTool(id)}>
      <div className="ui-as-page">{children}</div>
    </AppShellWorkspaceFlat>
  );
}
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| children | `ReactNode` |  | The page shown between the sidebar and the work area |
| tools | `WorkspaceTool[]` | `Terminal, Browser, Notes` | Rows under Tools, each { id, label, icon, shortcut? } |
| sources | `WorkspaceSource[]` |  | Rows under Suggested, each { id, title, source, mark? } |
| onOpen | `(id: string) => void` |  | A tool or a suggestion was clicked |
| panel | `ReactNode` |  | Your own content for the work area instead of tools and suggestions |
| panelTitle | `string` | `"Workspace"` | Heading of the work area |
| panelWidth | `{ default?: number; min?: number; max?: number }` | `{ default: 360, min: 280, max: 560 }` | Work area width in px – drag its edge between min and max |
| sidebarWidth | `{ default?: number; min?: number; max?: number }` | `{ default: 272, min: 220, max: 380 }` | Sidebar width in px, the same way |
| … | `AppShellProps` |  | Everything App Shell takes: active, onNavigate, workspace, user, nav, projects, groups, setup, className |

### Accessibility

- Both edges are separators you can focus: arrow keys resize (Shift for bigger steps), Home and End jump to the minimum and maximum, double-click resets
- The work area is a labelled landmark; while it's folded away it's inert, and its icon in the top right brings it back

### Responsive

- Below 900px the work area becomes a drawer from the right, like the sidebar from the left; Escape or a tap beside it closes it
- Dark mode built in, from the App Shell tokens

### Requirements

- React 19
- @hugeicons/react
- @hugeicons/core-free-icons
- App Shell Inset, App Shell Flat and App Shell Workspace Inset (installed with it)

---
