import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		title,
		description,
		image,
		opacity,
		lTitle,
		isReverse,
		link,
		linkAnchor,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div
				className={`wrapper support-contact-inner ${
					isReverse ? "is-reverse" : ""
				}`}
			>
				<div className="support-contact-left">
					<RichText.Content
						tagName="h2"
						className={`support-contact-title ${lTitle ? "l-title" : ""}`}
						value={title}
					/>
					<RichText.Content
						tagName="p"
						className="support-contact-description"
						value={description}
					/>
					<a href={link} className="hero-button shadow not-found-button">
						{linkAnchor}
					</a>
				</div>
				<div className="support-contact-right">
					<div
						className={`image-support-wrapper ${opacity ? "no-opacity" : ""}`}
					>
						{image && (
							<img className="image-support-contact" src={image} alt="" />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
