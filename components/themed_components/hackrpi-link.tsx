import NextImage from "next/image";

export default function HackRPILink({
	children,
	href,
	className,
}: {
	children: React.ReactNode;
	href: string;
	className?: string;
}) {
	return (
		<div
			className={`${className} flex group border-hackrpi-secondary-yellow border-2 text-white hover:bg-hackrpi-secondary-yellow hover:text-hackrpi-secondary-light-blue transition-colors duration-200 font-sans font-medium `}
		>
			<div className="w-full h-full flex items-center justify-center m-2">
				<a href={href} className="">
					{children}
				</a>
			</div>
			<svg
				className="sticky z-10 top-2 right-2 m-0.5 group-hover:fill-hackrpi-secondary-light-blue fill-hackrpi-secondary-yellow transition-colors duration-200"
				xmlns="http://www.w3.org/2000/svg"
				width="15"
				height="15"
				viewBox="0 0 11 11"
			>
				<path d="M11 1C11 0.447715 10.5523 -3.74211e-07 10 4.72575e-08L1 -1.63477e-07C0.447715 -1.63477e-07 2.8711e-07 0.447715 2.8711e-07 1C2.8711e-07 1.55228 0.447715 2 1 2L9 2L9 10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10L11 1ZM1.70711 10.7071L10.7071 1.70711L9.29289 0.292893L0.292893 9.29289L1.70711 10.7071Z" />
			</svg>
		</div>
	);
}
