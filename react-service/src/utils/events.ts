export function emit(event: string, data: any) {
    window.dispatchEvent(new CustomEvent(event, { detail: data }));
}
