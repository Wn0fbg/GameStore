import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title, description, image } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="wrapper support-contact-inner">
				<div className="support-contact-left">
					<RichText.Content
						tagName="h2"
						className="support-contact-title"
						value={title}
					/>
					<RichText.Content
						tagName="p"
						className="support-contact-description"
						value={description}
					/>
					<a href="/contact" className="hero-button shadow not-found-button">
						Go to Contact page
					</a>
				</div>
				<div className="support-contact-right">
					{image && (
						<img
							className="image-support-contact"
							src={image}
							alt="support-contact"
						/>
					)}
				</div>
			</div>
		</div>
	);
}
