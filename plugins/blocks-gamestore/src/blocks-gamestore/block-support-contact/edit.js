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
	ToggleControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { title, description, image, opacity, lTitle, isReverse } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Support Contact Settings">
					<TextControl
						label="Title"
						value={title}
						onChange={(val) => setAttributes({ title: val })}
					/>
					<ToggleControl
						label="Opacity Zero"
						checked={opacity}
						onChange={(opacity) => setAttributes({ opacity })}
					/>
					<ToggleControl
						label="Litle Title"
						checked={lTitle}
						onChange={(lTitle) => setAttributes({ lTitle })}
					/>
					<ToggleControl
						label="Reversed block"
						checked={isReverse}
						onChange={(isReverse) => setAttributes({ isReverse })}
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
				<div
					className={`wrapper support-contact-inner ${
						isReverse ? "is-reverse" : ""
					}`}
				>
					<div className="support-contact-left">
						<RichText
							tagName="h2"
							className={`support-contact-title ${lTitle ? "l-title" : ""}`}
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
							Login / Register
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
		</>
	);
}
