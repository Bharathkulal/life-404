function startLife() {
    let messages = [
        "🚀 Starting life... Error: Motivation not found 💀",
        "📚 Loading responsibilities... Failed 😂",
        "💻 Life initialized... Bugs detected 🐛",
        "⚠ Warning: Too many problems detected",
        "🧠 Brain.exe stopped responding"
    ];

    show(messages);
}

function restartLife() {
    let messages = [
        "🔄 Restarting life... Same problems loaded again 😆",
        "♻ Reset complete... Nothing changed",
        "💀 Restart failed: Reality is permanent",
        "😂 You cannot restart life bro",
        "⚠ Error: No backup found"
    ];

    show(messages);
}

function skipLife() {
    let messages = [
        "⏭ Skipping responsibilities... Sleeping mode activated 😴",
        "🛋 Tasks skipped successfully",
        "📵 Ignoring everything... Peace mode ON",
        "🍕 Eating instead of working",
        "😂 Responsibilities left the chat"
    ];

    show(messages);
}

function randomLife() {
    let all = [
        "💀 Error: Motivation not found",
        "📚 Assignment due... ignoring it",
        "😴 Sleep > Success",
        "🍔 Eating is my only achievement today",
        "🧠 Overthinking level: MAX",
        "😂 Life is buffering...",
        "⚠ Happiness not installed",
        "💸 Money not found",
        "📶 Signal lost: Productivity disconnected"
    ];

    show(all);
}

function show(arr) {
    let random = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById("output").innerText = random;
}