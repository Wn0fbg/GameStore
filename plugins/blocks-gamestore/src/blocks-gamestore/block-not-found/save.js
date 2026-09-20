import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title, description, image, imageBg } = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: "alignfull",
				style: {
					background: imageBg ? `url(${imageBg})` : undefined,
				},
			})}
		>
			<div className="wrapper not-found-inner">
				<div className="not-found-top">
					<RichText.Content
						tagName="h2"
						className="not-found-title"
						value={title}
					/>
					<RichText.Content
						tagName="p"
						className="not-found-description"
						value={description}
					/>
				</div>
				<div className="not-found-bottom">
					{image && (
						<img className="image-not-found" src={image} alt="not-found" />
					)}
					<a href="/" className="hero-button shadow not-found-button">
						go back
					</a>
				</div>
			</div>
		</div>
	);
}
