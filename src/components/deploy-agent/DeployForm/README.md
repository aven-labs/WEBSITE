# Deploy Agent Form - Component Structure

## 📁 Folder Structure

```
src/components/deploy-agent/
├── DeployBanner.tsx          # Hero banner component
├── index.tsx                 # Barrel exports
└── DeployForm/               # Multi-step form folder
    ├── index.tsx             # Main form orchestrator
    ├── types.ts              # TypeScript types & Zod schema
    ├── ProgressHeader.tsx    # Progress bar & step indicator
    ├── SuccessMessage.tsx    # Success screen after submission
    ├── NavigationButtons.tsx # Previous/Next/Submit buttons
    ├── Step1.tsx             # Agent Name
    ├── Step2.tsx             # One-line Description
    ├── Step3.tsx             # Demo Video URL
    ├── Step4.tsx             # What It Does (detailed)
    ├── Step5.tsx             # Website URL
    ├── Step6.tsx             # Contact Details
    ├── Step7.tsx             # Office Location
    ├── Step8.tsx             # Social Media Handles
    └── Step9.tsx             # Pricing Model
```

## 🎯 Component Responsibilities

### **DeployForm/index.tsx** (Main Orchestrator)
- Form state management (React Hook Form)
- Step navigation logic
- Form submission to API
- Animation orchestration (Framer Motion)
- Conditional step rendering

### **types.ts**
- Zod validation schema for all 9 steps
- TypeScript FormData type
- TOTAL_STEPS constant

### **ProgressHeader.tsx**
- Displays "Step X of 9"
- Animated progress bar
- Header section

### **Step Components (Step1.tsx - Step9.tsx)**
Each step component:
- Receives `register` from React Hook Form
- Receives `errors` for validation messages
- Handles its own field layout
- Step-specific validation

**Step 1:** Agent Name (text input)
**Step 2:** 1-line Description (text input)
**Step 3:** Demo Video URL (URL input, optional)
**Step 4:** What It Does (textarea, detailed)
**Step 5:** Website URL (URL input, optional)
**Step 6:** Contact Details (name, email, phone)
**Step 7:** Office Location (address, city, country)
**Step 8:** Social Media (Twitter, LinkedIn, GitHub, Discord - all optional)
**Step 9:** Pricing Model (select with conditional fields)

### **NavigationButtons.tsx**
- Previous button (disabled on step 1)
- Next button (steps 1-8)
- Submit button (step 9 only)
- Loading states

### **SuccessMessage.tsx**
- Success checkmark animation
- "We will contact you within 7 days" message
- Auto-resets form after 5 seconds

## 🔄 Data Flow

1. **User Input** → React Hook Form registers field
2. **Validation** → Zod schema validates per step
3. **Next/Prev** → Triggers step validation & navigation
4. **Submit** → Sends all data to `/api/deploy-agent`
5. **Success** → Shows success message → Auto resets

## 🎨 Animation Features

- **Progress Bar:** Smooth width animation (0-100%)
- **Step Transitions:** Slide left/right with spring physics
- **Success Screen:** Scale + fade-in animation
- **Button Hover:** Arrow translation effects

## 📋 Validation Rules

| Step | Fields | Required | Min Length |
|------|--------|----------|------------|
| 1 | agentName | ✅ | 2 chars |
| 2 | description | ✅ | 20 chars |
| 3 | demoVideoUrl | ❌ | - |
| 4 | whatItDoes | ✅ | 30 chars |
| 5 | websiteUrl | ❌ | - |
| 6 | contactName, contactEmail, contactPhone | ✅ | 2, email, 10 |
| 7 | officeLocation, city, country | ✅ | 5, 2, 2 |
| 8 | social handles | ❌ | - |
| 9 | pricingModel | ✅ | enum |

## 🚀 Usage

```tsx
import { DeployBanner, DeployForm } from "@/components/deploy-agent";

function DeployYourAgent() {
  return (
    <main>
      <Navbar />
      <DeployBanner />
      <DeployForm />
      <Footer />
    </main>
  );
}
```

## 🔌 API Integration

**Endpoint:** `/api/deploy-agent`
**Method:** POST
**Table:** AgentSubmissions (Airtable)

All form data is sent as JSON and saved to Airtable with status "Pending Review".
