# CopyToClipboard React Component Documentation

## Overview

The `CopyToClipboard` component is a simple yet powerful React functional component that provides users the ability to copy any text (such as links, codes, or information) to their clipboard with a single click. It is designed to enhance user experience with visual feedback through animated icon changes and a toast notification, confirming the success of the copy operation.

---

## Features

- **Easy Text Copy:** Click the copy button to instantly copy the predefined text to the system clipboard using the modern Clipboard API.
- **Visual Feedback:**
  - The copy button icon animates (rotates and color changes) upon successful copying.
  - The button text changes from "Copy" to "Copied!" momentarily.
  - A toast notification appears at the bottom of the viewport confirming the copy action.
- **Accessibility:** The component uses proper `aria` roles and labels to ensure it is accessible for screen readers and assistive technologies.
- **Modern Design:** Stylish, clean, and responsive layout with smooth animations for modern user interface appeal.
- **Self-contained:** The component manages all behaviors internally, including copy functionality and UI feedback states.

---

## Component Structure

The component consists of:

- A non-editable `<textarea>` showing the text content to copy.
- A copy button with an SVG copy icon and dynamic feedback on click.
- An animated toast alert that appears on successful copy.

---

## Usage

```jsx
import CopyToClipboard from 'copy-to-clipboard-react-component';

function App() {
  return (
    <div>
      <CopyToClipboard default={"https://github.com/KetlenT/CopyToClipboard.git"}/>
    </div>
  );
}