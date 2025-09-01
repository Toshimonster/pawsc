import React, { useRef, useState, useEffect, useCallback } from "react";
import { IonFabButton, IonIcon } from "@ionic/react";
import "./PixelGrid.css";
import { refreshOutline } from "ionicons/icons";

interface PixelGridProps {
	drawColor: string;
	pixelData: string[][];
	onPixelChange: (x: number, y: number, color: string) => void;
}

const PixelGrid: React.FC<PixelGridProps> = ({
	drawColor,
	pixelData,
	onPixelChange,
}: PixelGridProps) => {
	const gridSize = { width: 64, height: 32 };
	const borderSize = 1;
	const borderColor = "#000000";

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [isDrawing, setIsDrawing] = useState(false);
	const [pixelSize, setPixelSize] = useState(
		(window.innerWidth * 0.8) / gridSize.width
	);

	const updateCanvasSize = useCallback(() => {
		if (!canvasRef.current) return;

		canvasRef.current.width = window.innerWidth * 0.8;
		canvasRef.current.height =
			(canvasRef.current.width * gridSize.height) / gridSize.width;
		setPixelSize(canvasRef.current.width / gridSize.width);
	}, [gridSize.height, gridSize.width]);

	const drawBorders = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const drawLine = (start: number, sideways: boolean) => {
			for (let i = 0; i < borderSize; i++) {
				if (sideways) {
					ctx.moveTo(0, start + i);
					ctx.lineTo(canvas.width - 1, start + i);
				} else {
					ctx.moveTo(start + i, 0);
					ctx.lineTo(start + i, canvas.height - 1);
				}
			}
		};

		ctx.strokeStyle = borderColor;
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(0, canvas.height);
		for (let i = 0; i < gridSize.width; i++) {
			drawLine(Math.floor(((i + 1) * canvas.width) / gridSize.width), false);
		}
		ctx.moveTo(0, 0);
		ctx.lineTo(canvas.width, 0);
		for (let i = 0; i < gridSize.height; i++) {
			drawLine(Math.floor(((i + 1) * canvas.height) / gridSize.height), true);
		}
		ctx.stroke();
	}, [gridSize.height, gridSize.width]);

	const redrawCanvas = useCallback(() => {
		if (!canvasRef.current) return;
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawBorders();

		const temp = [...pixelData];
		for (let x = 0; x < gridSize.width; x++) {
			for (let y = 0; y < gridSize.height; y++) {
				ctx.fillStyle = temp[x][y];
				ctx.fillRect(
					x * pixelSize + borderSize,
					y * pixelSize + borderSize,
					pixelSize - 2 * borderSize,
					pixelSize - 2 * borderSize
				);
			}
		}
	}, [pixelData, pixelSize, drawBorders]);

	const handleMouseDown = useCallback(
		(e: React.MouseEvent<HTMLCanvasElement>) => {
			setIsDrawing(true);
			handleMouseMove(e);
		},
		[]
	);

	const handleMouseMove = useCallback(
		(e: React.MouseEvent<HTMLCanvasElement>) => {
			if (!isDrawing || !canvasRef.current) return;

			const rect = canvasRef.current.getBoundingClientRect();
			const x = Math.floor((e.clientX - rect.left) / pixelSize);
			const y = Math.floor((e.clientY - rect.top) / pixelSize);

			if (x >= 0 && x < gridSize.width && y >= 0 && y < gridSize.height) {
				onPixelChange(x, y, drawColor);
			}
		},
		[isDrawing, pixelSize, drawColor, onPixelChange, gridSize.height, gridSize.width]
	);

	const handleMouseUp = useCallback(() => {
		setIsDrawing(false);
	}, []);

	const handleMouseLeave = useCallback(() => {
		setIsDrawing(false);
	}, []);

	useEffect(() => {
		updateCanvasSize();
		window.addEventListener("resize", updateCanvasSize);
		return () => window.removeEventListener("resize", updateCanvasSize);
	}, [updateCanvasSize]);

	useEffect(() => {
		redrawCanvas();
	}, [redrawCanvas]);

	return (
		<div className="PixelGrid">
			<canvas
				ref={canvasRef}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseLeave}
				style={{
					border: "1px solid #ccc",
					cursor: "crosshair",
				}}
			/>
		</div>
	);
};

export default PixelGrid;
