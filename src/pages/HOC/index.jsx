import React from 'react';
import { Loading } from "@/components";

export default function useIndex(Components) {
	return (
		<React.Suspense fallback={<Loading />}>
			<Components />
		</React.Suspense>
	)
}
