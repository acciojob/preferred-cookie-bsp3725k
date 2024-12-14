document.addEventListener("DOMContentLoaded", () => {
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");
  const form = document.querySelector("form");

  // Function to set cookies
  const setCookie = (name, value) => {
    document.cookie = `${name}=${value}; path=/;`;
  };

  // Function to get a cookie value by name
  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return value;
    }
    return null;
  };

  // Apply saved preferences from cookies on page load
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.body.style.fontSize = `${savedFontSize}px`;
    fontSizeInput.value = savedFontSize;
  }

  if (savedFontColor) {
    document.body.style.color = savedFontColor;
    fontColorInput.value = savedFontColor;
  }

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    // Save preferences in cookies
    setCookie("fontsize", fontSize);
    setCookie("fontcolor", fontColor);

    // Apply preferences immediately
    document.body.style.fontSize = `${fontSize}px`;
    document.body.style.color = fontColor;
  });
});
