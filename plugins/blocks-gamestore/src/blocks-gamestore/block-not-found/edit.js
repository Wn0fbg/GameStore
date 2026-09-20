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
	const { title, description, image, imageBg } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Not found Settings">
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
					{imageBg && <img src={imageBg} className="bg-image" />}
					<MediaPlaceholder
						icon="format-image"
						labels={{ title: "Background Image" }}
						onSelect={(media) => setAttributes({ imageBg: media.url })}
						accept="image/*"
						allowedTypes={["image"]}
						notices={["Image"]}
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
			<div
				{...useBlockProps({
					className: "alignfull",
					style: {
						background: imageBg ? `url(${imageBg})` : undefined,
					},
				})}
			>
				<div className="wrapper not-found-inner">
					<div className="not-found-top">
						<RichText
							tagName="h2"
							className="not-found-title"
							value={title}
							onChange={(title) => setAttributes({ title })}
						/>
						<RichText
							tagName="p"
							className="not-found-description"
							value={description}
							onChange={(description) => setAttributes({ description })}
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
		</>
	);
}
