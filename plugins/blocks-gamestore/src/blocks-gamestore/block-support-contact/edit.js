import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { title, description, image } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Support Contact Settings">
					<TextControl
						label="Title"
						value={title}
						onChange={(val) => setAttributes({ title: val })}
					/>
					<TextareaControl
						label="Description"
						value={description}
						onChange={(val) => setAttributes({ description: val })}
					/>
					<br />
					<br />
					{image && <img src={image} className="bg-image" />}
					<MediaPlaceholder
						icon="format-image"
						labels={{ title: "Image" }}
						onSelect={(media) => setAttributes({ image: media.url })}
						accept="image/*"
						allowedTypes={["image"]}
						notices={["Image"]}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="wrapper support-contact-inner">
					<div className="support-contact-left">
						<RichText
							tagName="h2"
							className="support-contact-title"
							value={title}
							onChange={(title) => setAttributes({ title })}
						/>
						<RichText
							tagName="p"
							className="support-contact-description"
							value={description}
							onChange={(description) => setAttributes({ description })}
						/>
						<a href="/contact" className="hero-button shadow not-found-button">
							Go to Contact page
						</a>
					</div>
					<div className="support-contact-left">
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
		</>
	);
}
