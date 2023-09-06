async function clipboardCopy() {
  let text = document.querySelector("#clipboardCopy").dataset.value;
  await navigator.clipboard.writeText(text);
}

if (document.getElementById("clipboardCopy")) {
  document
    .getElementById("clipboardCopy")
    .addEventListener("click", clipboardCopy);
}
