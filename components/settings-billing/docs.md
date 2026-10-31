# Settings & Billing (Pro)

Settings page with tabs: workspace, members, API keys and billing with plan, usage, payment method, plan comparison and invoices

- Page: https://www.affectui.com/screens/settings-billing
- Section: Screens · App screens
- Install: `npx shadcn@latest add https://www.affectui.com/r/settings-billing.json` (needs the Pro access key)
- Import: `@/components/ui/settings-billing`

### When to use

- The settings area of a SaaS or AI product – workspace, team, billing and API access in one place
- A billing page that shows plan, usage, payment method and invoices together

### When not to use

- A public pricing page – use a dedicated pricing layout
- Checkout or entering card details – hand that off to your payment provider

### Usage

```tsx
import { SettingsBillingScreen } from "@/components/ui/settings-billing";

export default function Page() {
  return <SettingsBillingScreen defaultTab="Billing" workspace="Acme" user={{ name: "Alex Morgan" }} onNavigate={(label) => router.push(routes[label])} />;
}
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| defaultTab | `"General" \| "Members" \| "Billing" \| "API keys"` | `"Billing"` | Tab that is open first |
| members | `Member[]` |  | People in the workspace, the owner first – name, email, role and whether they're only invited |
| seats | `number` | `10` | Seats on the plan, shown as "5 of 10 seats used" |
| apiKeys | `ApiKey[]` |  | API keys with name, secret, created and last used |
| invoices | `Invoice[]` |  | Invoices, newest first; amount is a number in the currency's main unit (USD unless currency is set) |
| billingEmail | `string` | `"billing@acme.com"` | Where invoices and receipts go |
| onNavigate | `(label: string) => void` |  | Called with the label of a sidebar item |
| workspace | `string` | `"Acme"` | Workspace name in the sidebar and the General tab |
| user | `{ name: string; avatar?: string }` | `{ name: "Alex Morgan" }` | Account at the bottom of the sidebar |
| className | `string` |  | Extra class on the root |

### Accessibility

- Tabs, the monthly/yearly switch, menus and every row action are real buttons with labels
- Invoices are a real table with column headers; download buttons name the invoice they download
- Toasts are announced as a status; icons are decorative and hidden from screen readers

### Responsive

- Fills its container – give it the full viewport height in your app
- Overview and plan cards stack on narrow panels; the invoice table scrolls sideways on phones
- Dark mode built in: switches when an ancestor (usually <html>) has the class dark or data-theme="dark"; colors are CSS variables on .ui-as

### Requirements

- React 19
- @hugeicons/react
- @hugeicons/core-free-icons
- App Shell, Usage Meter, Segmented Control and Button (installed with it)

---
