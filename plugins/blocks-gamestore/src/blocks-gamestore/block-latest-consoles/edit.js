import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaPlaceholder,
	useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl } from "@wordpress/components";
import ServerSideRender from "@wordpress/server-side-render";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { count, title, description, image } = attributes;
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
					<TextControl
						label={__("Count", "blocks-gamestore")}
						value={count}
						onChange={(count) => setAttributes({ count })}
					/>
					<br />
					<br />
					{image && <img src={image} className="bg-image" />}
					<MediaPlaceholder
						icon="format-image"
						label={{ title: "Image" }}
						onSelect={(media) => setAttributes({ image: media.url })}
						accept="image/*"
						allowedTypes={["image"]}
						notices={["Image"]}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<ServerSideRender
					block="blocks-gamestore/block-latest-consoles"
					attributes={attributes}
				/>
			</div>
		</>
	);
}
