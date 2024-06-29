class d {
  constructor(e = null) {
    this.container = document.createElement("div"), this.container.className = e || "toast-container fixed bottom-4 right-4 z-50 space-y-2", document.body.appendChild(this.container);
  }
  createProgressBar(e) {
    const s = document.createElement("div");
    return s.className = `bottom-0 left-0 w-full md:h-2 h-[6px] ${this.background || "bg-[##BA2FFF]"} absolute ${e || "toast-slide-out"}`, s;
  }
  createMessageContainer(e, s) {
    const t = document.createElement("div"), a = document.createElement("p"), r = document.createElement("p");
    return a.innerText = e, r.innerText = s, a.className = "md:text-base text-sm font-bold dark:text-white text-[#470966]", r.className = "md:text-sm text-xs dark:text-[#CABAD1] text-[#6E5E75]", t.className = "flex flex-col gap-1 items-start justify-start overflow-hidden", t.appendChild(a), t.appendChild(r), t;
  }
  createIconAndTextContainer(e, s, t) {
    let a = document.createElement("div");
    a.classList = "flex gap-2 items-center justify-start";
    let r = document.createElement("div");
    r.classList = "md:w-12 md:h-12 w-8 h-8 flex-shrink-0";
    let n = document.createElement("img");
    n.src = t || "/public/assets/user-tick.png", n.classList = "w-full h-full object-contain", n.title = "toast icon", r.appendChild(n);
    let i = this.createMessageContainer(e, s);
    return a.appendChild(r), a.appendChild(i), a;
  }
  createButton(e) {
    const s = document.createElement("button");
    if (s.innerHTML = e.text || "Click", e.custom)
      for (const t in e.custom)
        s.setAttribute(t, e.custom[t]);
    if (e.dataAttributes)
      for (const t in e.dataAttributes)
        s.setAttribute(`data-${t}`, e.dataAttributes[t]);
    return s.className = e.class || `block w-full py-[6.5px] px-8 rounded-3xl ${this.background || "bg-[#CF47F4]"} text-white text-[12px] leading-[16px]`, s;
  }
  setOptionClasses(e) {
    switch (e) {
      case "success":
        this.border = "border-[#1CB1A3]", this.background = "bg-[#1CB1A3]";
        break;
      case "error":
        this.border = "border-[#FF1D58]", this.background = "bg-[#FF1D58]";
        break;
      case "warning":
        this.border = "border-[#FFD301]", this.background = "bg-[#FFD301]";
        break;
      case "info":
        this.border = "border-[#BA2FFF]", this.background = "bg-[#BA2FFF]";
        break;
      default:
        this.border = "border-[#BA2FFF]", this.background = "bg-[#BA2FFF]";
        break;
    }
  }
  show(e, s, t = {}) {
    this.duration = t.duration || 3e3, this.setOptionClasses(t.type);
    const a = document.createElement("div");
    let r = t.class || `toast md:max-w-[336px] max-w-[312px] space-y-2 relative overflow-hidden md:px-6 px-3 md:py-[18px] py-4 rounded-lg shadow-lg dark:bg-[#30193B] bg-[#E0D1E8] text-black transition-transform translate-y-[10%] opacity-0 transform border ${this.border || "border-[##BA2FFF]"}`;
    if (a.className = r, a.appendChild(this.createIconAndTextContainer(e, s, t.iconSRC)), t.custom)
      for (const n in t.custom)
        a.setAttribute(n, t.custom[n]);
    t.button && a.appendChild(this.createButton(t.button)), t.progressBar && a.appendChild(this.createProgressBar(t.progressBarAnimationClass)), this.container.appendChild(a), a.classList.add("toast-fade-in"), setTimeout(() => {
      this.removeToast(a);
    }, this.duration);
  }
  removeToast(e) {
    e.classList.remove("toast-fade-in"), e.classList.add("toast-fade-out"), setTimeout(() => {
      this.container.contains(e) && this.container.removeChild(e);
    }, 300);
  }
}
export {
  d as default
};
