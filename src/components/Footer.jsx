import { h, Component, render, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";

const Footer = () => (
	<>
		<p className="text-gray-500 py-2">
			Chrome has a limit of local storage used by extension. The oldest
			tweet will automatically replaced by newly added if the limit is
			reached.
		</p>
		<div className="mt-8 flex flex-col justify-center items-center">
			<span className="mt-2 text-sm text-slate-400">A Work From</span>
			<div className="text-lg font-semibold">CMD Loop</div>
			<div className="mt-1 text-xs text-slate-400">
				Based on Timeline by YGeeker
			</div>
			<div className="flex mt-2 mb-4 text-slate-500 space-x-1">
				<a
					href="https://www.ygeeker.com/support/timeline/legal/term-of-use"
					className="px-2 hover:underline"
				>
					Terms
				</a>
			</div>
		</div>
	</>
);

export default Footer;
