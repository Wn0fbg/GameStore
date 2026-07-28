import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl } from "@wordpress/components";
import "./editor.scss";
import ServerSideRender from "@wordpress/server-side-render";

export default function Edit({ attributes, setAttributes }) {
	const { count, title, description, image } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", "blocks-gamestore")}>
					<TextControl
						label={__("Count", "blocks-gamestore")}
						value={count}
						onChange={(val) => setAttributes({ count: parseInt(val) || 5 })}
					/>
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
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<ServerSideRender
					block="blocks-gamestore/recent-news"
					attributes={attributes}
				/>
			</div>
		</>
	);
}
