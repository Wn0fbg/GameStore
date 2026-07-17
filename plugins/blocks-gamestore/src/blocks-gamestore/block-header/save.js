import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { memberLink, cartLink } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div className="inner-header">
				<InnerBlocks.Content />
				<div className="right-section">
					<div className="header-search">
						<svg
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							color="var(--action-main, rgba(14, 13, 15, 0.64))"
						>
							<rect
								width="24"
								height="24"
								x="0"
								y="0"
								fill="rgba(255,255,255,0)"
							/>
							<g>
								<g>
									<path
										fill="currentColor"
										fillRule="nonzero"
										d="M22.29 21.66L17.61 16.95C20.97 13.2 20.7 7.44002 16.95 4.05002C13.2 0.660022 7.44002 0.960021 4.05002 4.71002C0.660022 8.46002 0.960021 14.22 4.71002 17.61C8.19002 20.76 13.5 20.76 16.98 17.61L21.69 22.32L22.29 21.66ZM10.83 19.05C6.30002 19.05 2.61002 15.36 2.61002 10.83C2.61002 6.27002 6.30002 2.61002 10.83 2.61002C15.36 2.61002 19.05 6.30002 19.05 10.83C19.05 15.36 15.36 19.05 10.83 19.05Z"
									/>
									<path
										fill="currentColor"
										fillRule="nonzero"
										d="M10.8301 3.83984L10.8301 4.73984C14.1901 4.73984 16.9201 7.46984 16.9201 10.8298L17.8201 10.8298C17.8201 6.95984 14.7001 3.83984 10.8301 3.83984Z"
									/>
								</g>
							</g>
						</svg>
					</div>
					<div className="header-mode-switcher">
						<svg
							viewBox="0 0 36 36"
							xmlns="http://www.w3.org/2000/svg"
							width="36"
							height="36"
							fill="none"
							color="var(--action-main, rgba(14, 13, 15, 0.64))"
						>
							<rect
								width="36"
								height="36"
								x="0"
								y="0"
								rx="18"
								fill="rgba(255,255,255,0)"
							/>
							<g>
								<path
									d="M12 0L0 0"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1"
									transform="matrix(0,1,-1,0,21,12)"
								/>
								<path
									d="M9 18L12 18"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1"
								/>
								<path
									d="M12.5098 9.51025L14.6398 11.6403"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1"
								/>
								<path
									d="M0 0L3 0"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1"
									transform="matrix(0,1,-1,0,21,6)"
								/>
								<path
									d="M3 0L0 0"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1"
									transform="matrix(0,1,-1,0,21,27)"
								/>
								<path
									d="M12.5098 26.4899L14.6398 24.3599"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1"
								/>
								<path
									d="M21 24C17.6863 24 15 21.3137 15 18C15 14.6863 17.6863 12 21 12C24.3137 12 27 14.6863 27 18C27 21.3137 24.3137 24 21 24Z"
									fillRule="evenodd"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1"
								/>
							</g>
						</svg>
					</div>
					{cartLink && (
						<div className="header-cart-link">
							<a href={cartLink}>
								<svg
									viewBox="0 0 36 36"
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									fill="none"
									color="var(--action-main, rgba(14, 13, 15, 0.64))"
								>
									<rect
										width="36"
										height="36"
										x="0"
										y="0"
										rx="18"
										fill="rgba(255,255,255,0)"
									/>
									<g>
										<path
											d="M7.71436 14.5713L9.42864 26.5713L26.5715 26.5713L28.2858 14.5713"
											fillRule="nonzero"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1"
										/>
										<path
											d="M12.8574 16.2859L14.5717 9.42871"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1"
										/>
										<path
											d="M23.143 16.2859L21.4287 9.42871"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1"
										/>
										<path
											d="M6 14.5713L30 14.5713"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1"
										/>
									</g>
								</svg>
							</a>
						</div>
					)}
					{memberLink && (
						<div className="header-member-link">
							<a href={memberLink}>Member Area</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
