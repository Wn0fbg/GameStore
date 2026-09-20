import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title, image } = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: "alignfull",
				style: {
					background: image ? `url(${image})` : undefined,
				},
			})}
		>
			<div className="wrapper">
				<RichText.Content
					tagName="h1"
					className="services-header-title"
					value={title}
					onChange={(title) => setAttributes({ title })}
				/>
			</div>
		</div>
	);
}
