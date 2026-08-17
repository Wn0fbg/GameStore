import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title, faqs } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="wrapper faq-inner">
				<RichText.Content
					tagName="h2"
					className="faq-title"
					value={title}
					onChange={(title) => setAttributes({ title })}
				/>
				{faqs.map((faq, index) => {
					<div key={index} className="faq-item">
						<RichText.Content
							tagName="div"
							className="faq-item-title"
							value={faq.title}
						/>
						<RichText.Content
							tagName="div"
							className="faq-item-description"
							value={faq.description}
						/>
					</div>;
				})}
			</div>
		</div>
	);
}
