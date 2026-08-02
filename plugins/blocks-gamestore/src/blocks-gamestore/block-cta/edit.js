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

const LinkRepeater = ({ links, setLinks }) => {
	const updateLink = (index, key, value) => {
		const updated = [...links];
		updated[index][key] = value;
		setLinks(updated);
	};

	return (
		<div className="link-repeater">
			{links?.map((link, index) => (
				<div
					key={index}
					className="link-repeater-item"
					style={{
						background: "#f0f0f0",
						padding: "15px",
						marginBottom: "10px",
						borderRadius: "6px",
						position: "relative",
					}}
				>
					<TextControl
						label="URL"
						value={link.url || ""}
						onChange={(value) => updateLink(index, "url", value)}
						placeholder="https://example.com"
					/>
					<TextControl
						label="Anchor Text"
						value={link.anchor || ""}
						onChange={(value) => updateLink(index, "anchor", value)}
						placeholder="Link text"
					/>
					<Button
						isDestructive
						isSmall
						onClick={() => setLinks(links.filter((_, i) => i !== index))}
						style={{ marginTop: "8px" }}
					>
						🗑 Remove Link
					</Button>
				</div>
			))}
			<Button
				isPrimary
				onClick={() => setLinks([...links, { url: "", anchor: "" }])}
			>
				➕ Add Link
			</Button>
		</div>
	);
};

export default function Edit({ attributes, setAttributes }) {
	const { title, description, links = [], imageBg, image } = attributes;

	const blockProps = useBlockProps({
		className: "alignfull",
		style: {
			background: imageBg ? `url(${imageBg})` : undefined,
		},
	});

	const ImagePreview = ({ src, onRemove, label }) =>
		src && (
			<div
				style={{
					margin: "10px 0",
					position: "relative",
					display: "inline-block",
				}}
			>
				<img
					src={src}
					style={{
						maxWidth: "100%",
						maxHeight: "120px",
						objectFit: "cover",
						borderRadius: "6px",
						border: "2px solid #ddd",
					}}
					alt={label}
				/>
				<Button
					isDestructive
					isSmall
					onClick={onRemove}
					style={{
						position: "absolute",
						top: "5px",
						right: "5px",
						minWidth: "30px",
						padding: "0 8px",
					}}
				>
					✕
				</Button>
			</div>
		);

	return (
		<>
			<InspectorControls>
				<PanelBody title="CTA Settings">
					<TextControl
						label="Title"
						value={title || ""}
						onChange={(val) => setAttributes({ title: val })}
					/>
					<TextareaControl
						label="Description"
						value={description || ""}
						onChange={(val) => setAttributes({ description: val })}
					/>

					<MediaPlaceholder
						icon="format-image"
						labels={{ title: "Background image" }}
						onSelect={(media) => setAttributes({ imageBg: media.url })}
						accept="image/*"
						allowedTypes={["image"]}
					/>
					<ImagePreview
						src={imageBg}
						onRemove={() => setAttributes({ imageBg: "" })}
						label="Background"
					/>

					<MediaPlaceholder
						icon="format-image"
						labels={{ title: "CTA image" }}
						onSelect={(media) => setAttributes({ image: media.url })}
						accept="image/*"
						allowedTypes={["image"]}
					/>
					<ImagePreview
						src={image}
						onRemove={() => setAttributes({ image: "" })}
						label="CTA"
					/>
				</PanelBody>

				<PanelBody title="Manage Links">
					<LinkRepeater
						links={Array.isArray(links) ? links : []}
						setLinks={(newLinks) => setAttributes({ links: newLinks })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="wrapper cta-inner">
					<div className="left-part">
						<RichText
							tagName="h1"
							className="cta-title"
							value={title || ""}
							onChange={(val) => setAttributes({ title: val })}
							placeholder="Enter title..."
						/>
						<RichText
							tagName="p"
							className="cta-description"
							value={description || ""}
							onChange={(val) => setAttributes({ description: val })}
							placeholder="Enter description..."
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
						{image && <img className="image-cta" src={image} alt="CTA" />}
					</div>
				</div>
			</div>
		</>
	);
}
