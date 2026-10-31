# Agent Chat (Pro)

Chat with an orchestrating agent, the agents at work, and a brief to fill in beside it

- Page: https://www.affectui.com/screens/agent-chat
- Section: Screens · App screens
- Install: `npx shadcn@latest add https://www.affectui.com/r/agent-chat.json` (needs the Pro access key)
- Import: `@/components/ui/agent-chat`

### When to use

- The main view of an AI agent or copilot product
- Chats that end in a concrete task – a brief, a draft, a report

### When not to use

- Plain support chat – a lighter chat layout is enough

### Usage

```tsx
import { AgentChatScreen } from "@/components/ui/agent-chat";

export default function Page() {
  return <AgentChatScreen workspace="Acme" user={{ name: "Alex Morgan" }} onNavigate={(label) => router.push(routes[label])} />;
}
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| onNavigate | `(label: string) => void` |  | Called with the label of a sidebar item |
| workspace | `string` | `"Acme"` | Workspace name in the sidebar |
| user | `{ name: string; avatar?: string }` | `{ name: "Alex Morgan" }` | Account at the bottom of the sidebar |
| className | `string` |  | Extra class on the root |

### Accessibility

- Sidebar items, tabs and toolbar actions are real buttons with labels
- Icons are decorative and hidden from screen readers

### Responsive

- Fills its container – give it the full viewport height in your app
- Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"; colors are CSS variables on .ui-as

### Requirements

- React 19
- @hugeicons/react
- @hugeicons/core-free-icons
- App Shell, Assistant Home (for its composer) and Button (installed with it)

---
