class EventBus {
    handlers = new Map();
    on(event, handler) {
        this.handlers.set(handler, ({ detail }) => handler(detail));
        window.addEventListener(event, this.handlers.get(handler));
    }

    removeEventListener(event, handler) {
        window.removeEventListener(event, this.handlers.get(handler));
        this.handlers.delete(handler);
    }
}

export const EVENT_BUS = new EventBus();