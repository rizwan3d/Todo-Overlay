# Todo List Overlayer For Live Streamers (OBS ready)

This project provides a live stream overlay solution that integrates a to-do list for streamers. It allows streamers to manage tasks directly on their live stream, giving them the ability to display their to-do list dynamically during their stream. The overlay is designed to be compatible with OBS Studio via the Browser Source feature, making it easy to use for live streamers across various platforms.

## Developed By

Made with ❤️ by [2Thoughts - YouTube](https://www.youtube.com/@2Thoughts) for [Rehani - YouTube](https://www.youtube.com/@Rehani).

## Preview
![Preview](https://github.com/rizwan3d/Todo-Overlay/blob/main/imgs/preview.png?raw=true)

## Key Features

- **Live Stream Overlay**: The overlay is designed to be used in **OBS Studio** as a browser source, allowing seamless integration into live streams.
- **Interactive To-Do List**: Streamers can add, edit, check off, and delete tasks directly from the overlay, making it easy to keep track of live stream goals, reminders, or other tasks.
- **Real-Time Updates**: The to-do list can be updated in real-time, providing a dynamic experience for both the streamer and the viewers.
- **Local Storage**: The to-do list items are stored in the browser's local storage, ensuring that tasks persist across page reloads.
- **Customizable Design**: The overlay's design can be customized with CSS to match the streamer's branding and aesthetic.

## Download
If you prefer not to build the project locally, you can download the latest release from the GitHub Releases page.
* Go to the [Releases page](https://github.com/rizwan3d/Todo-Overlay/releases).
* Download the latest release zip file.
* Extract the files to a folder on your computer.

Once extracted, follow the OBS Setup steps above, but use the extracted index.html file in the file path.

---

## Set Up in OBS Studio
To add the overlay to your live stream using OBS Studio:
* Open OBS Studio.
* Add a Browser Source:
  * Click the "+" button in the Sources box.
  * Select Browser and give it a name (e.g., "To-Do Overlay").
  * In the URL field, use the local file path to your HTML file.
  * Set the Width and Height to fit your stream layout (e.g., 1920x1080 for full HD).
---

## How It Works
> In OBS Studio open interact mode by right-click the Browser Source and click to interact. This will allow you to interact with the to-do list directly in OBS.

### Double Click to Delete
* To delete a task, simply double-click on the task text. This will remove the task from the list and update the local storage.

### Move Mouse Lower to Add New Task
* When you move the mouse to the bottom of the task list, a new task input field will automatically appear, allowing you to add a new task to the list.

### Hover to See Move Up/Down Buttons
* When you hover over any task, Move Up and Move Down buttons will appear. You can use these buttons to reorder tasks by clicking them.

### Click on ✓ and - to Change Item Status
* You can click on the ✓ or - icon next to a task to toggle its completion status. When a task is completed, the icon will change to ✓; when it is incomplete, it will show -.
---