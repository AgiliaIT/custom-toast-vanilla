import '../css/tailwind.css';
import '../css/main.css';

class Toast {
  constructor(containerClass= null) {
    this.container = document.createElement('div');
    this.container.className = containerClass || 'toast-container fixed bottom-4 right-4 z-50 space-y-2';
    document.body.appendChild(this.container);
  }

  createProgressBar(animationClass){
    const progressBar = document.createElement('div')
    progressBar.className = `bottom-0 left-0 w-full md:h-2 h-[6px] ${this.background || 'bg-[##BA2FFF]'} absolute ${animationClass || 'toast-slide-out'}` 
    return progressBar;
  }

  createMessageContainer(title, body){
    const messageContainer = document.createElement('div');
    
    const messageHeader = document.createElement('p');
    const messageBody = document.createElement('p');

    messageHeader.innerText = title;
    messageBody.innerText = body;

    messageHeader.className = 'md:text-base text-sm font-bold dark:text-white text-[#470966]'
    messageBody.className = 'md:text-sm text-xs dark:text-[#CABAD1] text-[#6E5E75]'
    messageContainer.className = 'flex flex-col gap-1 items-start justify-start overflow-hidden';
    messageContainer.appendChild(messageHeader)
    messageContainer.appendChild(messageBody)

    return messageContainer;
  }

  createIconAndTextContainer(title, body, iconSRC){
    let iconAndTextContainer = document.createElement('div');
    iconAndTextContainer.classList = 'flex gap-2 items-center justify-start'

    let iconContainer = document.createElement('div')
    iconContainer.classList = 'md:w-12 md:h-12 w-8 h-8 flex-shrink-0'
    let icon = document.createElement('img')
    icon.src = iconSRC || "/public/assets/user-tick.png"
    icon.classList = 'w-full h-full object-contain'
    icon.title = 'toast icon'
    iconContainer.appendChild(icon)

    let messageContainer = this.createMessageContainer(title, body);

    iconAndTextContainer.appendChild(iconContainer)
    iconAndTextContainer.appendChild(messageContainer)

    return iconAndTextContainer;
  }

  createButton(options){
    const button = document.createElement('button');
    button.innerHTML = options.text || 'Click';

    if (options.custom) {
      for (const key in options.custom) {
        button.setAttribute(key, options.custom[key]);
      }
    }

    if (options.dataAttributes) {
      for (const key in options.dataAttributes) {
        button.setAttribute(`data-${key}`, options.dataAttributes[key]);
      }
    }

    button.className = options.class || `block w-full py-[6.5px] px-8 rounded-3xl ${this.background || 'bg-[#CF47F4]'} text-white text-[12px] leading-[16px]`;

    return button;
  }

  setOptionClasses(type){
    switch (type) {
      case 'success':
        this.border = 'border-[#1CB1A3]';
        this.background = 'bg-[#1CB1A3]';
        break;
    
      case 'error':
        this.border = 'border-[#FF1D58]';
        this.background = 'bg-[#FF1D58]';
        break;      
    
      case 'warning':
        this.border = 'border-[#FFD301]';
        this.background = 'bg-[#FFD301]';
        break;
    
      case 'info':
        this.border = 'border-[#BA2FFF]';
        this.background = 'bg-[#BA2FFF]';
        break;
    
      default:
        this.border = 'border-[#BA2FFF]';
        this.background = 'bg-[#BA2FFF]';
        break;
    }
  }

  show(title, body, options = {}) {
    this.duration = options.duration || 3000

    this.setOptionClasses(options.type)

    const toast = document.createElement('div');
    
    let toastClasses = options.class || `toast md:max-w-[336px] max-w-[312px] space-y-2 relative overflow-hidden md:px-6 px-3 md:py-[18px] py-4 rounded-lg shadow-lg dark:bg-[#30193B] bg-[#E0D1E8] text-black transition-transform translate-y-[10%] opacity-0 transform border ${this.border || 'border-[##BA2FFF]'}`

    toast.className = toastClasses;

    toast.appendChild(this.createIconAndTextContainer(title, body, options.iconSRC));

    if (options.custom) {
      for (const key in options.custom) {
        toast.setAttribute(key, options.custom[key]);
      }
    }

    if (options.button) {
      toast.appendChild(this.createButton(options.button));
    }
    
    if(options.progressBar){
      toast.appendChild(this.createProgressBar(options.progressBarAnimationClass));
    }
    
    this.container.appendChild(toast);
    toast.classList.add('toast-fade-in');

    setTimeout(() => {
      this.removeToast(toast);
    }, this.duration);
  }

  removeToast(toast) {
    toast.classList.remove('toast-fade-in');
    toast.classList.add('toast-fade-out');
    setTimeout(() => {
      if (this.container.contains(toast)) {
        this.container.removeChild(toast);
      }
    // 300ms is the time for the fade-out animation
    }, 300);
  }
}

export default Toast;
