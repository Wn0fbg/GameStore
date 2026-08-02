import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title, description, links, imageBg, image } = attributes;

	const blockProps = useBlockProps.save({
		className: "alignfull",
		style: {
			background: imageBg ? `url(${imageBg})` : undefined,
		},
	});

	return (
		<div {...blockProps}>
			<div className="wrapper cta-inner">
				<div className="left-part">
					<RichText.Content tagName="h1" className="cta-title" value={title} />
					<RichText.Content
						tagName="p"
						className="cta-description"
						value={description}
					/>
					<div className="links-list">
						{(Array.isArray(links) ? links : []).map((link, index) => (
							<p key={index}>
								<a
									href={link.url || "#"}
									target="_blank"
									rel="noopener noreferrer"
								>
									{link.anchor || "Untitled Link"}
								</a>
							</p>
						))}
					</div>
				</div>
				<div className="right-part">
					{image && <img className="image-cta" src={image} alt="background" />}
				</div>
			</div>
		</div>
	);
}
