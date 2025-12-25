# stopwatch
Simple stopwatch showing hours:minutes:seconds.centiseconds (`00:00:00.00`).

Buttons:
- `Start` (blue): starts or resumes the stopwatch. Disabled while running.
- `Stop` (red): pauses the stopwatch. Enabled only while running or after start.
- `Reset` (gray): resets time to `00:00:00.00`. Enabled after start.

Behavior:
- When `Start` is clicked it becomes disabled and `Stop` + `Reset` become enabled.
- Clicking `Stop` pauses and re-enables `Start` so you can resume.
- Clicking `Reset` sets time to zero and disables `Stop` and `Reset` until `Start` is clicked again.

Open `index.html` in a browser to use.

PowerShell quick open:
```powershell
start "" "C:\Users\Leizel\OneDrive\Desktop\Files\carl\finalsemProject\timer\index.html"
```
