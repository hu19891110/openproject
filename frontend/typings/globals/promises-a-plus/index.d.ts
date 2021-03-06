// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/86bb15f6b9a3515bd9b3ca61f2a670533ac6b908/promises-a-plus/promises-a-plus.d.ts
declare namespace PromisesAPlus {
	interface PromiseCtor {
		<T>(resolver: (resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void) => void): Thenable<T>;
	}

	interface PromiseImpl {
		new <T>(resolver: (resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void) => void): Thenable<T>;
	}

	interface Thenable<T> {
		then<R>(onFulfill?: (value: T) => Thenable<R>|R, onReject?: (error: any) => Thenable<R>|R): Thenable<R>;
	}
}