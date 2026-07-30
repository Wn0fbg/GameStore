import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaPlaceholder,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { title, description, image, shortcode } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<TextControl
						label={__("Title", "blocks-gamestore")}
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>
					<TextareaControl
						label={__("Description", "blocks-gamestore")}
						value={description}
						onChange={(description) => setAttributes({ description })}
					/>
					{image && (
						<div
							style={{
								marginTop: "10px",
								marginBottom: "10px",
								maxWidth: "100%",
								overflow: "hidden",
							}}
						>
							<img
								src={image}
								style={{
									maxWidth: "100%",
									height: "auto",
									maxHeight: "150px",
									objectFit: "cover",
									borderRadius: "4px",
								}}
								alt={__("Background Image", "blocks-gamestore")}
							/>
							<button
								onClick={() => setAttributes({ image: "" })}
								style={{
									display: "block",
									marginTop: "5px",
									padding: "4px 8px",
									background: "#dc3232",
									color: "#fff",
									border: "none",
									borderRadius: "3px",
									cursor: "pointer",
								}}
							>
								{__("Remove Image", "blocks-gamestore")}
							</button>
						</div>
					)}
					<MediaPlaceholder
						icon="format-image"
						label={__("Background Image", "blocks-gamestore")}
						onSelect={(media) => setAttributes({ image: media.url })}
						accept="image/*"
						allowedTypes={["image"]}
					/>
					<TextControl
						label={__("Shortcode", "blocks-gamestore")}
						value={shortcode}
						onChange={(value) => setAttributes({ shortcode: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{...useBlockProps({
					className="alignfull",
					style: {
						background: image ? `url(${image})` : undefined,
					},
				})}
			>
				<div className="subscribe-inner wrapper">
					<RichText
						tagName="h1"
						className="subscribe-title"
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>
					<RichText
						tagName="p"
						className="subscribe-description"
						value={description}
						onChange={(description) => setAttributes({ description })}
					/>
				</div>
			</div>
		</>
	);
}
