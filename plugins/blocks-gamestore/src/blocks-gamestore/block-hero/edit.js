import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { title, description, link, linkAnchor, video } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Hero Settings">
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
					<TextControl
						label="Button URL"
						value={link}
						onChange={(link) => setAttributes({ link })}
					/>
					<TextControl
						label="Button Anchor"
						value={linkAnchor}
						onChange={(linkAnchor) => setAttributes({ linkAnchor })}
					/>
					{video && (
						<video controls muted>
							<source src={video} type="video/mp4" />
						</video>
					)}
					<MediaUpload
						onSelect={(media) => setAttributes({ video: media.url })}
						accept="video/*"
						value={video}
						render={({ open }) => (
							<button
								className="components-button is-secondary video-upload"
								onClick={open}
							>
								Upload Video
							</button>
						)}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}></div>
		</>
	);
}
