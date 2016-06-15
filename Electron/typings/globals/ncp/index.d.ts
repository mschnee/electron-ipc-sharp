// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/ncp/ncp.d.ts
declare module 'ncp' {
	function ncp (source: string, destination: string, callback: (err: Error) => void): void;
	function ncp (source: string, destination: string, options: Options, callback: (err: Error) => void): void;

	interface Options {
		filter? : RegExp;
		transform? : (read: NodeJS.ReadableStream, write: NodeJS.WritableStream) => void;
		clobber? : boolean;
		stopOnErr? : boolean;
		errs? : NodeJS.WritableStream;
	}
}