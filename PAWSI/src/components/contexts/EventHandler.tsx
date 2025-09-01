export type EventHandlerCallback = (...args: any[]) => void;

export abstract class EventHandler {
	private eventListeners: Map<string, EventHandlerCallback[]> = new Map();

	public subscribe(event: string, callback: EventHandlerCallback) {
		if (!this.eventListeners.has(event)) {
			this.eventListeners.set(event, []);
		}

		const listeners = this.eventListeners.get(event)!;
		listeners.push(callback);
		return callback;
	}

	public unsubscribe(eventName: string, callback: EventHandlerCallback): void {
		if (!this.eventListeners.has(eventName))
			throw new Error(`Unknown event ${eventName}`);

		const listeners = this.eventListeners.get(eventName)!;
		const index = listeners.indexOf(callback);
		if (index !== -1) listeners.splice(index, 1);
	}

	protected emit(eventName: string, ...args: any[]): void {
		if (!this.eventListeners.has(eventName)) return;

		const listeners = this.eventListeners.get(eventName)!;
		listeners.forEach((callback) => callback(...args));
	}
}
