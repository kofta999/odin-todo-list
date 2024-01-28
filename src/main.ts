import "./style.css";
import App from "./app.ts";

document.querySelector<HTMLDivElement>("#app")!.append(...App());
