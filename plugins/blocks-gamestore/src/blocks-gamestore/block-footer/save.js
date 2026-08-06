import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { copyrights, logos, links } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="inner-footer">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
