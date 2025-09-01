import { IonImg, IonSpinner } from "@ionic/react";
import React, { useState } from "react";

export function ImageLoad(props: { src: string }) {
	const [imageLoaded, setImageLoaded] = useState(false);

	const handleImageLoad = () => {
		setImageLoaded(true);
	};

	return (
		<div>
			<IonImg
				src={props.src}
				className="StateImage"
				onLoad={handleImageLoad}
				hidden={!imageLoaded}
			/>
			{imageLoaded && <IonSpinner name="dots" className="StateImage" />}
		</div>
	);
}
