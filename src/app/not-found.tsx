import ButtonBack from "@/components/ButtonBack";
import Link from "next/link";
import React from "react";

const NotFound = () => {
	return (
		<div className="grid gap-4">
			<h1 className="text-center text-2xl">404</h1>
			<div className="text-center">
				<ButtonBack>Volver al Inicio</ButtonBack>
			</div>
		</div>
	);
};

export default NotFound;
