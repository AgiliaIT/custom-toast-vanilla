# Custom Toast Library

A customizable toast notification library for use in JavaScript applications, including Laravel projects.

## Features

- Customizable toasts with options for icons, buttons, and attributes.
- Supports multiple toast types (success, error, warning, etc.).
- Alpine.js compatibility for additional interactivity.
- Tailwind CSS for styling.
- Smooth slide animations for toast appearance and disappearance.

## Installation

Install via npm:

```bash
npm install custom-toast-vanilla

## Usage

### JavaScript

```javascript
toast.show("title", "body", {
    type: "info",
    duration: 300000,
    progressBar: true,
    custom: {
        "x-ref": "toast-x",
        "x-data": "{ open: true }"
    },
    button: {
        text: "test button",
        custom: {
            "x-on:click": `test("toast-x")`
        },
        dataAttributes: {
            "test": "test value"
        },
    },
});


### PHP

```php
@if (session('toast'))
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const toastData = @json(session('toast'));
            window.Toast.show(toastData.title, toastData.body, {
                type: toastData.type,
                duration: 3000,
                progressBar: true,
            });
        });
    </script>
@endif


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Version

Current version: 1.0.3