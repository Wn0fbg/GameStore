import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import "./editor.scss";

const FAQItem = ({
	index,
	faq,
	onTitleChange,
	onDescriptionChange,
	onRemove,
}) => {
	return (
		<div className="faq-item">
			<br />
			<TextControl
				label="Question"
				value={faq.title}
				onChange={(title) => onTitleChange(title, index)}
			/>
			<TextareaControl
				label="Answer"
				value={faq.description}
				onChange={(description) => onDescriptionChange(description, index)}
			/>
			<Button
				className="components-button is-secondary"
				isDestructive
				onClick={() => onRemove(index)}
			>
				Remove Item
			</Button>
		</div>
	);
};

export default function Edit({ attributes, setAttributes }) {
	const { title } = attributes;
	const [faqs, setFaqs] = useState(attributes.faqs || []);

	const onFAQChange = (updatedFAQ, index) => {
		const updatedFaqs = [...faqs];
		updatedFaqs[index] = updatedFAQ;
		setFaqs(updatedFaqs);
		setAttributes({ faqs: updatedFaqs });
	};

	const addFAQ = () => {
		const newFaqs = [...faqs, { title: "", description: "" }];
		setFaqs(newFaqs);
		setAttributes({ faqs: newFaqs });
	};

	const handleTitleChange = (newTitle, index) => {
		const updatedFAQ = { ...faqs[index], title: newTitle };
		onFAQChange(updatedFAQ, index);
	};

	const handleDescriptionChange = (newDescription, index) => {
		const updatedFAQ = { ...faqs[index], description: newDescription };
		onFAQChange(updatedFAQ, index);
	};

	const removeFAQ = (index) => {
		const updatedFaqs = [...faqs];
		updatedFaqs.splice(index, 1);
		setFaqs(updatedFaqs);
		setAttributes({ faqs: updatedFaqs });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="FAQs Settings">
					<TextControl
						label="Title"
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>
					{faqs.map((faq, index) => (
						<FAQItem
							key={index}
							index={index}
							faq={faq}
							onTitleChange={handleTitleChange}
							onDescriptionChange={handleDescriptionChange}
							onRemove={removeFAQ}
						/>
					))}
					<br />
					<Button className="components-button is-primary" onClick={addFAQ}>
						Add FAQ
					</Button>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="wrapper faq-inner">
					<RichText
						tagName="h1"
						className="faq-title"
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>
					{faqs.map((faq, index) => (
						<div key={index} className="faq-item">
							<RichText
								tagName="p"
								className="faq-item-title"
								value={faq.title}
								onChange={(newTitle) => handleTitleChange(newTitle, index)}
							/>
							<RichText
								tagName="p"
								className="faq-item-description"
								value={faq.description}
								onChange={(newDescription) =>
									handleDescriptionChange(newDescription, index)
								}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
