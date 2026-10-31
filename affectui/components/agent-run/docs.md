# Agent Run (Pro)

One autonomous agent run: the plan ticking through its steps, the tool calls, an approval it waits on and the draft it wrote

- Page: https://www.affectui.com/screens/agent-run
- Section: Screens · App screens
- Install: `npx shadcn@latest add https://www.affectui.com/r/agent-run.json` (needs the Pro access key)
- Import: `@/components/ui/agent-run`

### When to use

- The detail view of one autonomous agent run – a background task, a scheduled job, a long workflow
- Runs that pause for a human before they send, pay or publish something

### When not to use

- Back-and-forth conversations with the agent – use Agent Chat
- A list of many runs – use a table with a status column

### Usage

```tsx
import { AgentRunScreen } from "@/components/ui/agent-run";

export default function Page() {
  return (
    <AgentRunScreen
      title="Prepare the Q3 board update"
      steps={run.steps}
      draft={{ original: memo.before, suggested: memo.after, label: "Board memo – Q3" }}
      onApprove={(stepId) => api.approve(run.id, stepId)}
      onDeny={(stepId) => api.deny(run.id, stepId)}
      onNavigate={(label) => router.push(routes[label])}
    />
  );
}
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | `string` | `"Prepare the Q3 board update"` | Goal of the run, in the header and above the plan |
| steps | `RunStep[]` | `defaultRunSteps` | Steps with id, title, detail, tool, their tool calls ({ name, summary, icon?, args?, result?, duration }) and an optional approval ({ title, description, risk, details }) the run waits on |
| draft | `{ original: string; suggested: string; label?: string }` | `defaultRunDraft` | Text the agent wrote, shown as an inline diff in the side panel |
| agent | `string` | `"Board prep"` | Name of the agent in the run details |
| autoRun | `boolean` | `true` | Plays the built-in simulation on mount – turn off and drive the steps from your own events |
| onApprove | `(stepId: string) => void` |  | An approval was given; the run carries on |
| onDeny | `(stepId: string) => void` |  | An approval was denied; the run stops at that step |
| onStop | `() => void` |  | Stop run pressed |
| onDone | `() => void` |  | Every step is done |
| onNavigate | `(label: string) => void` |  | Called with the label of a sidebar item |
| workspace | `string` | `"Acme"` | Workspace name in the sidebar |
| user | `{ name: string; avatar?: string }` | `{ name: "Alex Morgan" }` | Account at the bottom of the sidebar |
| className | `string` |  | Extra class on the root |

### Accessibility

- Sidebar items, the run actions and the panel toggle are real buttons with labels
- The plan marks the current step with aria-current and announces progress; tool calls and approvals announce their status
- Approve and deny work from the keyboard (⌘↵ / Esc), the diff with Tab, Y and N
- Icons are decorative and hidden from screen readers

### Responsive

- Fills its container – give it the full viewport height in your app; the run and the side panel scroll on their own
- Below 1000px of main area the side panel becomes a layer that slides in from the right
- Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"; colors are CSS variables on .ui-as

### Requirements

- React 19
- @hugeicons/react
- @hugeicons/core-free-icons
- App Shell Inset, Agent Plan, Tool Call Card, Approval Card, Inline Diff, Thinking Loader and Button (installed with it)

---
