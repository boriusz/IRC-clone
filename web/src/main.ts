const textarea = document.querySelector<HTMLTextAreaElement>("textarea");
textarea.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    e.preventDefault();
    const value = { data: textarea.value };
    if (value.data.length === 0) return;
    textarea.value = "";
    fetch("http://localhost:8080/message", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(value),
    });
    console.log(value);
  }
});
