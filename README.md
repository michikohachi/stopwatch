# Stopwatch

Simple stopwatch showing hours:minutes:seconds.centiseconds (`00:00:00.00`).

🛠 Features
- Start, stop, and reset functionality
- Accurate display with hours, minutes, seconds, and centiseconds
- Button states update dynamically (start/stop/reset enabled or disabled)
- Smooth real-time update every 10 milliseconds

Buttons:
- `Start` (blue): starts or resumes the stopwatch. Disabled while running.
- `Stop` (red): pauses the stopwatch. Enabled only while running or after start.
- `Reset` (gray): resets time to `00:00:00.00`. Enabled after start.

Behavior:
- When `Start` is clicked it becomes disabled and `Stop` + `Reset` become enabled.
- Clicking `Stop` pauses and re-enables `Start` so you can resume.
- Clicking `Reset` sets time to zero and disables `Stop` and `Reset` until `Start` is clicked again.

How to run  the project
1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension if you don’t have it yet.
3. Right-click on index.html (or your main HTML file).
4. Click Open with Live Server.
5. The project will open in your default browser and automatically refresh whenever you make changes to the code.

This allows you to see real-time updates and test interactions without manually refreshing the browser.
or
Open `index.html` in a browser to use.
