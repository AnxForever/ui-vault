# AI Workspace (Pro)

Complete assistant app – sidebar, welcome, streaming chat and projects, built on the Chat Composer

- Page: https://www.affectui.com/blocks/ai-workspace
- Section: Blocks · Productivity
- Install: `npx shadcn@latest add https://www.affectui.com/r/ai-workspace.json` (needs the Pro access key)
- Import: `@/components/ui/ai-workspace`

### When to use

- The main screen of an AI assistant or copilot inside your product
- Internal tools where people chat with your data and group work into projects

### When not to use

- A small chat widget in a corner – use the Chat Composer on its own

### Usage

```tsx
import { AiWorkspace } from "@/components/ui/ai-workspace";

export function Assistant() {
  return (
    <AiWorkspace
      userName="Lena"
      respond={async (message, history) => {
        const res = await fetch("/api/chat", { method: "POST", body: JSON.stringify({ message, history }) });
        return (await res.json()).answer;
      }}
    />
  );
}
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| respond | `(message, history) => Promise<string>` |  | Your model call – the answer streams in word by word. Demo answers without it |
| userName | `string` | `"Lena"` | Shown in the greeting and the sidebar |
| userAvatar | `string` |  | Image for the sidebar footer |
| workspace | `ReactNode` | `"N"` | Initial or logo in the top-left tile |
| pinned | `string[]` |  | Pinned assistants in the sidebar – pinned projects are added automatically |
| conversations | `Conversation[]` |  | Recent chats with their messages |
| projects | `Project[]` |  | Projects with name, description, days since update and pinned |

### Keyboard

- Enter: Send a message in the composer
- Escape: Close menus and the create-project dialog
- Tab: Move through sidebar, header, chat and projects

### Accessibility

- Menus are real menus with radio items, the dialog is modal and labelled, the collapsed sidebar is inert
- New answers are announced politely while they stream in

### Motion

- The sidebar collapses smoothly, answers stream in, views fade in, menus drop in
- Reduced motion turns these off

### Responsive

- Below 720px of width the sidebar becomes an overlay and the project grid turns into one column
- Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"

### Requirements

- React 19
- Chat Composer – installed automatically with the CLI

Related: chat-composer, thinking-state, comments-panel

---
