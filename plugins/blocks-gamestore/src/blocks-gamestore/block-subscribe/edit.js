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
				<PanelBody title={__("Setting", "blocks-gamestore")}>
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
					{image && <img src={image} className="bg-image" />}
					<MediaPlaceholder
						icon="format-image"
						labels={{ title: "Image" }}
						onSelect={(media) => setAttributes({ image: media.url })}
						accept="image/*"
						allowedTypes={["image"]}
						notices={["Image"]}
					/>
					<br />
					<br />
					<TextControl
						label={__("Shortcode", "blocks-gamestore")}
						value={shortcode}
						onChange={(val) => setAttributes({ shortcode: val })}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{...useBlockProps({
					className: "alignfull",
					style: {
						background: image ? `url(${image})` : undefined,
					},
				})}
			>
				<div className="subscribe-inner wrapper">
					<RichText
						tagName="h2"
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
