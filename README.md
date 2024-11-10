# static_page

# Static Webpage with Tailwind CSS, HTML, and JavaScript

This project is a simple static webpage that demonstrates how to create a responsive navigation menu using **Tailwind CSS**, **HTML**, and **JavaScript**. The webpage includes a mobile-friendly menu that toggles open and closed.

## Features

- **Responsive Design**: The layout adapts to different screen sizes, with a navigation menu that toggles open/closed on mobile devices.
- **Tailwind CSS**: Tailwind CSS is used to style the webpage with utility classes for rapid development.

## Project Structure

```
/project-root
│
├── index.html          # Main HTML file
├── script.js           # Main JS file
├── README.md           # Project documentation
├── assets/             # Directory for images, logos, or other assets
│   ├── circle.svg      # Sample file used in the services section
│   ├── email.svg       # Sample email file used in contact page
│   ├── hero-img.png    # Sample img file used in hero section
│   ├── logo.svg        # Sample logo file used in the navigation bar
│   └── phone.svg       # Sample phone file used in contact page
├── components/         # Directory for app components
│   ├── footer.html     # Footer component
│   └── navbar.svg      # Navbar component
└── pages/              # Directory for app pages
    ├── 404.html        # 404 page
    ├── about.html      # About page
    ├── contact.html    # Contact page
    ├── home.html       # Home page
    └── services.svg    # Services page
```

## Installation

This project is a static site, so there are no dependencies or build steps required. You can run the project by simply opening the `index.html` file in your browser.

### Prerequisites

- A web browser to view the static HTML page.
- Optionally, a local web server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for easier local development.

## Usage

1. **Clone the repository** or download the project files.

2. **Open the `index.html`** file in your browser to view the webpage:

   - You can open `index.html` directly by double-clicking the file, or
   - Use a local development server (such as Live Server in VSCode) for better development experience.

3. **Navigation Menu**:
   - On desktop, the navigation bar will be visible.
   - On mobile devices or smaller screens, the navigation bar will be hidden by default. You can toggle it by clicking the hamburger menu.

The menu items include links to:

- **Home**
- **About**
- **Services**
- **Contact**

These links can be customized as needed.

## Customization

### 1. **Edit Navigation Links**

To customize the navigation links, modify the `<ul>` element inside the `index.html` file:

```html
<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 ...">
  <li><a href="/" onclick="navigate(event, '/')">Home</a></li>
  <li><a href="/about" onclick="navigate(event, '/about')">About</a></li>
  <li>
    <a href="/services" onclick="navigate(event, '/services')">Services</a>
  </li>
  <li><a href="/contact" onclick="navigate(event, '/contact')">Contact</a></li>
</ul>
```

You can add, remove, or update links as needed.

### 2. **Customize Styles**

Tailwind CSS makes it easy to customize the design. You can adjust the styles directly in the HTML by modifying the Tailwind utility classes. For example, to change the background color of the navigation bar, update the `bg-white` class:

```html
<nav class="bg-white border-gray-200 dark:bg-gray-900"></nav>
```

Change `bg-white` to any other Tailwind color class (e.g., `bg-blue-500`).

### 3. **Adding More Pages**

If you plan to add more pages, simply create new HTML files (e.g., `about.html`, `services.html`), and link them in the navigation. You can reuse the same navigation bar structure for each page.

## Running on a Local Server (Optional)

For easier development, you can use a local development server.

### Live Server (VSCode Extension)

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VSCode.
2. Right-click on `index.html` and select **"Open with Live Server"**.
