import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	ToggleControl,
	TextareaControl,
	Button,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import "./editor.scss";

const LinkRepeater = ({ links, setLinks }) => {
	const addLink = () => {
		setLinks([...links, { url: "", anchor: "" }]);
	};

	const removeLink = (index) => {
		const updatedLinks = links.filter((_, i) => i !== index);
		setLinks(updatedLinks);
	};

	const updatedLink = (index, key, value) => {
		const updatedLinks = [...links];
		updatedLinks[index][key] = value;
		setLinks(updatedLinks);
	};

	return (
		<>
			<div className="link-repeater">
				<p>Manage Links</p>
				{links.map((link, index) => (
					<div key={index} className="link-repeater-item">
						<br />
						<TextControl
							label="URL"
							value={link.url}
							onChange={(value) => updatedLink(index, "url", value)}
							placeholder="https://example.com"
						/>
						<TextControl
							label="Anchor Text"
							value={link.anchor}
							onChange={(value) => updatedLink(index, "anchor", value)}
							placeholder="Link text"
						/>
						<Button
							variant="secondary"
							onClick={() => removeLink(index)}
							className="remove-link-button"
						>
							Remove Link
						</Button>
					</div>
				))}
				<br />
				<Button variant="primary" onClick={addLink} className="add-link-button">
					Add Link
				</Button>
			</div>
		</>
	);
};

export default function Edit({ attributes, setAttributes }) {
	const { title, description, links, image, imageBg } = attributes;

	const blockProps = useBlockProps({
		className: "alignfull",
		style: {
			background: imageBg ? `url(${imageBg})` : undefined,
		},
	});

	const setLinks = (newLinks) => setAttributes({ links: newLinks });

	return (
		<>
			<InspectorControls>
				<PanelBody title="CTA Settings">
					<TextControl
						label="Title"
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>
					<TextareaControl
						label="Description"
						value={description}
						onChange={(description) => setAttributes({ description })}
					/>
					{image && <img src={imageBg} alt="Background image" />}
					<MediaPlaceholder
						icon="format-image"
						labels={{ title: "Background Image" }}
						onSelect={(media) => setAttributes({ imageBg: media.url })}
						accept="image/*"
						allowedTypes={["image"]}
					/>
					<br />
					<br />
					{image && <img src={image} alt="cta image" />}
					<MediaPlaceholder
						icon="format-image"
						labels={{ title: "Image cta" }}
						onSelect={(media) => setAttributes({ image: media.url })}
						accept="image/*"
						allowedTypes={["image"]}
					/>
				</PanelBody>
				<PanelBody title="Manage Links">
					<LinkRepeater links={links} setLinks={setLinks} />
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="wrapper cta-inner">
					<div className="left-part">
						<RichText
							tagName="h1"
							className="cta-title"
							value={title}
							onChange={(title) => setAttributes({ title })}
						/>
						<RichText
							tagName="p"
							className="cta-description"
							value={description}
							onChange={(description) => setAttributes({ description })}
						/>
						<div className="links-list">
							{links.map((link, index) => (
								<p key={index}>
									<a href={link.url} target="_blank" rel="noopenner noreferrer">
										{link.anchor || "Untitled Link"}
									</a>
								</p>
							))}
						</div>
					</div>
					<div className="right-part">
						{image && <img className="image-cta" src={image} alt="cta image" />}
					</div>
				</div>
			</div>
		</>
	);
}
