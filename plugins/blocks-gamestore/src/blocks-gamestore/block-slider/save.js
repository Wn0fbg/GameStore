import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title, description, slides } = attributes;

	return (
		<div {...useBlockProps.save({ className: "alignfull" })}>
			<div className="slider-inner-content">
				<RichText.Content
					tagName="h2"
					className="slider-title"
					value={title}
				/>
				<RichText.Content
					tagName="p"
					className="slider-description"
					value={description}
				/>
				{slides.length > 0 && (
					<div className="slider-media">
						<div className="swiper-wrapper">
							{slides.map(
								(slide, idx) =>
									slide.image && (
										<div className="swiper-slide" key={idx}>
											<img
												src={slide.image}
												alt={`Slide ${idx + 1}`}
												className="blur-image"
											/>
											<img
												src={slide.image}
												alt={`Slide ${idx + 1}`}
												className="original-image"
											/>
										</div>
									),
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
