# Chat Composer (Pro)

Prompt composer with model picker, voice input, app connections and approval request

- Page: https://www.affectui.com/components/chat-composer
- Section: Components · Chat
- Install: `npx shadcn@latest add https://www.affectui.com/r/chat-composer.json` (needs the Pro access key)
- Import: `@/components/ui/chat-composer`

### When to use

- The main input of an AI assistant or agent that can act on connected tools
- Flows where the user has to grant extra permissions before a run

### When not to use

- Plain chat between people – a simple text field with a send button is enough
- Very narrow spaces below ~280px, where the toolbar labels get too small

### Usage

```tsx
import { ChatComposer } from "@/components/ui/chat-composer";

export function Assistant() {
  return <ChatComposer onSend={(message) => console.log(message)} />;
}
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| placeholder | `string` | `"Start by typing..."` | Placeholder of the message field |
| models | `ChatModel[]` | `defaultModels` | Entries of the model picker (Auto, Claude, ChatGPT); the first is selected |
| loadMs | `number` | `1300` | Duration of the connect and approval loading states |
| dictation | `string` | `"Draft a short update…"` | Demo transcript that appears word by word in gray while recording – replace with real speech-to-text |
| onSend | `(message: string, details: { model: string }) => void` |  | Called on send or Enter |
| onModelChange | `(model: ChatModel) => void` |  | Called when a model is picked |
| onAttach | `() => void` |  | Called when the plus button is clicked – open your own picker here |
| onConnectApps | `() => void` |  | Called when “Connect apps” is clicked |
| onRequestApproval | `() => void` |  | Called when “Request approval” is clicked |
| onSelectProject | `() => void` |  | Called when “Select a project” is clicked |

### Keyboard

- Enter: Send the message
- Shift + Enter: New line
- ↑ / ↓: Open the model picker and move through it
- Home / End: Jump to the first or last model
- Enter / Space: Pick the highlighted model (in the picker)
- Esc: Close the model picker or discard a recording

### Accessibility

- Loading and result states are announced through a polite live region
- Busy buttons expose aria-busy; the hidden tray row is inert and aria-hidden
- Clicking anywhere on the white card focuses the message field
- The model picker is a listbox with aria-activedescendant, so screen readers follow the highlight

### Motion

- Connecting apps runs two shimmer sweeps while the logos hop, then the card slides down to reveal “Select a project”
- Requesting approval waves the hand, then morphs into the “Unrestricted access” pill
- The model picker morphs out of the corner next to its button, opens toward the side with more room and stays inside the visible frame
- A hover fill fades in under the pointer and glides between rows
- While recording, the heard words appear in gray and turn dark once confirmed; a dotted audio trace scrolls next to the controls
- All transitions collapse to instant changes with prefers-reduced-motion

### Responsive

- Fills its container up to 680px wide; all sizes follow the width via container query units and stop growing at a compact maximum
- Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"

### Requirements

- React 19

---
