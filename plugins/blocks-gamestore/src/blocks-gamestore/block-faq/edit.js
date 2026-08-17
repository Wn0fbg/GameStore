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
	const { title } = attributes;
	const setLinks = (newLinks) => setAttributes({ links: newLinks });

	return (
		<>
			<InspectorControls>
				<PanelBody title="FAQs Settings">
					<TextControl
						label="Title"
						value={title}
						onChange={(val) => setAttributes({ title: val })}
					/>
				</PanelBody>
				<PanelBody title="FAQs Links">
					<LinkRepeater links={links} setLinks={setLinks} />
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="wrapper cta-inner">
					<div className="left-part">
						<RichText
							tagName="h2"
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
									<a href={link.url} target="_blank" rel="noopener noreferrer">
										{link.anchor || "Unitied Link"}
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
