# Todo-Overlay

A lightweight project that reads a Markdown file (`input.txt`), renders it as styled HTML with support for `[ ]` and `[X]` checkboxes, and provides a visually appealing UI optimized for live streaming. This is ideal for showcasing task lists, announcements, or live updates during your stream.

## Features

- **Markdown Support**: Parses standard Markdown with checkbox support.
- **Live Stream Ready**: Designed with a clean, modern UI suitable for overlays.
- **Dynamic Content**: Automatically fetches and displays the content of `input.txt`.
- **Responsive Design**: Looks great on all screen sizes and resolutions.

## Developed By

Made with ❤️ by [2Thoughts - YouTube](https://www.youtube.com/@2Thoughts) for [Rehani - YouTube](https://www.youtube.com/@Rehani).

---

## Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/rizwan3d/Todo-Overlay
   cd Todo-Overlay
   ```

2. Place your `input.txt` file in the project directory. Example content:
   ```markdown
   # Live Stream Tasks

   - [ ] Announce the giveaway
   - [X] Start the live stream
   - [ ] Answer audience questions
   - [ ] Share discount codes
   ```

---

## Adding to OBS Studio

To display the Markdown Renderer in your live stream using OBS Studio:

### 1. Enable Local File Loading
1. Open OBS Studio.
2. Click the **+** button in the **Sources** panel and select **Browser**.
3. Name the source (e.g., `Local Task List`) and click **OK**.

### 2. Configure the Browser Source
1. Check the **Local File** checkbox.
2. Click **Browse** and navigate to the `index.html` file in the project directory.
3. Set the **Width** and **Height** to match your stream resolution (e.g., 800x600).
5. Click **OK** to add the source.

### 3. Position and Resize
Drag and resize the browser source in your OBS scene to fit your desired layout.

---

## Customization

- **Styling**: Modify `style.css` to change colors, fonts, and layout.
- **Content**: Update `input.txt` to dynamically change the displayed content.
- **Checkbox Colors**: Customize the colors of the checkboxes in `style.css` under:
  ```css
  input[type="checkbox"] {
    accent-color: #ffcc00; /* Change this for unchecked */
  }
  input[type="checkbox"]:checked {
    accent-color: #00cc66; /* Change this for checked */
  }
  ```

---

## Example Use Case

### Input File (`input.txt`):
```markdown
# Stream Schedule

- [X] Start the stream
- [ ] Play the first game
- [ ] Announce the winner
- [ ] End the stream
```

### OBS Output:
A professional, live-updating task list displayed directly on your stream overlay.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed for your streams!

---

## Contribution

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.
