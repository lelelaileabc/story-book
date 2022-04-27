// import "./button.css";

export const button = ({
    primary = false,
    size = "medium",
    backgroundColor,
    label,
    onClick,
}) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerText = label;
    btn.addEventListener("click", onClick);

    const mode = primary ?
        "storybook-button--primary" :
        "storybook-button--secondary";


    btn.className = [
        "inline-flex",
        "items-center",
        "px-4",
        "py-1.5",
        "border",
        "border-transparent",
        "text-sm",
        "font-medium",
        "rounded",
        "shadow-sm",
        "text-white",
        "bg-sky-600",
        "hover:bg-sky-700",
        `storybook-button--${size}`,
        mode,
    ].join(" ");

    btn.style.backgroundColor = backgroundColor;

    return btn;
};