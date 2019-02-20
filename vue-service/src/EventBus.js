class EventBus {
    on(event, handler) {
        window.addEventListener(event, handler);
    }

    removeEventListener(event, handler) {
        window.removeEventListener(event, ({ detail }) => handler(detail));
    }
}

export const EVENT_BUS = new EventBus();